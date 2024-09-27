import styled from "styled-components";

export const ChatRoom = styled.div`
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 26px;
    cursor: pointer;
`;

export const Left = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: calc(100% - 8px);
`;

export const Profile = styled.div`
    width: 40px;
    height: 40px;
    padding: 5px;
`;

export const TextBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    margin-left: 6px;
`;

export const Username = styled.div`
    color: #424242;
    font-family: Pretendard;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`;

export const Preview = styled.div`
    color: #818181;
    font-family: Pretendard;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

export const Right = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    height: calc(100% - 8px);
    margin-right: 5px;
`;

export const Time = styled.div`
    color: #3E3E3E;
    font-family: Pretendard;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

export const Noti = styled.div`
    color: #FFF;
    text-align: center;
    font-family: Pretendard;
    font-size: 11px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    width: 28px;
    height: 20px;
    border-radius: 50px;
    background-color: #7A29FF;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
`;