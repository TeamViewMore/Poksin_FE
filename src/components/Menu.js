import React from "react";
import * as M from "../styles/components/MenuStyle";

import Nav from './Nav';

import close from "../img/close.png"
import profile from "../img/profile.png"
import logout from "../img/logout.png"
import copyright from "../img/copyright.png"

function Menu({ closeMenu, isClosing, onNavClick, onProfileClick, nickname, id}) {
    return (
        <>
            <M.MenuContainer $isClosing={isClosing} onClick={closeMenu}>
                <M.Side onClick={(e) => e.stopPropagation()} $isClosing={isClosing}>
                    <M.Top onClick={closeMenu}>
                        <img src={close} alt='닫기' />
                    </M.Top>
                    <M.Profile onClick={() => {
                        onProfileClick();
                        closeMenu();
                    }}>
                        <img src={profile} alt='프로필' />
                        <div>{nickname} 님</div>
                    </M.Profile>
                    <M.NavList>
                    <Nav pagename="캘린더" onClick={() => onNavClick("/calender")} />
                    <Nav pagename="자료 업로드" onClick={() => onNavClick("/upload")} />
                    <Nav pagename="가이드라인" onClick={() => onNavClick("/guide")} />
                    <Nav pagename="상담하기" onClick={() => onNavClick(`/chat/${id}`)} />
                    <Nav pagename="연애 건강도 자가진단" onClick={() => onNavClick("/self")} />
                    <Nav pagename="서비스 숨기기" onClick={() => onNavClick("/fake")} />
                </M.NavList>
                    <M.Bottom>
                        <M.Logout onClick={() => {
                            // 로그아웃 처리
                            closeMenu();
                        }}>
                            <img src={logout} alt='로그아웃' />
                            <div>로그아웃</div>
                        </M.Logout>
                        <M.Copyright>
                            <img src={copyright} alt='저작권' />
                            <div>2024 poksin</div>
                        </M.Copyright>
                    </M.Bottom>
                </M.Side>
            </M.MenuContainer>
        </>
    );
}

export default Menu;
