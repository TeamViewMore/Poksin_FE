import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

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
    width: 350px;
    height: 180px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #ffffff;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    border-radius: 25px;

    .ModalText {
        margin: 55px 0px 30px 0px;
    }
`;

const CloseButton = styled.button`
    width: 280px;
    height: 45px;
    border-radius: 30px;
    border: none;
    color: #ffffff;
    background-color: #7a29ff;
    font-weight: bolder;
    cursor: pointer;
`;

const UploadModal = ({ onClose }) => {
    const navigate = useNavigate();

    const handleConfirm = (e) => {
        e.preventDefault();
        onClose();
        navigate("/calender");
    };
    return (
        <ModalBackground onClick={onClose}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
                <div className="ModalText">업로드가 완료되었습니다.</div>
                <CloseButton onClick={handleConfirm}>확인</CloseButton>
            </ModalContent>
        </ModalBackground>
    );
};

export default UploadModal;
