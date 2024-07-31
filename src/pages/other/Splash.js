import React from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as S from "../../styles/other/SplashStyle";
import SplashLogo1 from "../../img/splash_logo1.png";
import SplashLogo2 from "../../img/splash_logo22.png";
import SplashLogo3 from "../../img/splash_logo33.png";
import SplashLogo4 from "../../img/splash_logo44.png";
import SplashLogo5 from "../../img/splash_logo55.png";

function Splash() {
    // 자동으로 Main 넘어가기
    /*
    const navigate = useNavigate();
    useEffect(() => {
        const timer = setTimeout(() => {
            navigate("/main");
        }, 6000);
        return () => clearTimeout(timer);
    }, [navigate]);
    */
    return (
        <>
            <S.Splash>
                <S.LogoBox>
                    <S.Logo1 src={SplashLogo1} alt="SplashLogo1"></S.Logo1>
                    <S.Logo2 src={SplashLogo2} alt="SplashLogo2"></S.Logo2>
                    <S.Logo3 src={SplashLogo3} alt="SplashLogo3"></S.Logo3>
                    <S.Logo4 src={SplashLogo4} alt="SplashLogo4"></S.Logo4>
                    <S.Logo5 src={SplashLogo5} alt="SplashLogo5"></S.Logo5>
                </S.LogoBox>
                <S.Login to="/login">로그인</S.Login>
                <S.Signup to="/signup">회원가입</S.Signup>
            </S.Splash>
        </>
    );
}

export default Splash;
