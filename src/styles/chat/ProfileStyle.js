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
    position: relative;
    margin-top: 26px;
    margin-bottom: 38px;
    width: 319px;
    display: flex;
    justify-content: space-between;
    & div {
        color: var(--Text, #000);
        font-family: Pretendard;
        font-size: 15px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
    }
`;

export const More = styled.div`
    width: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    & img {
        width: 2px;
        height: 12px;
    }
    cursor: pointer;
`;

export const Middle = styled.div``;

export const Detail = styled.div`
    width: 319px;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    & div {
        color: var(--Text, #000);
        text-align: right;
        font-family: Pretendard;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        max-width: 182px;
    }
`;

export const Bottom = styled.div`
    width: 359px;
    margin-top: 17px;
    padding-top: 36px;
    padding-bottom: 88px;
    border-top: 1px solid rgba(0, 0, 0, 0.15);
    display: flex;
    justify-content: space-around;
`;

export const Date = styled.div`
    height: 75px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    & .title {
        color: var(--Text, #000);
        text-align: center;
        font-family: Pretendard;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
    & .date {
        width: 62px;
        color: var(--Text, #000);
        text-align: center;
        font-family: Pretendard;
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
    }
`;
