import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as P from "../../styles/chat/ProfileStyle";

import More from "../../components/More";

import profile from "../../img/profile_big.png";
import more from "../../img/more.png"

function Profile({ profiledata }) {
    // const { nickname, phone, emergency, address, date, recent } = profiledata;
    // 임의로 프로필 데이터 및 id 지정
    const nickname = "닉네임";
    const phone = "010-1234-5678";
    const emergency = "010-1234-5678";
    const address = "서울특별시 구로구 오리로 1197, 117동 305호";
    const date = "2024. 07. 29."
    const recent = "2024. 07. 30."
    const id = 1;

    const [showMore, setShowMore] = useState(false);
    const moreRef = useRef();
    const navigate = useNavigate();

    const handleMoreClick = () => {
        setShowMore(prevShowMore => !prevShowMore);
    };

    const handleClickOutside = (event) => {
        if (moreRef.current && !moreRef.current.contains(event.target)) {
            setShowMore(false);
        }
    };

    const handleMenuClick = (menu) => {
        if (menu === "프로필 수정") {
            navigate(`/profile/update/${id}`);
        } else {
            console.log(`${menu} Clicked`);
        }
        setShowMore(false);
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <>
            <P.Profile><img src={profile} alt='프로필' /></P.Profile>
            <P.Box>
                <P.Top>
                    <div>{nickname}</div>
                    <P.More onClick={handleMoreClick}><img src={more} alt='더보기' /></P.More>
                    {showMore && (
                        <div ref={moreRef} style={{ position: 'absolute', top: 'calc(100% + 9px)', right: 0, zIndex: 1000 }}>
                            <More menu="프로필 수정" onMenuClick={handleMenuClick} />
                        </div>
                    )}
                </P.Top>
                <P.Middle>
                    <P.Detail>
                        <div>전화번호</div>
                        <div>{phone}</div>
                    </P.Detail>
                    <P.Detail>
                        <div>긴급 연락처</div>
                        <div>{emergency}</div>
                    </P.Detail>
                    <P.Detail>
                        <div>주소</div>
                        <div>{address}</div>
                    </P.Detail>
                </P.Middle>
                <P.Bottom>
                    <P.Date>
                        <div className='title'>가입일</div>
                        <div className='date'>{date}</div>
                    </P.Date>
                    <P.Date>
                        <div className='title'>최근 상담</div>
                        <div className='date'>{recent}</div>
                    </P.Date>
                </P.Bottom>
            </P.Box>
        </>
    );
}

export default Profile;
