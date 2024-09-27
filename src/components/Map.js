import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import axios from "axios";
import { useCookies } from "react-cookie";

const ModalBackground = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    backdrop-filter: blur(3px);
    background: rgba(139, 139, 139, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

const ModalContent = styled.div`
    position: relative;
    width: 346px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #ffffff;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    border-radius: 25px;

    .ModalText {
        margin: 30px 0px;
        color: #000;
        text-align: center;
        font-family: Pretendard;
        font-size: 15px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
    }
`;

const ButtonArea = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    font-family: Pretendard;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 20px 0px;
`;

const Button = styled.button`
    width: 122px;
    height: 39px;
    border-radius: 20px;
    cursor: pointer;
    margin-top: 10px;
`;

const ConfirmButton = styled(Button)`
    background-color: #7a29ff;
    border: none;
    color: #fff;
`;

const CloseButton = styled(Button)`
    background-color: #fff;
    border: 1px solid #7a29ff;
    color: #000;
    margin-left: 23px;
`;

const Map = ({ onClose }) => {
    const [loc, setLoc] = useState("");

    // Map 불러오기
    useEffect(() => {
        const kakaoMapScript = document.createElement("script");
        kakaoMapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAOMAP_API_KEY}&libraries=services&autoload=false`;
        kakaoMapScript.async = true;
        document.head.appendChild(kakaoMapScript);

        kakaoMapScript.onload = () => {
            window.kakao.maps.load(() => {
                var container = document.getElementById("map");

                // Geolocation API(현재 위치)
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(
                        (position) => {
                            // 사용자의 현재 위치
                            var lat = position.coords.latitude; // 위도
                            var lon = position.coords.longitude; // 경도

                            var options = {
                                center: new window.kakao.maps.LatLng(lat, lon), // 지도 중심에 현재 위치 표시
                                level: 3,
                            };

                            // 지도 생성
                            var map = new window.kakao.maps.Map(container, options);

                            // 마커 표시
                            var markerPosition = new window.kakao.maps.LatLng(lat, lon);
                            var marker = new window.kakao.maps.Marker({
                                position: markerPosition,
                            });
                            marker.setMap(map);

                            // 주소로 변환
                            var geocoder = new window.kakao.maps.services.Geocoder();
                            geocoder.coord2Address(lon, lat, (result, status) => {
                                if (status === window.kakao.maps.services.Status.OK) {
                                    var address = result[0].address.address_name;
                                    // console.log("현재 위치 주소:", address);
                                    setLoc(address);
                                }
                            });
                        },
                        (error) => {
                            console.error("Error retrieving location", error);
                        },

                        { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
                    );
                } else {
                    // Geolocation을 지원하지 않는 경우
                    alert("현재 위치를 불러올 수 없습니다.");
                }
            });
        };
    }, []);

    // 메시지 전송
    const [cookies] = useCookies(["accessToken"]);

    const messageSubmit = useCallback(
        async (event) => {
            event.preventDefault();

            const formData = {
                location: loc,
            };

            try {
                const response = await axios.post("https://poksin-backend.store/send-sms", formData, {
                    headers: {
                        Authorization: `${cookies.accessToken}`,
                    },
                });

                if (response.data.code === "SUCCESS_SEND_MESSAGE") {
                    // console.log("메시지 전송 성공:", response.data);
                    alert("메시지를 성공적으로 전송하였습니다.");
                    onClose();
                } else {
                    console.error("메시지 전송 실패:", response.data.message);
                }
            } catch (error) {
                console.error("메시지 전송 중 오류 발생:", error.response, error.response.data, error.message);
            }
        },
        [loc, cookies.accessToken, onClose]
    );

    return (
        <ModalBackground onClick={onClose}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
                <div className="ModalText">현재 위치를 비상 연락망으로 전송하시겠습니까?</div>
                <div id="map" style={{ width: "300px", height: "250px", borderRadius: "20px" }}></div>
                <ButtonArea>
                    <ConfirmButton onClick={messageSubmit}>전송</ConfirmButton>
                    <CloseButton onClick={onClose}>취소</CloseButton>
                </ButtonArea>
            </ModalContent>
        </ModalBackground>
    );
};

export default Map;
