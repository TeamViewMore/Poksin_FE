import styled from "styled-components";

export const Header = styled.div`
    height: 50px;
    padding-top: 30px;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    position: relative;
    box-shadow: 0 -7px 10px rgba(217, 217, 255, 0.5);
    display: flex;
    justify-content: center;
    font-weight: 500;
    font-size: 19px;
`;

export const Contents = styled.div``;

export const TabBar = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 60px;
    border-bottom: 0.5px solid #d9d9d9;
    color: #818181;

    .nameTab {
        width: 20%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .selected {
        color: #7a29ff;
        border-bottom: 1px solid #7a29ff;
    }
`;

export const TabContent = styled.div`
    width: 95%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const videoContent = styled.div`
    width: 95%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-bottom: 0.5px solid #d9d9d9;
    color: #424242;

    .top {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin: 20px 0px 10px 0px;
    }

    .title {
        font-weight: 500;
        font-size: 19px;
    }

    .btns {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .videoDetail {
        font-weight: 500;
        font-size: 12px;
        border: 1px solid #7a29ff;
        border-radius: 50px;
        background: none;
        padding: 3px 5px;
        margin: 0;
        cursor: pointer;
        outline: none;
        margin-right: 10px;
    }

    .delete {
        font-weight: 500;
        font-size: 12px;
        border: 1px solid #7a29ff;
        border-radius: 50px;
        background: none;
        padding: 3px 5px;
        margin: 0;
        cursor: pointer;
        outline: none;
    }

    .explan {
        font-weight: 400;
        font-size: 16px;
        margin-bottom: 10px;
    }

    .media {
        display: flex;
        flex-direction: row;
        align-items: center;
        overflow-x: scroll;
        white-space: nowrap;
        margin-top: 10px;
        margin-bottom: 10px;
        height: 150px;
    }

    .media video {
        height: 95%;
        width: auto;
    }
`;

export const recordContent = styled.div``;

export const picContent = styled.div`
    width: 95%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-bottom: 0.5px solid #d9d9d9;
    color: #424242;

    .top {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin: 20px 0px 10px 0px;
    }

    .title {
        font-weight: 500;
        font-size: 19px;
    }

    .delete {
        font-weight: 500;
        font-size: 12px;
        border: 1px solid #7a29ff;
        border-radius: 50px;
        background: none;
        padding: 3px 5px;
        margin: 0;
        cursor: pointer;
        outline: none;
    }

    .explan {
        font-weight: 400;
        font-size: 16px;
        margin-bottom: 10px;
    }

    .media {
        display: flex;
        flex-direction: row;
        align-items: center;
        overflow-x: scroll;
        white-space: nowrap;
        margin-top: 10px;
        margin-bottom: 10px;
        height: 150px;
    }

    .midea img {
        height: 95%;
        width: auto;
    }
`;

export const chatContent = styled.div``;

export const diaContent = styled.div`
    width: 95%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-bottom: 0.5px solid #d9d9d9;
    color: #424242;

    .top {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin: 20px 0px 10px 0px;
    }

    .title {
        font-weight: 500;
        font-size: 19px;
    }

    .delete {
        font-weight: 500;
        font-size: 12px;
        border: 1px solid #7a29ff;
        border-radius: 50px;
        background: none;
        padding: 3px 5px;
        margin: 0;
        cursor: pointer;
        outline: none;
    }

    .explan {
        font-weight: 400;
        font-size: 16px;
        margin-bottom: 10px;
    }

    .media {
        display: flex;
        flex-direction: row;
        align-items: center;
        overflow-x: scroll;
        white-space: nowrap;
        margin-top: 10px;
        margin-bottom: 10px;
        height: 150px;
    }

    .midea img {
        height: 95%;
        width: auto;
    }
`;
