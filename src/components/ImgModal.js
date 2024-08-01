import React from "react";
import styled from "styled-components";
import closeBtn from "../img/close.png";

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
    max-width: 90vw;
    max-height: 90vh;
    img {
        width: 100%;
        height: auto;
        object-fit: contain;
    }
`;

const CloseButton = styled.img`
    position: absolute;
    width: 15px;
    height: 15px;
    top: 30px;
    right: 20px;
    cursor: pointer;
`;

const ImgModal = ({ src, onClose }) => (
    <ModalBackground onClick={onClose}>
        <CloseButton src={closeBtn} onClick={onClose}></CloseButton>
        <ModalContent onClick={(e) => e.stopPropagation()}>
            <img src={src} alt="이미지 상세보기" />
        </ModalContent>
    </ModalBackground>
);

export default ImgModal;