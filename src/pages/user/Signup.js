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
    const [phoneNumber, setPhoneNumber] = useState("");
    const [emergencyContact, setEmergencyContact] = useState("");
    const [address, setAddress] = useState("");
    const [isPhonePublic, setIsPhonePublic] = useState(false);
    const [isEmergencyContactPublic, setIsEmergencyContactPublic] = useState(false);
    const [isAddressPublic, setIsAddressPublic] = useState(false);

    const goToLogin = () => {
        navigate("/login");
    };

    const handleSignup = async () => {
        if (password !== passwordConfirm) {
            alert("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
            return;
        }

        const apiUrl = process.env.REACT_APP_API_URL;
        const signupUrl = `${apiUrl}/user/register`; // 서버 API 문서와 일치하는지 확인

        try {
            const response = await axios.post(signupUrl, {
                username,
                password,
                passwordConfirm,
                phoneNumber,
                emergencyContact,
                address,
                isPhonePublic,
                isEmergencyContactPublic,
                isAddressPublic,
            });

            console.log("서버 응답:", response);

            if (response.data.code === "SUCCESS_REGISTER") {
                setCookie("authToken", response.data.authToken, { path: "/" });
                alert(response.data.message); // 성공 메시지를 alert으로 표시
                navigate("/login"); // 회원가입 후 로그인 페이지로 이동
            } else {
                alert(`회원가입 실패: ${response.data.message}`); // 실패 메시지를 alert으로 표시
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
                <img src={logo_big} alt="logo" style={{ width: "435px", height: "230px" }} />
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
                <S.InputNumber
                    placeholder="전화번호"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                />
                <S.CheckBox>
                    전화번호 공개&nbsp;
                    <S.CheckCustom
                        type="checkbox"
                        checked={isPhonePublic}
                        onChange={(e) => setIsPhonePublic(e.target.checked)}
                    />
                </S.CheckBox>
                <S.InputAlert
                    placeholder="긴급 연락처"
                    value={emergencyContact}
                    onChange={(e) => setEmergencyContact(e.target.value)}
                />
                <S.CheckBox>
                    긴급 연락처 공개&nbsp;
                    <S.CheckCustom
                        type="checkbox"
                        checked={isEmergencyContactPublic}
                        onChange={(e) => setIsEmergencyContactPublic(e.target.checked)}
                    />
                </S.CheckBox>
                <S.InputAddress placeholder="주소" value={address} onChange={(e) => setAddress(e.target.value)} />
                <S.CheckBox>
                    주소 공개&nbsp;
                    <S.CheckCustom
                        type="checkbox"
                        checked={isAddressPublic}
                        onChange={(e) => setIsAddressPublic(e.target.checked)}
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
        </S.Signup>
    );
}

export default Signup;
