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

    // 캘린더 날짜 선택 시 디테일로 이동
    const handleDayClick = (date) => {
        navigate(`/calender/${moment(date).format("YYYY-MM-DD")}`);
    };

    // 연동
    // 해당 달의 증거 날짜, 증거 개수
    const [evidenceData, setEvidenceData] = useState([]);
    const [cookies] = useCookies(["authToken"]);
    
    //의존성 문제 해결을 위해 useCallback 사용
    const fetchEvidenceData = useCallback(async (date) => {
        try {
            const year = moment(date).year();
            const month = moment(date).month() + 1;
            const token = cookies.authToken;

            if (!token) {
                console.error("No access token found in localStorage");
                return;
            }

            const response = await axios.get("https://poksin-backend.store/get-month-evidence", {
                params: { year, month },
                headers: {
                    Authorization: `Bearer ${token}`, // 인증 토큰
                },
            });
            if (response.data.code === "SUCCESS_RETRIEVE_MONTH_EVIDENCE") {
                console.log("Fetch Evidence Data Response:", response);
                setEvidenceData(response.data.data);
            }
        } catch (error) {
            console.error("Error fetching evidence data:", error);
        }
    }, [cookies]);

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
                    />
                </C.CalenderWrapper>
                <C.BottomSheet>
                    {evidenceData.map((evidence, index) => (
                        <C.DayRecordBox
                            key={index}
                            onClick={() => handleDayClick(moment(evidence.created_at).toDate())}
                        >
                            <div className="DayRecordBox-Date">{moment(evidence.created_at).format("MM. DD.")}</div>
                            <div className="DayRecordBox-Record">{evidence.evidenceCount}개의 기록이 있습니다.</div>
                        </C.DayRecordBox>
                    ))}
                </C.BottomSheet>
                <PlusBtn></PlusBtn>
            </C.CalenderList>
        </>
    );
}

export default CalenderList;
