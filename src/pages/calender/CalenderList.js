import React from "react";
import * as C from "../../styles/calender/CalenderListStyle";
import BottomSheet from "../../pages/calender/BottomSheet";
import { useState } from "react";
import Calendar from "react-calendar";
import moment from "moment";
import "react-calendar/dist/Calendar.css";
import { motion } from "framer-motion";

function CalenderList() {
    const MIN_Y = 60;
    const MAX_Y = window.innerHeight - 160;
    const BOTTOM_SHEET_HEIGHT = window.innerHeight - MIN_Y;

    const [value, onChange] = useState(new Date());
    const nextDay = moment(value).add(1, "day").toDate();
    // const { sheet } = useBottomSheet();

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
                    />
                </C.CalenderWrapper>
                <C.BottomSheet></C.BottomSheet>
            </C.CalenderList>
        </>
    );
}

export default CalenderList;
