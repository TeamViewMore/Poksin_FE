import React from "react";
import { useLocation } from "react-router-dom";
import * as R from "../../styles/other/ResultStyle";
import check_result from "../../img/check_result.png";
import { useNavigate } from "react-router-dom";

function Result() {
    const location = useLocation();
    const { checkedCount } = location.state || { checkedCount: 0 };
    const navigate = useNavigate();

    const goToSelf = () => {
        navigate("/self");
    };

    const goToMain = () => {
        navigate("/main");
    };
    /*보통이에요 */
    const Acceptable = () => (
        <R.Container>
            <R.CheckDiv>
                <img src={check_result} alt="logo" style={{ width: "100px", height: "100px" }} />
            </R.CheckDiv>

            <R.ResultValue>
                연애의 건강도가
                <br />
                <R.ColorPart1>보통</R.ColorPart1>이에요.
            </R.ResultValue>
            <br />
            <R.Detail>
                건강한 연애를 하고 있는 것으로 보여요.
                <br />
                하지만 가장 중요한 것은 본인의 감정과 경험이므로, <br />
                더 자세한 사항은 전문 기관과 상담해보세요. <br />
                <br /> *여성긴급전화 1336
            </R.Detail>
            <R.Re>
                <R.Button1 onClick={goToSelf}>다시 하기</R.Button1>
                <R.Button2 onClick={goToMain}>메인으로 돌아가기</R.Button2>
            </R.Re>
        </R.Container>
    );
    /*낮음이에요 */
    const Dangerous = () => (
        <R.Container>
            <R.CheckDiv>
                <img src={check_result} alt="logo" style={{ width: "100px", height: "100px" }} />
            </R.CheckDiv>

            <R.ResultValue>
                연애의 건강도가
                <br />
                <R.ColorPart2>낮음</R.ColorPart2>이에요.
            </R.ResultValue>
            <R.Detail>
                데이트 폭력이 의심되는 연애를 하고 있어요.
                <br />
                폭신폭신을 통해서 다시 한 번 연애에 대해 생각해보세요.
                <br />
                도움이 필요하다면, 주저하지 말고 전문 기관에 신고하세요.
                <br />
                <br /> *여성긴급전화 1336
            </R.Detail>
            <R.Re>
                <R.Button1>다시 하기</R.Button1>
                <R.Button2>메인으로 돌아가기</R.Button2>
            </R.Re>
        </R.Container>
    );
    /* 매우 낮음이에요 */
    const VeryDangerous = () => (
        <R.Container>
            <R.CheckDiv>
                <img src={check_result} alt="logo" style={{ width: "100px", height: "100px" }} />
            </R.CheckDiv>

            <R.ResultValue>
                연애의 건강도가
                <br />
                <R.ColorPart3>매우 낮음</R.ColorPart3>
                이에요.
            </R.ResultValue>

            <R.Detail>
                데이트 폭력으로 판단되는 연애를 하고 있어요.
                <br />
                폭신폭신을 통해서 다시 한 번 연애에 대해 생각해보세요.
                <br />
                도움이 필요하다면, 주저하지 말고 전문 기관에 신고하세요.
                <br />
                <br /> *여성긴급전화 1336
            </R.Detail>

            <R.Re>
                <R.Button1>다시 하기</R.Button1>
                <R.Button2>메인으로 돌아가기</R.Button2>
            </R.Re>
        </R.Container>
    );
    let ResultComponent;
    if (checkedCount >= 5) {
        ResultComponent = VeryDangerous;
    } else if (checkedCount >= 3) {
        ResultComponent = Dangerous;
    } else {
        ResultComponent = Acceptable;
    }

    return (
        <>
            <R.Result>
                <ResultComponent />
            </R.Result>
        </>
    );
}

export default Result;
