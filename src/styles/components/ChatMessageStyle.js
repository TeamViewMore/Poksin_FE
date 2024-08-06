import styled from "styled-components";

export const All = styled.div`
`;

export const Message = styled.div`
    padding: 10px 15px;
    width: auto;
    /* display: flex;
    justify-content: center;
    align-items: center; */
    & .text {
        max-width: 224px;
        color: #424242;
        font-family: Pretendard;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
    & img, video, audio {
        max-width: 200px;
        height: auto;
    }
`;

export const Text = styled.div`
    color: #3E3E3E;
    text-align: center;
    font-family: NanumGothic;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: 4px;
    display: flex;
`;