import styled from "styled-components";

export const Background = styled.div`
    width: 100%;
    height: calc(100vh - 59px);
    background: #F5F5F5;
    display: flex;
    flex-direction: column;
`;

export const Top = styled.div`
    position: relative;
    width: 100%;
    height: 63px;
    border-radius: 0px 0px 30px 30px;
    background: #FFF;
    box-shadow: 0px 4px 2px 0px rgba(217, 217, 255, 0.25);
    display: flex;
    justify-content: space-between;
    align-items: center;
    & .left {
        display: flex;
        justify-content: space-between;
        align-items: center;
        & img {
            width: 45.059px;
            height: 45.059px;
            margin-left: 33px;
            margin-right: 13px;
        }
        & div {
            color: var(--Text, #000);
            font-family: Pretendard;
            font-size: 15px;
            font-style: normal;
            font-weight: 600;
            line-height: normal;
        }
    }
    & .right {
        width: 12px;
        height: 12px;
        margin-right: 33px;
        display: flex;
        justify-content: center;
        align-items: center;
        & img {
            width: 2px;
            height: 12px;
        }
        cursor: pointer;
    }
`;

export const Chat = styled.div`
    flex: 1;
    overflow-y: auto;
    margin-bottom: 90px;
    padding-left: 19px;
    padding-right: 19px;
`;

export const Date = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
    & .date {
        color: #3E3E3E;
        text-align: center;
        font-family: NanumGothic;
        font-size: 10px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        margin: 0 10px;
    }
    & .line {
        width: 137px;
        height: 1px;
        background-color: rgba(0, 0, 0, 0.15);
    }
`;

export const Bottom = styled.div`
    position: fixed;
    bottom: 0;
    width: 100%;
    background: #F5F5F5;
    padding: 10px 0;
    padding-bottom: 18px;
`;

export const InputArea = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const InputBox = styled.div`
    width: 345px;
    height: 57px;
    background-color: #E6E6E6;
    border: none;
    border-radius: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const File = styled.div`
    width: 24px;
    height: 24px;
    margin-left: 15px;
    & img {
        width: 100%;
        height: 100%;
    }
`;

export const Text = styled.div`
    width: 249px;
    height: 100%;
    & textarea {
        width: calc( 100% - 20px );
        height: calc( 100% - 40px );
        border: none;
        background: none;
        padding: 20px 10px;
        color: #424242;
        font-family: Pretendard;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        resize: none;
    }
    & textarea::placeholder {
        color: #818181;
        font-family: Pretendard;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
    & textarea:focus {
        outline: none;
    }
    & textarea::-webkit-scrollbar {
        display: none;
    }
`;

export const Send = styled.div`
    width: 36px;
    height: 36px;
    margin-right: 15px;
    & img {
        width: 100%;
        height: 100%;
    }
`;

export const FileName = styled.div`
    position: relative;
    bottom: 120px;
    left: calc(50% - 105px);
    border-radius: 20px;
    border: 1px solid #9C9C9C;
    background-color: #fff;
    width: 200px;
    height: 26px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

export const FileNameBox = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    & .filename {
        margin-right: 10px;
        margin-left: 10px;
    }
    & .filename div {
        color: #818181;
        text-align: center;
        font-family: Pretendard;
        font-size: 13px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        min-width: 146px;
    }
    & .filedelete {
        width: 7px;
        height: 7px;
        margin-right: 9px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
    & .filedelete img {
        width: 7px;
        height: 7px;
    }
`;
