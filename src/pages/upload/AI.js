import React from "react";
import * as A from "../../styles/upload/AIStyle";
import Check from "../../img/ai_check.png";
import Clock from "../../img/ai_clock.png";
import videoPreview from "../../img/videoEX.mp4";

function AI() {
    return (
        <>
            <A.AI>
                <A.ResultBox>
                    <A.CategoryTitleImg>
                        <hr></hr>
                        <img src={Check} alt="Check"></img>
                        <hr></hr>
                    </A.CategoryTitleImg>
                    <div className="des">폭력 발생 횟수</div>
                    <div className="res">2회</div>
                </A.ResultBox>
                <A.ResultBox>
                    <A.CategoryTitleImg>
                        <hr></hr>
                        <img src={Clock} alt="Check"></img>
                        <hr></hr>
                    </A.CategoryTitleImg>
                    <div className="des">폭력 지속시간</div>
                    <div className="res">12초</div>
                </A.ResultBox>
                <A.VideoBox>
                    <A.CategoryTitleText>
                        <hr></hr>
                        <div>폭력 장면</div>
                        <hr></hr>
                    </A.CategoryTitleText>
                    <video controls>
                        <source src={videoPreview} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div className="des">폭력 지속시간 12초</div>
                </A.VideoBox>
            </A.AI>
        </>
    );
}

export default AI;
