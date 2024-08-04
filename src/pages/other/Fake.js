import React from "react";
import { useNavigate } from "react-router-dom"; // react-router-dom 임포트
import * as F from "../../styles/other/FakeStyle";
import fake from "../../img/fake.png";

function Fake() {
    // const navigate = useNavigate(); // useNavigate 훅 사용

    const handleExit = () => {
        // 종료 버튼 클릭 시 페이지를 홈 또는 다른 페이지로 리다이렉트
        window.location.href = "https://google.com"; // 다른 페이지로 이동
    };

    return (
        <>
            <F.Fake>
                <F.CheckDiv>
                    <img src={fake} alt="logo" style={{ width: "100px", height: "100px" }} />
                </F.CheckDiv>

                <F.ResultValue>
                    죄송합니다 <br />
                    일시적인 오류로 인해 <br />
                    당일 서비스 이용이 불가합니다.
                </F.ResultValue>

                <F.Detail>
                    최대한 신속히 조치하여 <br />
                    정상적인 서비스 이용이 가능하도록 하겠습니다 <br />
                    서비스 이용에 불편을 드려 죄송합니다 <br />
                </F.Detail>

                <F.Re>
                    <F.Button1 onClick={handleExit}>종료</F.Button1>
                </F.Re>
            </F.Fake>
        </>
    );
}

export default Fake;
