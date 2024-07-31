import Calendar from "react-calendar";
import styled from "styled-components";
import "react-calendar/dist/Calendar.css";
import CalendarPrev from "../../img/arrow_left.png";
import CalendarNext from "../../img/arrow_right.png";

export const CalenderList = styled.div``;

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
    }

    .react-calendar__tile--now abbr {
        border: 1px solid #7a29ff;
    }

    .react-calendar__tile--now {
        background-color: #ffffff;
        color: #424242;
    }
`;

export const CalendarBox = styled(Calendar)``;

export const BottomSheet = styled.div`
    position: fixed;
    z-index: 1;
    top: 500px;
    left: 0;
    right: 0;
`;
