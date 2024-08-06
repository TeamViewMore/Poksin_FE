import styled from "styled-components";

export const AI = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 20px;
`;

export const ResultBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 40px;

    .des {
        margin-bottom: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 400;
        font-size: 15px;
    }

    .res {
        font-size: 25px;
        font-weight: 600;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export const CategoryTitleImg = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;

    img {
        width: 60px;
        height: auto;
        margin: 0;
    }

    hr {
        background-color: #dedede;
        width: 35%;
        height: 1px;
        margin: 0;
        border: 0;
    }
`;

export const VideoBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 40px;
`;

export const CategoryTitleText = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;

    div {
        width: 80px;
        height: 30px;
        margin: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #ffffff;
        background-color: #7a29ff;
        border: none;
        border-radius: 20px;
        font-size: 14px;
    }

    hr {
        background-color: #dedede;
        width: 33%;
        height: 1px;
        margin: 0;
        border: 0;
    }
`;

export const VideoDetail = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;

    .des {
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 400;
        color: #424242;
        font-size: 14px;
    }

    video {
        width: 330px;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 15px;
    }
`;
