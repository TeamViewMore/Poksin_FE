import Calendar from "react-calendar";
import styled from "styled-components";
import NextButton from "../../img/chevron_left.png";

export const Main = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: "Pretendard-Regular.woff2";
    height: 93vh;
    margin: 0;
`;

export const Happen = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 15px;
    margin-bottom: 10px;
    color: rgb(66, 66, 66);
    font-size: 10pt;
    margin-top: 10px;
`;

export const UploadBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const PreciousId = styled.div`
    font-weight: bold;
    font-size: 12pt;
    line-height: 12px;
    color: rgb(66, 66, 66);
    text-align: left;
    width: 328px;
`;

export const Precious = styled.div`
    margin-top: 23px;
    flex-direction: column;
    align-items: center;
    font-size: 9.5pt;
    line-height: 12px;
    color: rgb(66, 66, 66);
    margin-bottom: 22px;
    width: 328px;
    margin-left: 10px;
    padding-top: 59px;
`;

export const Want = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    color: rgb(66, 66, 66);
    font-size: 10pt;
    margin-left: 15px;
`;

export const GuideBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const CalenderList = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    margin: 0;
`;

export const CalenderWrapper = styled.div`
    display: flex;
    justify-content: center;
    color: #424242;
    font-weight: 500;
    font-size: 19px;
    margin: 10px 0px;

    .react-calendar {
        border: none;
        max-width: 350px;
        width: 100%;
    }

    .react-calendar__navigation {
        display: flex;
        align-items: center;
        justify-content: space-around;
        margin-bottom: 0px;
        padding: 10px 10px 10px 0px;
    }

    .react-calendar__navigation span {
        font-size: 12pt;
        font-weight: bold;
    }

    .react-calendar__navigation__prev2-button,
    .react-calendar__navigation__next2-button {
        display: none;
    }

    .react-calendar__navigation__prev-button,
    .react-calendar__navigation__next-button {
        display: none;
    }

    .navigate-button {
        pointer-events: all;
        background-color: rgb(255, 255, 255, 0);
        background-repeat: no-repeat;
        background-position: center;
        border: none;
        background-image: url(${NextButton});
        margin-left: 190px;
        cursor: pointer; /* 커서 스타일 */
        position: absolute;
        top: 163px;
        right: 47px;
        width: 8px;
        height: 14px;
        /* 포커스 시 스타일 */
        &:focus {
            background-color: rgb(255, 255, 255, 0);
            background-repeat: no-repeat;
            background-position: center;
            border: none;

            box-shadow: none;
        }
    }

    .react-calendar__navigation {
        display: flex;
        height: 44px;
        margin-bottom: 0.2em !important;
    }
    .react-calendar__navigation__label {
        display: flex;
        align-items: center;
        font-weight: 300;
        font-size: 17px;
        margin-left: 10px;
        pointer-events: none;
    }

    .react-calendar__navigation__label__labelText {
        color: #424242;
    }

    .react-calendar__month-view__weekdays abbr {
        text-decoration: none;
    }

    .react-calendar__month-view__weekdays {
        margin-bottom: 0px;
    }

    .react-calendar__month-view__days__day--weekend {
        color: #424242;
    }

    .react-calendar__tile--now {
        background-color: #ded6ff;
        color: #424242;
        border-radius: 20px;
    }

    .react-calendar__month-view__days__day:focus,
    .react-calendar__month-view__days__day:hover,
    .react-calendar__tile--active {
        background-color: #ded6ff;
        color: #424242;
        border-radius: 20px;
    }

    .react-calendar__tile abbr {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 35px;
        height: 35px;
        border-radius: 100px;
        color: #424242;
    }

    .high-evidence abbr {
        background-color: #7a29ff;
        color: #ffffff;
    }

    .medium-evidence abbr {
        background-color: #ae7cff !important;
    }

    .low-evidence abbr {
        background-color: #e3d1ff !important;
    }

    .react-calendar__tile--now abbr,
    .react-calendar__tile--active {
        color: #424242;
        border: 1px solid #7a29ff;
        background-color: #ffffff;
    }

    .react-calendar__tile--range,
    .react-calendar__tile--rangeStart,
    .react-calendar__tile--rangeEnd,
    .react-calendar__tile--rangeBothEnds,
    .react-calendar__month-view__days__day {
        color: #424242;
        border: none;
        background-color: #ffffff;
    }

    .react-calendar__month-view__days__day:focus,
    .react-calendar__month-view__days__day:hover {
        background-color: #ded6ff;
        color: #424242;
        border-radius: 20px;
    }
`;

export const CalendarBox = styled(Calendar)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const DayRecordBox = styled.div`
    display: flex;
    flex-direction: column;
    margin: 15px 30px;

    .DayRecordBox-Date {
        margin-bottom: 10px;
    }

    .DayRecordBox-Record {
        font-weight: 300;
        font-size: 15px;
    }
`;

export const GoToMainBtn = styled.img`
    position: absolute;
    width: 8px;
    height: 14px;
    margin-top: 15px;
    margin-left: 310px;
`;
