import styled from "styled-components";

export const Profile = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 21px;
    margin-bottom: 43px;
    & img {
        width: 202px;
        height: 202px;
    }
`;

export const Box = styled.div`
    width: 100%;
    height: 58vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-radius: 32px;
    background: #FFF;
    box-shadow: 0px -3px 3px 0px rgba(222, 214, 255, 0.25);
`;

export const Top = styled.div`
    color: #000;
    text-align: center;
    font-family: Pretendard;
    font-size: 17px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`;

export const Middle = styled.div`
    width: 320px;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`;

export const Bottom = styled.div`
    width: 320px;
    height: 51px;
`;

export const Button = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 20px;
    background: var(--main, #7A29FF);
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FFF;
    font-family: Pretendard;
    font-size: 15px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`;

export const InputBox = styled.div`
    width: 320px;
    margin-bottom: 12px;
`;

export const Text = styled.div`
    height: 51px;
    & input {
        width: 303.68px;
        height: 100%;
        border: none;
        background: #FFF;
        border-radius: 20px;
        background: #EBEBEB;
        padding-left: 16.32px;
        padding-right: 0;
    }
    & input::placeholder {
        color: #818181;
        font-family: Pretendard;
        font-size: 15px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
`;

export const Checkbox = styled.div`
    width: 100%;
    margin-left: 16px;
    margin-top: 14px;
    margin-bottom: 6px;
    display: flex;
    align-items: center;
    & .title {
        color: #424242;
        font-family: Pretendard;
        font-size: 13px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
    & .check {
        width: 15px;
        height: 15px;
        margin-left: 7px;
        margin-top: 2px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    & .check img {
        width: 100%;
        height: 100%;
    }
`;