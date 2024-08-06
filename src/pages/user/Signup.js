import React, { useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import * as S from "../../styles/user/SignupStyle";
import logo_big from "../../img/logo_big.png";
import { useNavigate } from "react-router-dom";

function Signup() {
    const navigate = useNavigate();
    const [, setCookie] = useCookies(["authToken"]);

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [phoneNum, setPhoneNum] = useState("");
    const [emergencyNum, setEmergencyNum] = useState("");
    const [address, setAddress] = useState("");
    const [phoneOpen, setphoneOpen] = useState(false);
    const [emergencyOpen, setemergencyOpen] = useState(false);
    const [addressOpen, setaddressOpen] = useState(false);

    const goToLogin = () => {
        navigate("/login");
    };

    const handleSignup = async (event) => {
        event.preventDefault(); // Prevent default form submission

        if (password !== passwordConfirm) {
            alert("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
            return;
        }

        const apiUrl = process.env.REACT_APP_API_URL;
        const signupUrl = `${apiUrl}/user/register`;

        try {
            const response = await axios.post(signupUrl, {
                username,
                password,
                phoneNum,
                emergencyNum,
                address,
                phoneOpen,
                emergencyOpen,
                addressOpen,
            });

            console.log("서버 응답:", response);

            if (response.data.code === "SUCCESS_REGISTER") {
                setCookie("authToken", response.data.authToken, { path: "/" });
                alert(response.data.message); // Display success message
                navigate("/login"); // Redirect to login page
            } else {
                alert(`회원가입 실패: ${response.data.message}`); // Display failure message
            }
        } catch (error) {
            console.error("회원가입 실패:", error);
            if (error.response && error.response.data && error.response.data.message) {
                alert(`회원가입 실패: ${error.response.data.message}`);
            } else {
                alert("회원가입 실패: 네트워크 오류가 발생했습니다.");
            }
        }
    };

    return (
        <S.Signup>
            <S.Logo1>
                <img
                    src={logo_big}
                    alt="logo"
                    style={{
                        width: "435px",
                        height: "230px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItem: "center",
                    }}
                />
            </S.Logo1>
            <S.InputBox>
                <S.InputId placeholder="아이디" value={username} onChange={(e) => setUsername(e.target.value)} />
                <S.InputPw
                    type="password"
                    placeholder="비밀번호"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <S.InputPwCheck
                    type="password"
                    placeholder="비밀번호 확인"
                    value={passwordConfirm}
                    onChange={(e) => setPasswordConfirm(e.target.value)}
                />
                <S.InputNumber placeholder="전화번호" value={phoneNum} onChange={(e) => setPhoneNum(e.target.value)} />
                <S.CheckBox>
                    전화번호 공개&nbsp;
                    <S.CheckCustom
                        type="checkbox"
                        checked={phoneOpen}
                        onChange={(e) => setphoneOpen(e.target.checked)}
                    />
                </S.CheckBox>
                <S.InputAlert
                    placeholder="긴급 연락처"
                    value={emergencyNum}
                    onChange={(e) => setEmergencyNum(e.target.value)}
                />
                <S.CheckBox>
                    긴급 연락처 공개&nbsp;
                    <S.CheckCustom
                        type="checkbox"
                        checked={emergencyOpen}
                        onChange={(e) => setemergencyOpen(e.target.checked)}
                    />
                </S.CheckBox>
                <S.InputAddress placeholder="주소" value={address} onChange={(e) => setAddress(e.target.value)} />
                <S.CheckBox>
                    주소 공개&nbsp;
                    <S.CheckCustom
                        type="checkbox"
                        checked={addressOpen}
                        onChange={(e) => setaddressOpen(e.target.checked)}
                    />
                </S.CheckBox>
            </S.InputBox>

            <S.LoginButtonBox>
                <S.LoginButton onClick={handleSignup}>회원가입</S.LoginButton>
            </S.LoginButtonBox>
            <S.Yet>
                이미 회원이신가요?
                <br />
                <b onClick={goToLogin}>로그인</b>
            </S.Yet>
            <br />
        </S.Signup>
    );
}

export default Signup;
