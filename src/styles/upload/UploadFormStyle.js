import styled from "styled-components";

export const UploadForm = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .form {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .Preview {
        width: 80%;
        height: 262px;
        border: 1px solid #7a29ff;
        border-radius: 30px;
        padding: 10px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        overflow-x: scroll;
        white-space: nowrap;
    }

    .Preview img {
        height: 95%;
        width: auto;
    }
`;

export const Input = styled.input`
    width: 345px;
    height: 45px;
    border-radius: 20px;
    border: none;
    color: #424242;
    background-color: #ebebeb;
    font-weight: bolder;
    margin-top: 20px;
    padding-left: 10px;

    &::placeholder {
        color: #818181;
    }
`;

export const Textarea = styled.textarea`
    width: 345px;
    height: 200px;
    border-radius: 20px;
    border: none;
    color: #424242;
    background-color: #ebebeb;
    font-weight: bolder;
    margin-top: 20px;

    &::placeholder {
        color: #818181;
    }
`;

export const UploadButton = styled.button`
    width: 345px;
    height: 45px;
    border-radius: 20px;
    border: none;
    color: #ffffff;
    background-color: #7a29ff;
    font-weight: bolder;
    margin-top: 20px;
    padding-right: 5px;
    cursor: pointer;
    outline: none;
    padding: 10px;

    &::placeholder {
        color: #818181;
        font-weight: 400;
    }
`;
