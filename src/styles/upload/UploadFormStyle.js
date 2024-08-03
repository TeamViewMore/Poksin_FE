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
    width: 300px;
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

export const CategorySelect = styled.select`
    width: 320px;
    height: 51px;
    border-radius: 20px;
    border: none;
    color: #818181;
    background-color: #ebebeb;
    font-weight: 500;
    margin-top: 15px;
    padding: 15px;
    appearance: none;
    font-size: 13px;

    &::-ms-expand {
        display: none;
    }

    &:focus {
        outline: none;
    }

    option {
        width: 320px;
        color: #424242;
        background-color: #ebebeb;
        font-weight: 500;

        &:hover {
            background-color: #7a29ff;
            color: #ffffff;
        }
    }

    &::after {
        content: "";
        position: absolute;
        top: 20px; /* 조절 필요 */
        right: 10px; /* 조절 필요 */
        width: 0;
        height: 0;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-top: 5px solid #424242;
        pointer-events: none;
    }
`;

export const FileInput = styled.button`
    width: 320px;
    min-height: 51px;
    border-radius: 20px;
    border: none;
    color: #818181;
    background-color: #ebebeb;
    font-weight: 500;
    font-size: 13px;
    margin-top: 15px;
    padding: 15px;
    text-align: left; /* 왼쪽 정렬 */
    white-space: normal; /* 줄 바꿈 허용 */
    overflow: hidden; /* 넘치는 텍스트 숨김 */
    text-overflow: ellipsis; /* 넘치는 텍스트를 생략 기호로 표시 */
`;

export const DateInput = styled.div`
    margin: 0;
    padding: 0;
    font-size: 13px;

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
    width: 290px;
    height: 49px;
    border-radius: 20px;
    border: none;
    color: #424242;
    background-color: #ebebeb;
    font-weight: 500;
    font-size: 13px;
    margin-top: 15px;
    padding-left: 15px;
    padding-right: 15px;

    &:focus {
        outline: none;
    }

    &::placeholder {
        color: #818181;
    }
`;

export const Textarea = styled.textarea`
    width: 290px;
    height: 100px;
    border-radius: 20px;
    border: none;
    color: #424242;
    background-color: #ebebeb;
    font-weight: 500;
    font-size: 13px;
    margin-top: 15px;
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
    width: 320px;
    height: 51px;
    border-radius: 20px;
    border: none;
    color: #ffffff;
    background-color: #7a29ff;
    font-weight: bolder;
    font-size: 13px;
    cursor: pointer;
    outline: none;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 15px;
`;
