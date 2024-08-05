import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, useMatch } from "react-router-dom";
import { useCookies } from 'react-cookie';

import * as H from "../styles/components/HeaderStyle";
import Menu from "./Menu";

import headerLogo from "../img/logo_mini.png";
import back from "../img/back.png";
import menu from "../img/hamburger.png";
import { fetchUserData } from '../utils/userApi';

function Header({ title }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const [cookies] = useCookies(["accessToken"]);
    const [username, setUsername] = useState();
    const [roomId, setRoomId] = useState(null);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const token = cookies.accessToken;
                if (!token) {
                    throw new Error("토큰을 찾을 수 없음");
                }
                const { user, roomId } = await fetchUserData(token);
                setUsername(user.username);
                setRoomId(roomId);
            } catch (error) {
                console.error("헤더에서 에러:", error);
            }
        };

        fetchUser();
    }, [cookies.accessToken]);

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
        "/fake",
        "/profile"
    ];

    const matchChat = useMatch("/chat/:id");

    const showLogo = logoPages.includes(location.pathname) || matchChat;
    const showBack = !showLogo;

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
                    onProfileClick={() => handleNavLinkClick(`/profile`)}
                    nickname={username}
                    roomid={roomId}
                />
            )}
        </>
    );
}

export default Header;
