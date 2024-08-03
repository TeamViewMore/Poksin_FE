import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

export const Splash = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
`;

export const LogoBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const anim = (init, mid, final) => keyframes`
    0% {
        top: ${init}%;
        opacity: 0;
    }
    50% {
        top: ${mid}%;
        opacity: 1;
    }
    100% {
        top: ${final}%;
        opacity: 1;
    }
`;

const totalDuration = 4;
const delays = [0, 0.2, 0.4, 0.6, 0.8];

export const Logo1 = styled.img`
    width: 500px;
    height: auto;
    margin-right: 15px;
    position: absolute;
    z-index: 1;
    top: 20%;
    left: 50%;
    transform: translate(-50%, 0%);
    animation: ${anim(20, 20, 10)} ${totalDuration}s ease-out forwards;
`;

export const Logo2 = styled.img`
    width: 500px;
    height: auto;
    margin-right: 15px;
    position: absolute;
    z-index: 2;
    top: 29%;
    left: 50%;
    transform: translate(-50%, 0%);
    opacity: 0;
    animation: ${anim(20, 29, 19)} ${totalDuration - delays[1]}s ease-out ${delays[1]}s forwards;
`;

export const Logo3 = styled.img`
    width: 500px;
    height: auto;
    margin-right: 15px;
    position: absolute;
    z-index: 3;
    top: 38%;
    left: 50%;
    transform: translate(-50%, 0%);
    opacity: 0;
    animation: ${anim(29, 38, 28)} ${totalDuration - delays[2]}s ease-out ${delays[2]}s forwards;
`;

export const Logo4 = styled.img`
    width: 500px;
    height: auto;
    margin-right: 15px;
    position: absolute;
    z-index: 4;
    top: 47%;
    left: 50%;
    transform: translate(-50%, 0%);
    opacity: 0;
    animation: ${anim(38, 47, 37)} ${totalDuration - delays[3]}s ease-out ${delays[3]}s forwards;
`;

export const Logo5 = styled.img`
    width: 500px;
    height: auto;
    margin-right: 15px;
    position: absolute;
    z-index: 5;
    top: 56%;
    left: 50%;
    transform: translate(-50%, 0%);
    opacity: 0;
    animation: ${anim(47, 56, 46)} ${totalDuration - delays[4]}s ease-out ${delays[4]}s forwards;
`;

const animBtn = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

export const Login = styled(Link)`
    width: 320px;
    height: 51px;
    border: 1px solid #7a29ff;
    border-radius: 20px;
    color: #424242;
    font-weight: bolder;
    margin-top: 40px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 70%;
    left: 50%;
    transform: translate(-50%, 0%);
    opacity: 0;
    animation: ${animBtn} 2s ease-out ${totalDuration - 1}s forwards;
`;

export const Signup = styled(Link)`
    width: 320px;
    height: 51px;
    border: 1px solid #7a29ff;
    border-radius: 20px;
    color: #424242;
    font-weight: bolder;
    margin-top: 45px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 78%;
    left: 50%;
    transform: translate(-50%, 0%);
    opacity: 0;
    animation: ${animBtn} 2s ease-out ${totalDuration - 1}s forwards;
`;
