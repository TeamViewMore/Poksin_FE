import React from "react";
import PlusBtn from "../../components/PlusBtn";
import { useState } from "react";
import Calendar from "react-calendar";
import moment from "moment";
import "react-calendar/dist/Calendar.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import * as M from "../../styles/other/MainStyle";
import Group6 from "../../img/Group6.svg";

import Group7 from "../../img/Group7.svg";

function Main() {
    const [value, onChange] = useState(new Date());

    const navigate = useNavigate();

    const handleDayRecordClick = (date) => {
        navigate(`/calender/${moment(date).format("YYYY-MM-DD")}`);
    };
    const dates = [
        moment(value).toDate(),
        moment(value).add(1, "days").toDate(),
        moment(value).add(2, "days").toDate(),
        moment(value).add(3, "days").toDate(),
    ];
    return (
        <>
            <M.Main>
                <M.Precious>
                    <b>id 님,</b>
                    <br />
                    당신은 소중한 사람이에요. 누구도 당신을 해칠 수 없어요.
                </M.Precious>
                <M.CalenderList>
                    <M.CalenderWrapper>
                        <M.CalendarBox
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
                        />
                    </M.CalenderWrapper>
                    <M.Happen>
                        어떤 일이 있었나요?
                        <M.UploadBox>
                            <img src={Group6} alt="logo" style={{ width: "345px", height: "93px" }} />
                        </M.UploadBox>
                    </M.Happen>
                    <M.Want>
                        폭신폭신은 여러분을 돕고 싶습니다.
                        <M.GuideBox>
                            <img src={Group7} alt="logo" style={{ width: "345px", height: "93px" }} />
                        </M.GuideBox>
                    </M.Want>
                    <PlusBtn></PlusBtn>
                </M.CalenderList>
            </M.Main>
        </>
    );
}

export default Main;
