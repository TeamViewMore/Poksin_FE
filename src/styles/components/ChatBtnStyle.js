import styled from "styled-components";

export const ChatBtn = styled.div`
    position: fixed;
    display: flex;
    bottom: 30px;
    right: 30px;
    z-index: 10;

    img {
        width: 60px;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    @media (hover: hover) and (pointer: fine) {
        right: calc(50vw - 196.5px + 30px);
    }
`;
