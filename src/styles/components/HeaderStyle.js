import styled from "styled-components";

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 22.26px 8px 21px;
`;

export const Logo = styled.div`
    width: 34px;
    height: 43px;
    padding-left: 1px;
    cursor: pointer;
`;

export const Back = styled.div`
    width: 34px;
    height: 43px;
    display: flex;
    justify-content: center;
    align-items: center;
    & img {
        width: 23px;
        height: 25px;
    }
    cursor: pointer;
`;

export const Title = styled.div`
    height: 20px;
    padding-top: 12px;
    padding-bottom: 11px;
    color: #000;
    text-align: center;
    font-family: Pretendard;
    font-size: 17px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`;

export const Menu = styled.div`
    width: 35px;
    height: 43px;
    cursor: pointer;
`;

export const None = styled.div`
    width: 35px;
    height: 43px;
`;
