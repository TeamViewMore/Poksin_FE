import styled from "styled-components";

export const Login = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Logo1 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
export const InputBox = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
export const InputId = styled.input`
    width: 296.67px;
    height: 52px;
    background-color: rgb(235, 235, 235);
    padding-left: 20px;
    margin-top: 55px;
    border-radius: 20px;
    border: 0px;
    outline: none;

    /* 포커스 시 스타일 */
    &:focus {
        width: 296.67px;
        height: 52px;
        background-color: rgb(235, 235, 235);
        border: 1px solid transparent;
        box-shadow: none;
    }
    /* 자동완성 스타일 */
    &:-webkit-autofill {
        width: 296.67px;
        height: 52px;
        background-color: rgb(235, 235, 235) !important;
        color: #000 !important;
        border: 1px solid transparent !important;
    }
`;
export const InputPw = styled.input`
    width: 296.67px;
    height: 52px;
    background-color: rgb(235, 235, 235);
    padding-left: 20px;
    border-radius: 20px;
    border: 0px;
    margin-top: 14px;
    outline: none;

    /* 포커스 시 스타일 */
    &:focus {
        width: 296.67px;
        height: 52px;
        background-color: rgb(235, 235, 235);
        border: 1px solid transparent;
        box-shadow: none;
    }
    /* 자동완성 스타일 */
    &:-webkit-autofill {
        width: 296.67px;
        height: 52px;
        background-color: rgb(235, 235, 235) !important;
        color: #000 !important;
        border: 1px solid transparent !important;
    }
`;

export const LoginButtonBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const LoginButton = styled.button`
    width: 320px;
    height: 52px;
    background-color: rgb(122, 41, 243);
    color: rgb(255, 255, 255);
    text-align: center;
    border-radius: 20px;
    border: 0px;
    margin-top: 52px;
`;
export const Yet = styled.div`
    text-align: center;
    color: rgb(66, 66, 66);
    margin-top: 19px;
    line-height: 22px;
`;
