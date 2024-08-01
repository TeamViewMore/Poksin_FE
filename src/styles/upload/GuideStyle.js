import styled, { keyframes } from "styled-components";

// Define keyframes for fade-in effect
export const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Scroll1 = styled.div`
    display: flex;
    animation: ${fadeIn} 1s ease-out forwards;
    animation-delay: ${(props) => (props.isActive ? "0.5s" : "0s")};
    opacity: ${(props) => (props.isActive ? "1" : "0")};
`;

export const Scroll2 = styled.div`
    display: flex;
    animation: ${fadeIn} 1s ease-out forwards;
    animation-delay: ${(props) => (props.isActive ? "1.5s" : "0s")};
    opacity: ${(props) => (props.isActive ? "1" : "0")};
`;

export const Scroll3 = styled.div`
    display: flex;
    animation: ${fadeIn} 1s ease-out forwards;
    animation-delay: ${(props) => (props.isActive ? "2.5s" : "0s")};
    opacity: ${(props) => (props.isActive ? "1" : "0")};
`;

export const Scroll4 = styled.div`
    display: flex;
    animation: ${fadeIn} 1s ease-out forwards;
    animation-delay: ${(props) => (props.isActive ? "3.5s" : "0s")};
    opacity: ${(props) => (props.isActive ? "1" : "0")};
`;

// Other components remain unchanged
export const Line = styled.div`
    height: 85px;
    width: 2px;
    background-color: rgb(122, 41, 243);
    margin-left: 30px;
    margin-top: 13px;
`;

export const Line2 = styled.div`
    height: 120px;
    width: 2px;
    background-color: rgb(122, 41, 243);
    margin-left: 30px;
    margin-top: 13px;
`;

const autoCheck = keyframes`
  from {
    background-color: white;
    transform: scale(1);
  }
  to {
    background-color: white;
    transform: scale(1);
  }
`;

const fillCheck = keyframes`
  from {
    width: 0;
    height: 0;
    opacity: 0;
  }
  to {
    width: 11px;
    height: 11px;
    opacity: 1;
  }
`;

export const CheckCustom = styled.input`
    width: 18px;
    height: 18px;
    border: 1.5px solid rgb(122, 41, 243);
    border-radius: 50%;
    cursor: pointer;
    margin-left: 22px;
    appearance: none;
    position: relative;
    background-color: white;

    &.auto-check {
        animation: ${autoCheck} 0.5s ease-out forwards;
    }

    &::after {
        content: "";
        display: ${(props) => (props.checked ? "block" : "none")};
        width: 11px;
        height: 11px;
        border-radius: 50%;
        background-color: rgb(122, 41, 243);
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        animation: ${fillCheck} 1.5s ease-out forwards;
    }

    &:checked {
        background-color: white;
        border: 1px solid rgb(122, 41, 243);
    }
`;

export const PaperBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 351px;
    border-radius: 20px;
    color: white;
    font-size: 10pt;
    line-height: 18px;
    margin-bottom: 10px;
    margin-left: 15px;
    height: 117px;
    background-color: ${(props) => (props.isActive ? "rgb(122, 41, 255)" : "white")};
    color: ${(props) => (props.isActive ? "white" : "black")};
    opacity: ${(props) => (props.isActive ? "1" : "0")};
    transition: opacity 1s ease-out;
`;

export const PhotoBox = styled(PaperBox)`
    height: 117px;
`;

export const RecordBox = styled(PaperBox)`
    height: 157px;
`;

export const CaptureBox = styled(PaperBox)`
    height: 102px;
`;

export const Paper = styled.div`
    display: flex;
    flex-direction: row;
    color: white;
    background-color: rgb(174, 124, 255);
    width: 74px;
    height: 25px;
    border-radius: 20px;
    font-size: 9pt;
    align-items: center;
    margin-bottom: 10px;
    margin-left: 10px;
`;

export const Photo = styled(Paper)`
    background-color: rgb(174, 124, 255);
`;

export const Record = styled(Paper)`
    background-color: rgb(174, 124, 255);
`;

export const Capture = styled(Paper)`
    background-color: rgb(174, 124, 255);
`;

export const Section = styled.div`
    margin-top: 17px;
`;

export const ButtonBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Button = styled.button`
    width: 343px;
    height: 51px;
    background-color: rgb(122, 41, 243);
    color: rgb(255, 255, 255);
    text-align: center;
    border-radius: 20px;
    border: 0px;
    position: fixed;
    bottom: 30px;
    font-weight: bold;
`;

export const Detail = styled.div`
    text-align: center;
    color: rgb(66, 66, 66);
    margin-top: 22px;
    font-size: 11pt;
`;
export const Guide = styled.div``;
export const Lightbulb = styled.div``;
