import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import * as P from '../../styles/chat/ProfileStyle';
import More from '../../components/More';
import profile from '../../img/profile_big.png';
import more from '../../img/more.png';
import { fetchUserData } from '../../utils/userApi';

function Profile() {
    const [profileData, setProfileData] = useState({});
    const [showMore, setShowMore] = useState(false);
    const moreRef = useRef();
    const navigate = useNavigate();
    const [cookies] = useCookies(["accessToken"]);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const token = cookies.accessToken;
                if (!token) {
                    throw new Error("토큰을 찾을 수 없음");
                }
                const data = await fetchUserData(token);
                console.log(data);
                setProfileData(data);
            } catch (error) {
                console.error('프로필 정보를 가져오는 데 실패했습니다:', error);
            }
        };

        fetchProfile();
    }, [cookies.accessToken]);

    const handleMoreClick = () => {
        setShowMore((prevShowMore) => !prevShowMore);
    };

    const handleClickOutside = (event) => {
        if (moreRef.current && !moreRef.current.contains(event.target)) {
            setShowMore(false);
        }
    };

    const handleMenuClick = (menu) => {
        if (menu === '프로필 수정') {
            navigate(`/profile/update`);
        } else {
            console.log(`${menu} Clicked`);
        }
        setShowMore(false);
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // 날짜 포맷팅 함수
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}. ${month}. ${day}.`;
    };

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
                        <div>{phoneNum !== null ? phoneNum : "(비공개)"}</div>
                    </P.Detail>
                    <P.Detail>
                        <div>긴급 연락처</div>
                        <div>{emergencyNum !== null ? emergencyNum : "(비공개)"}</div>
                    </P.Detail>
                    <P.Detail>
                        <div>주소</div>
                        <div>{address !== null ? address : "(비공개)"}</div>
                    </P.Detail>
                </P.Middle>
                <P.Bottom>
                    <P.Date>
                        <div className='title'>가입일</div>
                        <div className='date'>{createdAt ? formatDate(createdAt) : '정보 없음'}</div>
                    </P.Date>
                    <P.Date>
                        <div className='title'>최근 상담</div>
                        <div className='date'>{createdAt ? formatDate(createdAt) : '정보 없음'}</div>
                    </P.Date>
                </P.Bottom>
            </P.Box>
        </>
    );
}

export default Profile;
