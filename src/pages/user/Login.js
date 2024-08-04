import React, { useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import * as L from "../../styles/user/LoginStyle";
import logo_big from "../../img/logo_big.png";

function Login() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [cookies, setCookie] = useCookies(["authToken"]);
    const apiUrl = process.env.REACT_APP_API_URL;
    const loginUrl = `${apiUrl}/login`;

    const goToSignup = () => {
        navigate("/signup");
    };

    const handleLogin = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("username", username);
        formData.append("password", password);

        try {
            const response = await axios.post(loginUrl, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            const accessToken = response.headers["accesstoken"];
            const refreshToken = response.headers["refreshtoken"];

            if (accessToken && refreshToken) {
                setCookie("accessToken", accessToken, { path: "/" });
                setCookie("refreshToken", refreshToken, { path: "/" });
                alert("로그인 성공!");
                navigate("/main");
            } else {
                alert("로그인 실패: 서버에서 반환된 토큰이 없습니다.");
            }
        } catch (error) {
            console.error("로그인 실패:", error);
            if (error.response && error.response.data) {
                console.log("Error data:", error.response.data); // 에러 데이터를 콘솔에 출력
                alert(`로그인 실패: ${error.response.data.message}`);
            } else {
                alert("로그인 실패: 서버에 연결할 수 없습니다.");
            }
        }
    };

    return (
        <L.Login>
            <L.Logo1>
                <img src={logo_big} alt="logo" style={{ width: "423px", height: "225px" }} />
            </L.Logo1>
            <L.InputBox onSubmit={handleLogin}>
                <L.InputId
                    placeholder="아이디"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <L.InputPw
                    type="password"
                    placeholder="비밀번호"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <L.LoginButtonBox>
                    <L.LoginButton type="submit">로그인</L.LoginButton>
                </L.LoginButtonBox>
            </L.InputBox>

            <L.Yet>
                아직 회원이 아니신가요?
                <br />
                <b onClick={goToSignup}>회원가입</b>
            </L.Yet>
        </L.Login>
    );
}

export default Login;
