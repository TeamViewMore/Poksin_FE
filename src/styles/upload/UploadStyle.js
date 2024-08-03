import styled from "styled-components";
import { Link } from "react-router-dom";

export const Upload = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .des {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        white-space: pre-wrap;
        white-space: pre-line;
        font-size: 15px;
        color: #424242;
    }
`;

export const Btns = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    margin-bottom: 30px;
`;

export const BtnSection = styled.div`
    width: 340px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
`;

export const Btn1 = styled(Link)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #424242;
    border: 1px solid #7a29ff;
    width: 160px;
    height: 160px;
    border-radius: 30px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);

    .BtnIcon {
        width: 60px;
        height: auto;
        margin-bottom: 15px;
    }

    .BtnName {
        font-weight: 500;
        font-size: 18px;
        margin-bottom: 3px;
    }

    .BtnDes {
        font-weight: 500;
        font-size: 10px;
    }
`;

export const Btn2 = styled(Link)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    background-color: #7a29ff;
    width: 160px;
    height: 160px;
    border-radius: 30px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);

    .BtnIcon {
        width: 60px;
        height: auto;
        margin-bottom: 15px;
    }

    .BtnName {
        font-weight: 500;
        font-size: 18px;
        margin-bottom: 3px;
    }

    .BtnDes {
        font-weight: 500;
        font-size: 10px;
    }
`;

export const GoToUploadButton = styled(Link)`
    width: 320px;
    height: 51px;
    border-radius: 20px;
    border: none;
    color: #ffffff;
    background-color: #7a29ff;
    font-weight: bolder;
    cursor: pointer;
    outline: none;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    margin-top: 40px;
`;

export const GoToGuide = styled(Link)`
    color: #7a29ff;
    font-weight: bolder;
    text-decoration: underline;
    cursor: pointer;
`;
