import React, { useState } from "react";
import * as P from "../../styles/chat/ProfileUpdateStyle";

import profile from "../../img/profile_big.png";
import Input from '../../components/Input';

function ProfileUpdate() {
    const [checkedStates, setCheckedStates] = useState({
        phone: false,
        emergency: false,
        address: false,
    });

    const handleCheckboxChange = (type) => {
        setCheckedStates((prevState) => ({
            ...prevState,
            [type]: !prevState[type],
        }));
    };

    return (
        <>
            <P.Profile><img src={profile} alt='프로필' /></P.Profile>
            <P.Box>
                <P.Top>프로필 수정</P.Top>
                <P.Middle>
                    <Input 
                        title="전화번호"
                        isChecked={checkedStates.phone}
                        onCheckboxChange={() => handleCheckboxChange('phone')}
                    />
                    <Input 
                        title="긴급 연락처"
                        isChecked={checkedStates.emergency}
                        onCheckboxChange={() => handleCheckboxChange('emergency')}
                    />
                    <Input 
                        title="주소"
                        isChecked={checkedStates.address}
                        onCheckboxChange={() => handleCheckboxChange('address')}
                    />
                </P.Middle>
                <P.Bottom>
                    <P.Button>수정 완료</P.Button>
                </P.Bottom>
            </P.Box>
        </>
    );
}

export default ProfileUpdate;
