import React, { useState, useEffect, useCallback } from "react";
import * as A from "../../styles/upload/AIStyle";
import Check from "../../img/ai_check.png";
import Clock from "../../img/ai_clock.png";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useCookies } from "react-cookie";
import ReactPlayer from "react-player";
import Loading from "../../components/Loading";

function AI() {
    const { evidence_id } = useParams();
    const [evidenceData, setEvidenceData] = useState([]);
    const [totalCount, setTotalCount] = useState(0);
    const [totalDuration, setTotalDuration] = useState(0);
    const [cookies] = useCookies(["accessToken"]);
    const [isLoading, setIsLoading] = useState(true);

    // 데이터를 가져오는 함수
    const fetchViolenceEvidenceData = useCallback(async () => {
        try {
            const token = cookies.accessToken;

            if (!token) {
                console.error("No access token found in cookies");
                return;
            }

            console.log("Fetching data with evidence_id:", evidence_id);
            console.log("Using token:", token);

            const response = await axios.get(`https://poksin-backend.store/evidence/detail/${evidence_id}`, {
                headers: {
                    Authorization: `${token}`, // 인증 토큰
                },
            });

            if (response.data.code === "SUCCESS_DETAIL_VIDEO_EVIDENCE") {
                setEvidenceData(response.data.data);
                setTotalCount(response.data.totalCount);
                setTotalDuration(response.data.totalDuration);
            } else {
                console.error("Failed to fetch evidence data:", response.data.message);
            }
        } catch (error) {
            console.error("Error fetching evidence data:", error);
        } finally {
            // 로딩 완료 상태로 설정
            setIsLoading(false);
        }
    }, [cookies, evidence_id]);

    useEffect(() => {
        // 로딩 애니메이션 표시
        const timer = setTimeout(() => {
            fetchViolenceEvidenceData();
        }, 3000); // 3000ms = 3초

        // 컴포넌트가 언마운트될 때 타이머를 정리
        return () => clearTimeout(timer);
    }, [fetchViolenceEvidenceData]);

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
                        <div className="res">{totalCount}회</div>
                    </A.ResultBox>
                    <A.ResultBox>
                        <A.CategoryTitleImg>
                            <hr />
                            <img src={Clock} alt="Clock" />
                            <hr />
                        </A.CategoryTitleImg>
                        <div className="des">폭력 지속시간</div>
                        <div className="res">{totalDuration}초</div>
                    </A.ResultBox>
                    <A.VideoBox>
                        <A.CategoryTitleText>
                            <hr />
                            <div>폭력 장면</div>
                            <hr />
                        </A.CategoryTitleText>
                        {evidenceData.length > 0 ? (
                            evidenceData.map((video, index) => (
                                <A.VideoDetail key={index}>
                                    <ReactPlayer url={video.fileurl} controls width="100%" height="auto" />
                                    <div className="des">폭력 지속시간 {video.duration}초</div>
                                </A.VideoDetail>
                            ))
                        ) : (
                            <div>No evidence data available</div>
                        )}
                    </A.VideoBox>
                </A.AI>
            )}
        </>
    );
}

export default AI;
