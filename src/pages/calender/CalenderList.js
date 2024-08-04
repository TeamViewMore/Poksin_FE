import React, { useState, useEffect, useCallback } from "react";
import * as C from "../../styles/calender/CalenderListStyle";
import PlusBtn from "../../components/PlusBtn";
import moment from "moment";
import "react-calendar/dist/Calendar.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useCookies } from "react-cookie";

function CalenderList() {
    const [value, onChange] = useState(new Date());
    const [clickMonth, setClickMonth] = useState(new Date());
    const navigate = useNavigate();
    const [evidenceData, setEvidenceData] = useState([]);
    const [cookies] = useCookies(["authToken"]);

    //의존성 문제 해결을 위해 useCallback 사용
    const fetchEvidenceData = useCallback(
        async (date) => {
            try {
                const year = moment(date).year();
                const month = moment(date).month() + 1;
                const token = cookies.accessToken;

                if (!token) {
                    console.error("No access token found in cookies");
                    return;
                }

                const response = await axios.get("https://poksin-backend.store/evidence/get-month-evidence", {
                    params: { year, month },
                    headers: {
                        Authorization: `${token}`, // 인증 토큰
                    },
                });
                if (response.data.code === "SUCCESS_RETRIEVE_MONTH_EVIDENCE") {
                    console.log("Fetch Evidence Data Response:", response);
                    setEvidenceData(response.data.data);
                }
            } catch (error) {
                console.error("Error fetching evidence data:", error);
            }
        },
        [cookies]
    );

    useEffect(() => {
        if (clickMonth) {
            fetchEvidenceData(clickMonth);
        }
    }, [clickMonth, fetchEvidenceData]);

    // 달 바뀔 때 호출하는 함수
    const handleActiveStartDateChange = ({ activeStartDate }) => {
        console.log(`Active month:`, { activeStartDate });
        setClickMonth(activeStartDate);
        onChange(activeStartDate); // value 상태 업데이트
    };

    // 증거 개수 따라 색상 채우기
    const getHighlightedDates = () => {
        const dateMap = {};
        evidenceData.forEach((evidence) => {
            const dateString = moment(evidence.createdAt).format("YYYY-MM-DD");
            dateMap[dateString] = evidence.evidenceCount;
        });
        return dateMap;
    };

    const tileClassName = ({ date }) => {
        const dateString = moment(date).format("YYYY-MM-DD");
        const highlightedDates = getHighlightedDates();
        const count = highlightedDates[dateString];

        if (count) {
            if (count >= 3) return "high-evidence";
            if (count === 2) return "medium-evidence";
            if (count === 1) return "low-evidence";
        }
        return null;
    };

    // 해당 날짜의 증거 개수 세기
    const getEvidenceCountForDate = (date) => {
        const dateString = moment(date).format("YYYY-MM-DD");
        const highlightedDates = getHighlightedDates();
        return highlightedDates[dateString];
    };

    // 캘린더 날짜 선택 시 디테일로 이동
    const handleDayClick = (date) => {
        const evidenceCount = getEvidenceCountForDate(date);
        navigate(`/calender/${moment(date).format("YYYY-MM-DD")}`);
    };

    return (
        <>
            <C.CalenderList>
                <C.CalenderWrapper>
                    <C.CalendarBox
                        onChange={setClickMonth}
                        value={value}
                        formatDay={(locale, date) => moment(date).format("D")}
                        formatMonthYear={(locale, date) => moment(date).format("YYYY. MM.")}
                        formatYear={(locale, date) => moment(date).format("YYYY")}
                        calendarType="gregory"
                        showNeighboringMonth={false}
                        nextLabel=""
                        prevLabel=""
                        next2Label={null}
                        prev2Label={null}
                        minDetail="year"
                        onClickDay={(date) => handleDayClick(date)}
                        onActiveStartDateChange={handleActiveStartDateChange}
                        tileClassName={tileClassName}
                    />
                </C.CalenderWrapper>
                <C.BottomSheet>
                    {evidenceData.length > 0 ? (
                        evidenceData.map((evidence, index) => {
                            const date = moment(evidence.createdAt).format("YYYY-MM-DD"); // 날짜 포맷
                            console.log("Evidence Date:", date); // 디버깅을 위한 로그

                            return (
                                <C.DayRecordBox key={index} onClick={() => handleDayClick(moment(date).toDate())}>
                                    <div className="DayRecordBox-Date">{moment(date).format("MM. DD.")}</div>
                                    <div className="DayRecordBox-Record">
                                        {evidence.evidenceCount}개의 기록이 있습니다.
                                    </div>
                                </C.DayRecordBox>
                            );
                        })
                    ) : (
                        <C.DayRecordBox>
                            <div className="DayRecordBox-Date">이번 달은 등록한 증거가 없어요.</div>
                            <div className="DayRecordBox-Record">하단의 + 버튼을 눌러 날짜 별로 기록해보세요.</div>
                        </C.DayRecordBox>
                    )}
                </C.BottomSheet>
                <PlusBtn></PlusBtn>
            </C.CalenderList>
        </>
    );
}

export default CalenderList;
