import React, { useState } from "react";
import { useLocation, useNavigate, useMatch } from "react-router-dom";
import * as H from "../styles/components/HeaderStyle";

import Menu from "./Menu";

import headerLogo from "../img/logo_mini.png";
import back from "../img/back.png";
import menu from "../img/hamburger.png";

function Header({ title }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const handleNavLinkClick = (path) => {
        navigate(path);
        handleMenuClose();
    };

    const toggleMenu = () => {
        if (isMenuOpen) {
            handleMenuClose();
        } else {
            setIsMenuOpen(true);
        }
    };

    const handleMenuClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            setIsMenuOpen(false);
            setIsClosing(false);
        }, 300);
    };

    const logoPages = [
        "/login",
        "/main",
        "/calender",
        "/guide",
        "/chat",
        "/poksin/admin/chat-list",
        "/self",
        "/fake"
    ];

    const matchChat = useMatch("/chat/:id");
    const matchProfile = useMatch("/profile/:id");

    const showLogo = logoPages.includes(location.pathname) || matchChat || matchProfile;
    const showBack = !showLogo;

    // login과 signup 페이지에서는 Menu 컴포넌트를 표시하지 않음
    const hideMenu = location.pathname === "/login" || location.pathname === "/signup";

    return (
        <>
            <H.Header>
                {showLogo && (
                    <H.Logo onClick={() => handleNavLinkClick("/main")}>
                        <img src={headerLogo} alt="폭신폭신" />
                    </H.Logo>
                )}
                {showBack && (
                    <H.Back onClick={() => navigate(-1)}>
                        <img src={back} alt="뒤로가기" />
                    </H.Back>
                )}
                <H.Title>{title}</H.Title>
                {!hideMenu && (
                    <H.Menu onClick={toggleMenu}>
                        <img src={menu} alt="메뉴" />
                    </H.Menu>
                )}
                {hideMenu && (
                    <H.None></H.None>
                )}
            </H.Header>
            {isMenuOpen && !hideMenu && (
                <Menu
                    closeMenu={handleMenuClose}
                    isClosing={isClosing}
                    onNavClick={handleNavLinkClick}
                    onProfileClick={() => handleNavLinkClick(`/profile/1`)} // 임시로 1로 설정
                    nickname="닉네임" // 임시로 닉네임으로 설정
                    id="1" // 임시로 1로 설정
                />
            )}
        </>
    );
}

export default Header;
