import React from "react";
import * as L from "../../styles/user/LoginStyle";
import logo_big from "../../img/logo_big.png";

function Login() {
    return (
        <>
            <L.Login>
                <L.Logo1>
                    <img src={logo_big} alt="logo" style={{ width: "423px", height: "225px" }} />
                </L.Logo1>

                <L.InputBox>
                    <L.InputId placeholder="&nbsp;&nbsp;아이디"></L.InputId>

                    <L.InputPw placeholder="&nbsp;&nbsp;비밀번호"></L.InputPw>
                </L.InputBox>
                <br />
                <L.LoginButtonBox>
                    <L.LoginButton>로그인</L.LoginButton>
                </L.LoginButtonBox>
                <L.Yet>
                    아직 회원이 아니신가요?
                    <br />
                    <b>회원가입</b>
                </L.Yet>
            </L.Login>
        </>
    );
}

export default Login;
