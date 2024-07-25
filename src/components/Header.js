import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import * as H from "../styles/components/HeaderStyle";

import headerLogo from "../img/logo_mini.png"
import back from "../img/back.png"
import menu from "../img/hamburger.png"

function Header({ title }) {

    const location = useLocation();
    const navigate = useNavigate(); 

    const handleNavLinkClick = (path) => {
        navigate(path);
    };

    const logoPages = [
        "/login",
        "/main",
        "/calender",
        "/guide",
        "/chat",
        "/poksin/admin/chat-list",
        "/profile",
        "/self",
        "/fake"
    ];
    
    const showLogo = logoPages.includes(location.pathname);
    const showBack = !showLogo;

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
                <H.Menu>
                    <img src={menu} alt="메뉴" />
                </H.Menu>
            </H.Header>
        </>
    );
}

export default Header;
