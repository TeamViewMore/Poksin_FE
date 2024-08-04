import React, { useState, useEffect, useCallback } from "react";
import PlusBtn from "../../components/PlusBtn";
import Calendar from "react-calendar";
import moment from "moment";
import "react-calendar/dist/Calendar.css";
import { useNavigate } from "react-router-dom";
import * as M from "../../styles/other/MainStyle";
import Group6 from "../../img/Group6.svg";
import Group7 from "../../img/Group7.svg";
import axios from "axios";
import { useCookies } from "react-cookie";

// 증거 개수에 따라 색상 변경 유틸리티 함수
const getHighlightedDates = (evidenceData) => {
    const dateMap = {};
    evidenceData.forEach((evidence) => {
        const dateString = moment(evidence.createdAt).format("YYYY-MM-DD");
        dateMap[dateString] = evidence.evidenceCount;
    });
    return dateMap;
};

const tileClassName =
    (evidenceData) =>
    ({ date }) => {
        const dateString = moment(date).format("YYYY-MM-DD");
        const highlightedDates = getHighlightedDates(evidenceData);
        const count = highlightedDates[dateString];

        if (count) {
            if (count >= 3) return "high-evidence";
            if (count === 2) return "medium-evidence";
            if (count === 1) return "low-evidence";
        }
        return null;
    };

function Main() {
    const [value, onChange] = useState(new Date());
    const [evidenceData, setEvidenceData] = useState([]);
    const [cookies] = useCookies(["accessToken"]);
    const navigate = useNavigate();

    // 증거 데이터 가져오기
    const fetchEvidenceData = useCallback(async () => {
        try {
            const response = await axios.get("https://poksin-backend.store/evidence/get-month-evidence", {
                params: { year: moment().year(), month: moment().month() + 1 },
                headers: {
                    Authorization: `${cookies.accessToken}`,
                },
            });
            if (response.data.code === "SUCCESS_RETRIEVE_MONTH_EVIDENCE") {
                setEvidenceData(response.data.data);
            }
        } catch (error) {
            console.error("Error fetching evidence data:", error);
        }
    }, [cookies.accessToken]);

    useEffect(() => {
        fetchEvidenceData();
    }, [fetchEvidenceData]);

    const handleDayClick = (date) => {
        navigate(`/calender/${moment(date).format("YYYY-MM-DD")}`);
    };

    const goToUpload = () => {
        navigate("/upload");
    };
    const goToGuide = () => {
        navigate("/guide");
    };
    const goToChat = () => {
        navigate("/chat");
    };

    return (
        <>
            <M.Main>
                <M.Precious>
                    <M.PreciousId>id 님,</M.PreciousId>
                    <br />
                    당신은 소중한 사람이에요. 누구도 당신을 해칠 수 없어요.
                </M.Precious>
                <M.CalenderList>
                    <M.CalenderWrapper>
                        <Calendar
                            onChange={onChange}
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
                            onClickDay={handleDayClick}
                            tileClassName={tileClassName(evidenceData)} // 증거 개수에 따른 클래스명 적용
                        />
                    </M.CalenderWrapper>
                    <M.Happen>어떤 일이 있었나요?</M.Happen>
                    <M.UploadBox onClick={goToUpload}>
                        <img src={Group6} alt="logo" style={{ width: "345px", height: "93px" }} />
                    </M.UploadBox>

                    <M.Want>폭신폭신은 여러분을 돕고 싶습니다.</M.Want>
                    <M.GuideBox onClick={goToGuide}>
                        <img src={Group7} alt="logo" style={{ width: "345px", height: "93px" }} />
                    </M.GuideBox>

                    <PlusBtn onClick={goToChat}></PlusBtn>
                </M.CalenderList>
            </M.Main>
        </>
    );
}

export default Main;
