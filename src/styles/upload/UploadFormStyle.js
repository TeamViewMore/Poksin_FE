import styled from "styled-components";
import "react-datepicker/dist/react-datepicker.css";

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
`;

export const Preview = styled.div`
    width: 83%;
    height: 230px;
    border: 1px solid #7a29ff;
    border-radius: 20px;
    padding: 10px;
    display: flex;
    flex-direction: row;
    justify-content: ${({ filesCount }) => (filesCount === 1 ? "center" : "flex-start")};
    align-items: center;
    overflow-x: auto;
    white-space: nowrap;
    margin-top: 10px;

    img {
        height: 95%;
        width: auto;
        margin: 0px 5px;
    }

    video {
        height: 95%;
        width: auto;
        margin: 0px 5px;
    }

    audio {
        margin: 0px 5px;
        display: inline-block;
    }

    &::-webkit-scrollbar {
        display: none;
    }
    /* Firefox */
    .scrollable-element {
        scrollbar-width: none; /* Firefox 스크롤바 숨기기 */
    }
    /* IE 및 Edge */
    .scrollable-element {
        -ms-overflow-style: none; /* IE 및 Edge 스크롤바 숨기기 */
    }
`;

export const FileInput = styled.button`
    width: 345px;
    border-radius: 20px;
    border: none;
    color: #424242;
    background-color: #ebebeb;
    font-weight: 500;
    margin-top: 20px;
    padding: 15px;
    color: #818181;
    text-align: left; /* 왼쪽 정렬 */
    white-space: normal; /* 줄 바꿈 허용 */
    overflow: hidden; /* 넘치는 텍스트 숨김 */
    text-overflow: ellipsis; /* 넘치는 텍스트를 생략 기호로 표시 */
`;

export const DateInput = styled.div`
    margin: 0;
    padding: 0;

    .react-datepicker__month-container {
        color: #424242;
    }

    .react-datepicker__header {
        background-color: #e3d1ff;
        color: #424242;
        border: none;
    }

    .react-datepicker__current-month,
    .react-datepicker__day-names {
        color: #424242;
    }

    .react-datepicker__day--selected {
        background-color: #7a29ff;
        color: #ffffff;
    }

    .react-datepicker__day--today {
        background-color: #e3d1ff;
        color: #424242;
    }
`;

export const Input = styled.input`
    width: 330px;
    height: 47px;
    border-radius: 20px;
    border: none;
    color: #424242;
    background-color: #ebebeb;
    font-weight: 500;
    margin-top: 20px;
    padding-left: 15px;

    &:focus {
        outline: none;
    }

    &::placeholder {
        color: #818181;
    }
`;

export const Textarea = styled.textarea`
    width: 315px;
    height: 100px;
    border-radius: 20px;
    border: none;
    color: #424242;
    background-color: #ebebeb;
    font-weight: 500;
    margin-top: 20px;
    padding: 15px;
    resize: none;

    &:focus {
        outline: none;
    }

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
`;
