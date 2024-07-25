import styled, { keyframes, css } from "styled-components";

const slideIn = keyframes`
    from {
        transform: translateX(100%);
    }
    to {
        transform: translateX(0);
    }
`;

const slideOut = keyframes`
    from {
        transform: translateX(0);
    }
    to {
        transform: translateX(100%);
    }
`;

export const MenuContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    @media (hover: hover) and (pointer: fine) {
        position: absolute;
        top: 0;
        left: 0;
        width: 393px;
    }
    background-color: rgba(198, 198, 198, 0.24);
    backdrop-filter: blur(5px);
    z-index: 1000;
    display: flex;
    justify-content: flex-end;
    opacity: ${props => (props.$isClosing ? 0 : 1)};
    transition: opacity 0.3s ease;
`;

export const Side = styled.div`
    width: 62.09vw;
    height: 100vh;
    @media (hover: hover) and (pointer: fine) {
        width: 244px;
        height: 100vh;
    }
    background-color: #FFF;
    display: flex;
    flex-direction: column;
    align-items: center;
    ${props => css`
        animation: ${props.$isClosing ? slideOut : slideIn} 0.3s forwards;
    `}
`;

export const Top = styled.div`
    width: 100%;
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    justify-content: flex-end;
    & img {
        width: 13px;
        height: 13px;
        margin-top: 23px;
        margin-right: 23px;
        cursor: pointer;
    }
`;

export const Profile = styled.div`
    height: 171px;
    margin-top: 65px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    & img {
        width: 100px;
        height: 100px;
    }
    & div {
        color: #000;
        font-family: Pretendard;
        font-size: 13px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        margin-bottom: 29px;
    }
    cursor: pointer;
`;

export const NavList = styled.div`
    width: 87%;
`;

export const Bottom = styled.div`
    width: 100%;
    position: absolute;
    bottom: 0;
    right: 0;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;

export const Logout = styled.div`
    width: 87%;
    height: 48px;
    display: flex;
    align-items: center;
    margin-bottom: 14px;
    border-top: 1px solid rgba(0, 0, 0, 0.15);
    & img{
        width: 16px;
        height: 16px;
        margin-left: 13px;
    }
    & div {
        margin-left: 12px;
        color: #000;
        font-family: Pretendard;
        font-size: 13px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
    }
    cursor: pointer;
`;

export const Copyright = styled.div`
    width: 68px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 35px;
    & img{
        width: 10px;
        height: 10px;
    }
    & div {
        color: #4D4D4D;
        text-align: center;
        font-family: Pretendard;
        font-size: 10px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        letter-spacing: -0.442px;
    }
`;
