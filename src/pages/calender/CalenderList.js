import React from "react";
import * as C from "../../styles/calender/CalenderListStyle";
import PlusBtn from "../../components/PlusBtn";
import { useState } from "react";
import moment from "moment";
import "react-calendar/dist/Calendar.css";
import { useNavigate } from "react-router-dom";

function CalenderList() {
    const [value, onChange] = useState(new Date());

    const navigate = useNavigate();

    const handleDayClick = (date) => {
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
            <C.CalenderList>
                <C.CalenderWrapper>
                    <C.CalendarBox
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
                        onClickDay={(date) => handleDayClick(date)}
                    />
                </C.CalenderWrapper>
                <C.BottomSheet>
                    {dates.map((date, index) => (
                        <C.DayRecordBox key={index} onClick={() => handleDayClick(date)}>
                            <div className="DayRecordBox-Date">{moment(date).format("MM. DD.")}</div>
                            <div className="DayRecordBox-Record">3개의 기록이 있습니다.</div>
                        </C.DayRecordBox>
                    ))}
                </C.BottomSheet>
                <PlusBtn></PlusBtn>
            </C.CalenderList>
        </>
    );
}

export default CalenderList;
