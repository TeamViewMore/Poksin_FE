import React, { useState, useEffect } from "react";
import axios from "axios";
import * as P from "../../styles/chat/ProfileUpdateStyle";
import profile from "../../img/profile_big.png";
import Input from '../../components/Input';
import { useCookies } from 'react-cookie';
import { useNavigate } from "react-router-dom";
import { fetchUserData } from '../../utils/userApi';

function ProfileUpdate() {
    const APIUrl = process.env.REACT_APP_API_URL;
    const [checkedStates, setCheckedStates] = useState({
        phone: false,
        emergency: false,
        address: false,
    });
    console.log("프로필: " + [checkedStates.phone, checkedStates.emergency, checkedStates.address]);

    const [formValues, setFormValues] = useState({
        phoneNum: '',
        emergencyNum: '',
        address: '',
    });
    const [cookies] = useCookies(["accessToken"]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProfileData = async () => {
            try {
                const token = cookies.accessToken;
                if (!token) {
                    throw new Error("토큰을 찾을 수 없음");
                }
                const data = await fetchUserData(token);

                if (data.code === "SUCCESS_RETRIEVE_USER") {
                    const userData = data.data;
                    setFormValues({
                        phoneNum: userData.phoneNum || '',
                        emergencyNum: userData.emergencyNum || '',
                        address: userData.address || '',
                    });
                    setCheckedStates({
                        phone: userData.phoneNum !== null,
                        emergency: userData.emergencyNum !== null,
                        address: userData.address !== null,
                    });
                }
            } catch (error) {
                console.error("프로필 업데이트에서 프로필 가져오기 에러:", error);
            }
        };

        fetchProfileData();
    }, [cookies.accessToken]);

    const handleCheckboxChange = (type) => {
        setCheckedStates((prevState) => {
            const newState = {
                ...prevState,
                [type]: !prevState[type],
            };
            console.log("Checkbox State Changed:", newState);
            return newState;
        });
    };

    const handleInputChange = (e, type) => {
        const { value } = e.target;
        setFormValues((prevState) => {
            const newState = {
                ...prevState,
                [type]: value,
            };
            console.log("Input Value Changed:", newState);
            return newState;
        });
    };

    const handleSubmit = async () => {
        console.log("프로필 업데이트: ", checkedStates);
        console.log("폼 값: ", formValues);
        const token = cookies.accessToken;
        if (!token) {
            console.error("토큰을 찾을 수 없음");
            return;
        }

        try {
            const response = await axios.put(`${APIUrl}/user/update`, {
                phoneNum: formValues.phoneNum,
                emergencyNum: formValues.emergencyNum,
                address: formValues.address,
                getphoneOpen: checkedStates.phone,
                emergencyOpen: checkedStates.emergency,
                addressOpen: checkedStates.address
            }, {
                headers: {
                    Authorization: `${token}`
                }
            });
            console.log("API 응답: ", response.data);
            if (response.data.code === "SUCCESS_UPDATE_USER") {
                console.log("User information updated successfully:", response.data.data);
                navigate('/profile');
            }
        } catch (error) {
            console.error("프로필 업데이트에서 프로필 업데이트 에러:", error);
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
                        value={formValues.phoneNum}
                    />
                    <Input 
                        title="긴급 연락처"
                        isChecked={checkedStates.emergency}
                        onCheckboxChange={() => handleCheckboxChange('emergency')}
                        onChange={(e) => handleInputChange(e, 'emergencyNum')}
                        value={formValues.emergencyNum}
                    />
                    <Input 
                        title="주소"
                        isChecked={checkedStates.address}
                        onCheckboxChange={() => handleCheckboxChange('address')}
                        onChange={(e) => handleInputChange(e, 'address')}
                        value={formValues.address}
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
