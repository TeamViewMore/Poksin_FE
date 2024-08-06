import React, { useState, useEffect } from "react";
import axios from "axios";
import * as P from "../../styles/chat/ProfileUpdateStyle";
import profile from "../../img/profile_big.png";
import { useCookies } from 'react-cookie';
import { useNavigate } from "react-router-dom";
import { fetchUserData } from '../../utils/userApi';
import checked from "../../img/check_checked_mini.png";
import none from "../../img/check_none_mini.png";

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
                // console.log(token);
                if (!token) {
                    throw new Error("토큰을 찾을 수 없음");
                }
                const data = await fetchUserData(token);
                // console.log(data);
                const userData = data.user;
                    console.log(userData);
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
                // if (data.code === "SUCCESS_RETRIEVE_USER") {
                //     const userData = data.user;
                //     console.log(userData);
                //     setFormValues({
                //         phoneNum: userData.phoneNum || '',
                //         emergencyNum: userData.emergencyNum || '',
                //         address: userData.address || '',
                //     });
                //     setCheckedStates({
                //         phone: userData.phoneNum !== null,
                //         emergency: userData.emergencyNum !== null,
                //         address: userData.address !== null,
                //     });
                // }
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
                phoneOpen: checkedStates.phone,
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

    const setTitle = (title) => {
        if (title === "phoneNum") {
            return "전화번호 공개";
        }
        if (title === "emergencyNum") {
            return "긴급 연락처 공개";
        }
        if (title === "address") {
            return "주소 공개";
        }
        return title;
    };

    return (
        <>
            <P.Profile><img src={profile} alt='프로필' /></P.Profile>
            <P.Box>
                <P.Top>프로필 수정</P.Top>
                <P.Middle>
                    <P.InputBox>
                        <P.Text><input type='text' placeholder='전화번호' value={formValues.phoneNum} onChange={(e) => handleInputChange(e, 'phoneNum')} /></P.Text>
                        <P.Checkbox onClick={() => handleCheckboxChange('phone')}>
                            <div className='title'>{setTitle('phoneNum')}</div>
                            <div className='check'><img src={checkedStates.phone ? checked : none} alt='선택' /></div>
                        </P.Checkbox>
                    </P.InputBox>
                    <P.InputBox>
                        <P.Text><input type='text' placeholder='긴급 연락처' value={formValues.emergencyNum} onChange={(e) => handleInputChange(e, 'emergencyNum')} /></P.Text>
                        <P.Checkbox onClick={() => handleCheckboxChange('emergency')}>
                            <div className='title'>{setTitle('emergencyNum')}</div>
                            <div className='check'><img src={checkedStates.emergency ? checked : none} alt='선택' /></div>
                        </P.Checkbox>
                    </P.InputBox>
                    <P.InputBox>
                        <P.Text><input type='text' placeholder='주소' value={formValues.address} onChange={(e) => handleInputChange(e, 'address')} /></P.Text>
                        <P.Checkbox onClick={() => handleCheckboxChange('address')}>
                            <div className='title'>{setTitle('address')}</div>
                            <div className='check'><img src={checkedStates.address ? checked : none} alt='선택' /></div>
                        </P.Checkbox>
                    </P.InputBox>
                </P.Middle>
                <P.Bottom>
                    <P.Button onClick={handleSubmit}>수정 완료</P.Button>
                </P.Bottom>
            </P.Box>
        </>
    );
}

export default ProfileUpdate;
