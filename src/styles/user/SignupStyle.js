import styled from "styled-components";

export const Signup = styled.div`
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
export const InputBox = styled.div`
    margin-top: 29px;
`;
export const InputId = styled.input`
    width: 341px;
    height: 51px;
    background-color: rgb(235, 235, 235);
    border-radius: 20px;
    border: 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
export const InputPw = styled.input`
    width: 341px;
    height: 51px;
    background-color: rgb(235, 235, 235);
    border-radius: 20px;
    border: 0px;
    margin-top: 17px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
export const InputPwCheck = styled.input`
    width: 341px;
    height: 51px;
    background-color: rgb(235, 235, 235);
    border-radius: 20px;
    border: 0px;
    margin-top: 17px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
export const InputNumber = styled.input`
    width: 341px;
    height: 51px;
    background-color: rgb(235, 235, 235);
    border-radius: 20px;
    border: 0px;
    margin-top: 17px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
export const InputAlert = styled.input`
    width: 341px;
    height: 51px;
    background-color: rgb(235, 235, 235);
    border-radius: 20px;
    border: 0px;
    margin-top: 17px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
export const InputAddress = styled.input`
    width: 341px;
    height: 51px;
    background-color: rgb(235, 235, 235);
    border-radius: 20px;
    border: 0px;
    margin-top: 17px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const CheckBox = styled.div`
    text-align: left;
    margin-left: 10px;
    margin-top: 5px;
    align-item: center;
    display: flex;
    color: rgb(66, 66, 66);
    font-size: 10pt;
`;

export const LoginButtonBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 46px;
`;

export const LoginButton = styled.button`
    width: 343px;
    height: 51px;
    background-color: rgb(122, 41, 243);
    color: rgb(255, 255, 255);
    text-align: center;
    border-radius: 20px;
    border: 0px;
`;
export const CheckCustom = styled.input`
    width: 15px;
    height: 15px;
    border: 1.5px solid rgb(122, 41, 243);
    border-radius: 50%;
    margin-right: 10px;
    cursor: pointer;
    appearance: none; /* 기본 체크박스 스타일 제거 */
    background-color: white;
    position: relative;
    /* 체크박스 체크된 상태 스타일 */
    &:checked {
        background-color: rgb(122, 41, 243); /* 체크박스 배경색 */
        border-color: rgb(122, 41, 243); /* 체크박스 테두리 색상 */
    }

    /* 체크박스 체크된 상태 스타일 */
    &:checked::after {
        content: "";
        position: absolute;
        top: 55%;
        left: 50%;
        width: 15px; /* 체크 표시 크기 */
        height: 12px; /* 체크 표시 크기 */
        background-color: rgb(122, 41, 243); /* 체크 표시 색상 */
        border-radius: 50%;
        transform: translate(-50%, -50%);
        background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'%3E%3Cpath d='M20.285 5.713a1 1 0 00-1.414 0L10 14.586 5.129 9.714a1 1 0 00-1.413 1.413l5.572 5.572a1 1 0 001.413 0l9.57-9.57a1 1 0 000-1.413z'/%3E%3C/svg%3E")
            no-repeat center;
    }
`;