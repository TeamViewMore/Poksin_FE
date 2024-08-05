import React from "react";
import * as I from "../styles/components/InputStyle";

import checked from "../img/check_checked_mini.png";
import none from "../img/check_none_mini.png";

function Input({ title, value, isChecked, onCheckboxChange, onChange }) {
    console.log("Input 컴포넌트:", { title, value, isChecked });

    const setTitle = (title) => {
        if (title === "전화번호") {
            return "전화번호 공개";
        }
        if (title === "긴급 연락처") {
            return "긴급 연락처 공개";
        }
        if (title === "주소") {
            return "주소 공개";
        }
        return title;
    };

    return (
        <I.InputBox>
            <I.Text><input type='text' placeholder={title} value={value} onChange={onChange} /></I.Text>
            <I.Checkbox onClick={onCheckboxChange}>
                <div className='title'>{setTitle(title)}</div>
                <div className='check'><img src={isChecked ? checked : none} alt='선택' /></div>
            </I.Checkbox>
        </I.InputBox>
    );
}

export default Input;
