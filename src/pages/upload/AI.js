import React, { useState, useEffect } from "react";
import * as A from "../../styles/upload/AIStyle";
import Check from "../../img/ai_check.png";
import Clock from "../../img/ai_clock.png";
import videoPreview from "../../img/videoEX.mp4";
import Loading from "../../components/Loading";

function AI() {
    // 로딩 상태를 관리할 상태 변수와 함수
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // 4초 후에 로딩 완료
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 4000); // 4000ms = 4초

        // 컴포넌트가 언마운트될 때 타이머를 정리
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {isLoading ? (
                <Loading />
            ) : (
                <A.AI>
                    <A.ResultBox>
                        <A.CategoryTitleImg>
                            <hr />
                            <img src={Check} alt="Check" />
                            <hr />
                        </A.CategoryTitleImg>
                        <div className="des">폭력 발생 횟수</div>
                        <div className="res">2회</div>
                    </A.ResultBox>
                    <A.ResultBox>
                        <A.CategoryTitleImg>
                            <hr />
                            <img src={Clock} alt="Clock" />
                            <hr />
                        </A.CategoryTitleImg>
                        <div className="des">폭력 지속시간</div>
                        <div className="res">12초</div>
                    </A.ResultBox>
                    <A.VideoBox>
                        <A.CategoryTitleText>
                            <hr />
                            <div>폭력 장면</div>
                            <hr />
                        </A.CategoryTitleText>
                        <video controls>
                            <source src={videoPreview} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <div className="des">폭력 지속시간 12초</div>
                    </A.VideoBox>
                </A.AI>
            )}
        </>
    );
}

export default AI;
