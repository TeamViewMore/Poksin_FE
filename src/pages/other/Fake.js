import React from "react";
import * as F from "../../styles/other/FakeStyle";
import fake from "../../img/fake.png";

function Fake() {
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
                    <F.Button1>종료</F.Button1>
                </F.Re>
            </F.Fake>
        </>
    );
}

export default Fake;
