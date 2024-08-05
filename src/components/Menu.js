// src/components/Menu.js
import React from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import * as M from "../styles/components/MenuStyle";
import Nav from "./Nav";
import close from "../img/close.png";
import profile from "../img/profile.png";
import logout from "../img/logout.png";
import copyright from "../img/copyright.png";

const COOKIE_KEY = "accessToken"; // 액세스 토큰 쿠키 키

function Menu({ closeMenu, isClosing, onNavClick, onProfileClick, nickname, roomid }) {
    const [, , removeCookie] = useCookies([COOKIE_KEY]);
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            // 리프레시 토큰을 쿠키에서 가져오기
            const refreshToken = getCookie("refreshToken");

            // 리프레시 토큰이 없으면 직접적인 로그아웃 처리
            if (!refreshToken) {
                throw new Error("No refresh token available.");
            }

            // form-data로 로그아웃 요청
            const formData = new FormData();
            formData.append("refreshToken", refreshToken);

            await fetch("/api/logout", {
                method: "POST",
                body: formData,
            });

            // 쿠키 삭제
            removeCookie(COOKIE_KEY, { path: "/" });
            removeCookie("refreshToken", { path: "/" }); // 추가적인 쿠키도 삭제

            // 스플래시 페이지로 리디렉션
            navigate("/");
        } catch (error) {
            console.error("Logout failed:", error);
        } finally {
            closeMenu(); // 메뉴 닫기
        }
    };

    const getCookie = (name) => {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(";").shift();
    };

    // 인증되지 않은 사용자가 접근할 수 있는 페이지 경로
    const publicRoutes = ["/", "/login", "/signup"];

    React.useEffect(() => {
        // 현재 URL을 가져와서 publicRoutes 목록에 없는 경우 리디렉션
        const currentPath = window.location.pathname;
        if (!isPublicRoute(currentPath) && !document.cookie.includes(COOKIE_KEY)) {
            navigate("/");
        }
    }, [navigate]);

    const isPublicRoute = (path) => publicRoutes.includes(path);

    return (
        <>
            <M.MenuContainer $isClosing={isClosing} onClick={closeMenu}>
                <M.Side onClick={(e) => e.stopPropagation()} $isClosing={isClosing}>
                    <M.Top onClick={closeMenu}>
                        <img src={close} alt="닫기" />
                    </M.Top>
                    <M.Profile
                        onClick={() => {
                            onProfileClick();
                            closeMenu();
                        }}
                    >
                        <img src={profile} alt="프로필" />
                        <div>{nickname} 님</div>
                    </M.Profile>
                    <M.NavList>
                        <Nav pagename="캘린더" onClick={() => onNavClick("/calender")} />
                        <Nav pagename="자료 업로드" onClick={() => onNavClick("/upload")} />
                        <Nav pagename="가이드라인" onClick={() => onNavClick("/guide")} />
                        <Nav pagename="상담하기" onClick={() => onNavClick(`/chat/${roomid}`)} />
                        <Nav pagename="연애 건강도 자가진단" onClick={() => onNavClick("/self")} />
                        <Nav pagename="서비스 숨기기" onClick={() => onNavClick("/fake")} />
                    </M.NavList>
                    <M.Bottom>
                        <M.Logout onClick={handleLogout}>
                            <img src={logout} alt="로그아웃" />
                            <div>로그아웃</div>
                        </M.Logout>
                        <M.Copyright>
                            <img src={copyright} alt="저작권" />
                            <div>2024 poksin</div>
                        </M.Copyright>
                    </M.Bottom>
                </M.Side>
            </M.MenuContainer>
        </>
    );
}

export default Menu;
