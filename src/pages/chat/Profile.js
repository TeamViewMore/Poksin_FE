import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useCookies } from 'react-cookie';
import * as P from "../../styles/chat/ProfileStyle";
import More from "../../components/More";
import profile from "../../img/profile_big.png";
import more from "../../img/more.png";

function Profile() {
    const [profileData, setProfileData] = useState(null);
    const [cookies] = useCookies(['authToken']);
    const [showMore, setShowMore] = useState(false);
    const moreRef = useRef();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProfileData = async () => {
            const token = cookies.authToken;
            if (!token) {
                console.error("No access token found");
                return;
            }

            try {
                const response = await axios.get('https://poksin-backend.store/user/mypage', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                if (response.data.code === "SUCCESS_RETRIEVE_USER") {
                    setProfileData(response.data.data);
                }
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        fetchProfileData();
    }, [cookies]);

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
            navigate(`/profile/update/${profileData?.id}`);
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

    if (!profileData) {
        return <div>Loading...</div>;
    }

    const { username, phoneNum, emergencyNum, address, createdAt } = profileData;

    return (
        <>
            <P.Profile><img src={profile} alt='프로필' /></P.Profile>
            <P.Box>
                <P.Top>
                    <div>{username}</div>
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
                        <div>{phoneNum || "비공개"}</div>
                    </P.Detail>
                    <P.Detail>
                        <div>긴급 연락처</div>
                        <div>{emergencyNum || "비공개"}</div>
                    </P.Detail>
                    <P.Detail>
                        <div>주소</div>
                        <div>{address || "비공개"}</div>
                    </P.Detail>
                </P.Middle>
                <P.Bottom>
                    <P.Date>
                        <div className='title'>가입일</div>
                        <div className='date'>{new Date(createdAt).toLocaleDateString()}</div>
                    </P.Date>
                    <P.Date>
                        <div className='title'>최근 상담</div>
                        <div className='date'>{new Date().toLocaleDateString()}</div>
                    </P.Date>
                </P.Bottom>
            </P.Box>
        </>
    );
}

export default Profile;
