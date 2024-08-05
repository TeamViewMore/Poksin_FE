import React, { useState, useEffect, useCallback } from "react";
import ChatBtn from "../../components/ChatBtn";
import Calendar from "react-calendar";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import * as M from "../../styles/other/MainStyle";
import Group6 from "../../img/Group6.svg";
import Group7 from "../../img/Group7.svg";
import axios from "axios";
import { useCookies } from "react-cookie";
import { fetchUserData } from "../../utils/userApi";
import Right from "../../img/right.png";

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
    const [username, setUsername] = useState("");
    const [cookies] = useCookies(["accessToken"]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const token = cookies.accessToken;
                if (!token) {
                    throw new Error("Token is missing");
                }
                const data = await fetchUserData(token);
                setUsername(data.username); // Ensure `data` is what you expect
            } catch (error) {
                console.error("Failed to fetch profile:", error);
            }
        };
        fetchProfile();
    }, [cookies.accessToken]);

    //의존성 문제 해결을 위해 useCallback 사용
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

    // 캘린더로 넘어가는 버튼
    const handleNextMonthClick = () => {
        navigate(`/calender`);
    };

    return (
        <M.Main>
            <M.Precious>
                <M.PreciousId>{username} 님,</M.PreciousId>
                <br />
                당신은 소중한 사람이고, 누구도 당신을 해칠 수 없어요.
            </M.Precious>
            <M.CalenderList>
                <M.CalenderWrapper>
                    <button className="navigate-button" onClick={goToCalender}></button>
                    <M.CalendarBox
                        value={value}
                        formatDay={(locale, date) => moment(date).format("D")}
                        formatMonthYear={(locale, date) => moment(date).format("YYYY. MM.")}
                        formatYear={(locale, date) => moment(date).format("YYYY")}
                        calendarType="gregory"
                        showNeighboringMonth={false}
                        minDetail="year"
                        onClickDay={handleDayClick}
                        tileClassName={() => "custom-tile"}
                    />
                    <M.GoToMainBtn onClick={handleNextMonthClick} src={Right} alt="Right"></M.GoToMainBtn>
                </M.CalenderWrapper>
                <M.Happen>어떤 일이 있었나요?</M.Happen>
                <M.UploadBox onClick={goToUpload}>
                    <img src={Group6} alt="logo" style={{ width: "360px", height: "auto" }} />
                </M.UploadBox>
                <M.Want>폭신폭신은 여러분을 돕고 싶습니다.</M.Want>
                <M.GuideBox onClick={goToGuide}>
                    <img src={Group7} alt="logo" style={{ width: "360px", height: "auto" }} />
                </M.GuideBox>
                <br />
                <br />
                <ChatBtn onClick={goToChat} />
            </M.CalenderList>
        </M.Main>
    );
}

export default Main;
