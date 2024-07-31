import React from "react";
import * as C from "../../styles/calender/CalenderStyle";
import { useState } from "react";
import Calendar from "react-calendar";
import moment from "moment";
import "react-calendar/dist/Calendar.css";

function Calender() {
    const [value, onChange] = useState(new Date());

    return (
        <>
            <C.Calender>
                <div>
                    <Calendar onChange={onChange} value={value} />
                </div>
                <div>{moment(value).format("YYYY년 MM월 DD일")}</div>
            </C.Calender>
        </>
    );
}

export default Calender;
