import styled from "styled-components";

export const NavBox = styled.div`
    width: 100%;
    height: 48px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    border-top: 1px solid rgba(0, 0, 0, 0.15);
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    margin-top: -1px;
    &:first-child {
        margin-top: 0; // 첫 번째 요소는 겹치지 않도록
    }
    & div {
        margin-left: 13px;
        color: #000;
        font-family: Pretendard;
        font-size: 13px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
    }
    & img {
        width: 8px;
        height: 14px;
    }
    cursor: pointer;
`;
