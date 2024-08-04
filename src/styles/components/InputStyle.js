import styled from "styled-components";

export const InputBox = styled.div`
    width: 320px;
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
    margin-top: 6px;
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
        width: 18px;
        height: 18px;
        margin-left: 7px;
    }
    & .check img {
        width: 100%;
        height: 100%;
    }
`;