import React, { useState } from "react";
import * as S from "../../styles/user/SignupStyle";
import logo_big from "../../img/logo_big.png";

function Signup() {
    const [isChecked1, setIsChecked1] = useState(false);
    const [isChecked2, setIsChecked2] = useState(false);
    const [isChecked3, setIsChecked3] = useState(false);

    const handleCheckboxChange1 = (event) => {
        setIsChecked1(event.target.checked);
    };
    const handleCheckboxChange2 = (event) => {
        setIsChecked2(event.target.checked);
    };
    const handleCheckboxChange3 = (event) => {
        setIsChecked3(event.target.checked);
    };

    return (
        <>
            <S.Signup>
                <S.Logo1>
                    <img src={logo_big} alt="logo" style={{ width: "423px", height: "225px" }} />
                </S.Logo1>
                <S.InputBox>
                    <S.InputId placeholder="&nbsp;&nbsp;아이디"></S.InputId>
                    <S.InputPw placeholder="&nbsp;&nbsp;비밀번호"></S.InputPw>
                    <S.InputPwCheck placeholder="&nbsp;&nbsp;비밀번호 확인"></S.InputPwCheck>
                    <S.InputNumber placeholder="&nbsp;&nbsp;전화번호"></S.InputNumber>
                    <S.CheckBox>
                        전화번호 공개&nbsp;
                        <S.CheckCustom type="checkbox" checked={isChecked1} onChange={handleCheckboxChange1} />
                    </S.CheckBox>
                    <S.InputAlert placeholder="&nbsp;&nbsp;긴급 연락처"></S.InputAlert>
                    <S.CheckBox>
                        긴급 연락처 공개&nbsp;
                        <S.CheckCustom type="checkbox" checked={isChecked2} onChange={handleCheckboxChange2} />
                    </S.CheckBox>
                    <S.InputAddress placeholder="주소"></S.InputAddress>
                    <S.CheckBox>
                        주소 공개&nbsp;
                        <S.CheckCustom type="checkbox" checked={isChecked3} onChange={handleCheckboxChange3} />
                    </S.CheckBox>
                </S.InputBox>

                <S.LoginButtonBox>
                    <S.LoginButton>로그인</S.LoginButton>
                </S.LoginButtonBox>
            </S.Signup>
        </>
    );
}

export default Signup;
