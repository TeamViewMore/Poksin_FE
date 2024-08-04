import React, { useState, useEffect } from "react";
import axios from "axios";
import * as P from "../../styles/chat/ProfileUpdateStyle";
import profile from "../../img/profile_big.png";
import Input from '../../components/Input';
import { useCookies } from 'react-cookie';
import { useNavigate } from "react-router-dom";

function ProfileUpdate() {
    const [checkedStates, setCheckedStates] = useState({
        phone: false,
        emergency: false,
        address: false,
    });

    const [formValues, setFormValues] = useState({
        phoneNum: '',
        emergencyNum: '',
        address: '',
    });

    const [cookies] = useCookies(['authToken']);
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
                    const data = response.data.data;
                    setFormValues({
                        phoneNum: data.phoneNum || '',
                        emergencyNum: data.emergencyNum || '',
                        address: data.address || '',
                    });
                    setCheckedStates({
                        phone: data.phoneNum !== null,
                        emergency: data.emergencyNum !== null,
                        address: data.address !== null,
                    });
                }
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        fetchProfileData();
    }, [cookies]);

    const handleCheckboxChange = (type) => {
        setCheckedStates((prevState) => ({
            ...prevState,
            [type]: !prevState[type],
        }));
    };

    const handleInputChange = (e, type) => {
        const { value } = e.target;
        setFormValues((prevState) => ({
            ...prevState,
            [type]: value,
        }));
    };

    const handleSubmit = async () => {
        const token = cookies.authToken;
        if (!token) {
            console.error("No access token found");
            return;
        }

        try {
            const response = await axios.put('https://poksin-backend.store/user/update', {
                phoneNum: formValues.phoneNum,
                emergencyNum: formValues.emergencyNum,
                address: formValues.address,
                getphoneOpen: checkedStates.phone,
                emergencyOpen: checkedStates.emergency,
                addressOpen: checkedStates.address
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            if (response.data.code === "SUCCESS_UPDATE_USER") {
                console.log("User information updated successfully:", response.data.data);
                navigate('/profile'); // Navigate back to profile page after successful update
            }
        } catch (error) {
            console.error("Error updating user information:", error);
        }
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
                        onChange={(e) => handleInputChange(e, 'phoneNum')}
                        defaultValue={formValues.phoneNum}
                    />
                    <Input 
                        title="긴급 연락처"
                        isChecked={checkedStates.emergency}
                        onCheckboxChange={() => handleCheckboxChange('emergency')}
                        onChange={(e) => handleInputChange(e, 'emergencyNum')}
                        defaultValue={formValues.emergencyNum}
                    />
                    <Input 
                        title="주소"
                        isChecked={checkedStates.address}
                        onCheckboxChange={() => handleCheckboxChange('address')}
                        onChange={(e) => handleInputChange(e, 'address')}
                        defaultValue={formValues.address}
                    />
                </P.Middle>
                <P.Bottom>
                    <P.Button onClick={handleSubmit}>수정 완료</P.Button>
                </P.Bottom>
            </P.Box>
        </>
    );
}

export default ProfileUpdate;
