import Calendar from "react-calendar";
import styled from "styled-components";
import "react-calendar/dist/Calendar.css";
import CalendarPrev from "../../img/arrow_left.png";
import CalendarNext from "../../img/arrow_right.png";

export const CalenderList = styled.div`
    display: flex;
    flex-direction: column;
    height: 93vh;
    margin: 0;
`;

export const CalenderWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #424242;
    font-weight: 500;
    font-size: 19px;
    margin: 15px 0px;

    .react-calendar {
        border: none;
        max-width: 380px;
        width: 90%;
    }

    .react-calendar__navigation {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .react-calendar__navigation__prev2-button,
    .react-calendar__navigation__next2-button {
        display: none;
    }

    .react-calendar__navigation__prev-button {
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        border: none;
        cursor: pointer;
        width: 32px;
        height: 32px;
        padding: 0;
        margin: 0;
        cursor: pointer;
        background-image: url(${CalendarPrev});
    }

    .react-calendar__navigation__next-button {
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        border: none;
        cursor: pointer;
        width: 32px;
        height: 32px;
        padding: 0;
        margin: 0;
        cursor: pointer;
        background-image: url(${CalendarNext});
    }

    .react-calendar__navigation__label {
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 550;
        font-size: 19px;
        pointer-events: none;
    }

    .react-calendar__navigation__label__labelText {
        color: #424242;
    }

    .react-calendar__month-view__weekdays abbr {
        text-decoration: none;
    }

    .react-calendar__month-view__weekdays {
        margin-bottom: 10px;
    }

    .react-calendar__month-view__days__day--weekend {
        color: #424242;
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
`;

export const CalendarBox = styled(Calendar)``;

export const BottomSheet = styled.div`
    width: 100%;
    flex-grow: 1;
    padding-top: 15px;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    box-shadow: 0 -7px 10px rgba(217, 217, 255, 0.5);
    display: flex;
    flex-direction: column;
    font-weight: 500;
    font-size: 17px;
    margin-top: 20px;
    overflow-y: scroll;

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
