import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
// import { fetchUserData } from '../../utils/userApi';
import * as P from '../../styles/chat/ProfileStyle';
import profile from '../../img/profile_admin.png';

function Profile() {
    const [profileData, setProfileData] = useState(null);
    const [cookies] = useCookies(['accessToken']);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const accessToken = cookies.accessToken;
                // const data = await fetchUserData(accessToken);
                const apiUrl = `${process.env.REACT_APP_API_URL}/user/admin?username=poksin_admin`;

                const response = await fetch(apiUrl, {
                    method: 'GET',
                    headers: {
                        Authorization: `${accessToken}`
                    }
                });

                if (response.status === 200) {
                    const result = await response.json();
                    setProfileData(result.data);
                } else if (response.status === 404) {
                    console.error('Error:', 'User not found or chat room not found');
                } else {
                    console.error('Error:', response.statusText);
                }
            } catch (error) {
                console.error('Error fetching profile data:', error);
            }
        };

        if (cookies.accessToken) {
            fetchProfile();
        }
    }, [cookies.accessToken]);

    if (!profileData) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <P.Profile><img src={profile} alt='프로필' /></P.Profile>
            <P.Box>
                <P.Top>
                    <div>{profileData.username}</div>
                </P.Top>
                <P.Middle>
                    <P.Detail>
                        <div>전화번호</div>
                        <div>{profileData.phoneNum}</div>
                    </P.Detail>
                    <P.Detail>
                        <div>전문 분야</div>
                        <div>{profileData.specialty}</div>
                    </P.Detail>
                    <P.Detail>
                        <div>경력</div>
                        <div>
                            {profileData.career.map((item, index) => (
                                <div key={index}>{item}</div>
                            ))}
                        </div>
                    </P.Detail>
                </P.Middle>
                <P.Bottom>
                    <P.Date>
                        <div className='title'>상담 시작</div>
                        <div className='date'>{new Date(profileData.start).toLocaleDateString()}</div>
                    </P.Date>
                    <P.Date>
                        <div className='title'>최근 상담</div>
                        <div className='date'>{profileData.chatRoomCount.totalCount}+</div>
                    </P.Date>
                </P.Bottom>
            </P.Box>
        </>
    );
}

export default Profile;
