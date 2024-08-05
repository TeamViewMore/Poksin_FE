import React from "react";
import styled from "styled-components";

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
    height: 192px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #ffffff;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    border-radius: 25px;

    .ModalText {
        margin: 68px 0px 30px 0px;
        color: #000;
        text-align: center;
        font-family: Pretendard;
        font-size: 15px;
        font-style: normal;
        font-weight: 400;
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
    color: #FFF;

`;

const CloseButton = styled(Button)`
    background-color: #fff;
    border: 1px solid #7A29FF;
    color: #000;
    margin-left: 23px;
`;

const Modal = ({ onClose, onConfirm, left, right, text }) => {
    return (
        <ModalBackground onClick={onClose}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
                <div className="ModalText">{text}</div>
                <ButtonArea>
                    <ConfirmButton onClick={onConfirm}>{left}</ConfirmButton>
                    <CloseButton onClick={onClose}>{right}</CloseButton>
                </ButtonArea>
            </ModalContent>
        </ModalBackground>
    );
};

export default Modal;
