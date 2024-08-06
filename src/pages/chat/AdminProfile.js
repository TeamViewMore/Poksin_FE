import React from 'react';

import * as P from '../../styles/chat/ProfileStyle';
import profile from '../../img/profile_admin.png';

function Profile() {
    return (
        <>
            <P.Profile><img src={profile} alt='프로필' /></P.Profile>
            <P.Box>
                <P.Top>
                    <div>폭신폭신</div>
                </P.Top>
                <P.Middle>
                    <P.Detail>
                        <div>전화번호</div>
                        <div>02-123-4567</div>
                    </P.Detail>
                    <P.Detail>
                        <div>전문 분야</div>
                        <div>부부/가족상담</div>
                    </P.Detail>
                    <P.Detail>
                        <div>경력</div>
                        <div>
                            <div>폭신폭신 상담센터 원장</div>
                            <div>마음돌봄 상담센터 대표</div>
                            <div>덕성여자대학교 삼리학과 석사</div>
                        </div>
                    </P.Detail>
                </P.Middle>
                <P.Bottom>
                    <P.Date>
                        <div className='title'>상담 시작</div>
                        <div className='date'>2024. 08. 06.</div>
                    </P.Date>
                    <P.Date>
                        <div className='title'>최근 상담</div>
                        <div className='date'>2024. 08. 06.</div>
                    </P.Date>
                </P.Bottom>
            </P.Box>
        </>
    );
}

export default Profile;
