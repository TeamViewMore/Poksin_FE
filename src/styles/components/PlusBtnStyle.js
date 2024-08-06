import styled from "styled-components";

export const PlusBtn = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 393px;
    position: fixed;
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
