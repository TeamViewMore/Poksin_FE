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
