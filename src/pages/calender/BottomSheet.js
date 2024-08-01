import React, { useState, useRef } from "react";
import * as B from "../../styles/calender/BottomSheetStyle";
import { useNavigate } from "react-router-dom";
// import Calendar from "react-calendar";
import moment from "moment";
import "react-calendar/dist/Calendar.css";
// import { motion } from "framer-motion";
import Pic from "../../img/picEX.png";
import Dia from "../../img/diaEX.png";
import videoPreview from "../../img/videoEX.mp4";
import audioPreview from "../../img/audioSample.m4a";
import checkedMini from "../../img/check_checked_mini.png";
import More from "../../components/More";
import more from "../../img/more.png";
// import useBottomSheet from "../../pages/calender/useBottomSheet";

function BottomSheet() {
    // const MIN_Y = 60;
    // const MAX_Y = window.innerHeight - 160;
    // const BOTTOM_SHEET_HEIGHT = window.innerHeight - MIN_Y;

    // const [value, onChange] = useState(new Date());
    // const nextDay = moment(value).add(1, "day").toDate();
    // const { sheet } = useBottomSheet();

    let [tab, setTab] = useState(0);

    // 게시물 상세 버튼
    const [showMore, setShowMore] = useState(false);
    const moreRef = useRef();
    const navigate = useNavigate();
    const handleMoreClick = () => {
        setShowMore((prevShowMore) => !prevShowMore);
    };
    const handleMenuClick = (menu) => {
        if (menu === "분석 결과 보기") {
            navigate(`/upload-ai`);
        } else {
            console.log(`${menu} Clicked`);
        }
        setShowMore(false);
    };

    return (
        <>
            <B.Wrapper>
                <B.Header>{moment(value).format("YYYY. MM. DD.")}</B.Header>
                <B.Contents>
                    <B.TabBar>
                        <div className={`videoTab nameTab ${tab === 0 ? "selected" : ""}`} onClick={() => setTab(0)}>
                            동영상
                        </div>
                        <div className={`recordTab nameTab ${tab === 1 ? "selected" : ""}`} onClick={() => setTab(1)}>
                            녹취
                        </div>
                        <div className={`picTab nameTab ${tab === 2 ? "selected" : ""}`} onClick={() => setTab(2)}>
                            사진
                        </div>
                        <div className={`chatTab nameTab ${tab === 3 ? "selected" : ""}`} onClick={() => setTab(3)}>
                            상담
                        </div>
                        <div className={`diaTab nameTab ${tab === 4 ? "selected" : ""}`} onClick={() => setTab(4)}>
                            진단서
                        </div>
                    </B.TabBar>
                    <B.TabContent>
                        {tab === 0 && (
                            <B.videoContent>
                                <div className="top">
                                    <div className="title">폭행 cctv 영상</div>
                                    <B.More onClick={handleMoreClick}>
                                        <img src={more} alt="더보기" />
                                    </B.More>
                                    {showMore && (
                                        <div
                                            ref={moreRef}
                                            style={{
                                                position: "absolute",
                                                top: "calc(100% + 9px)",
                                                right: 0,
                                                zIndex: 1000,
                                            }}
                                        >
                                            <More
                                                menu1="기록 삭제"
                                                menu2="분석 결과 보기"
                                                onMenuClick={handleMenuClick}
                                            />
                                        </div>
                                    )}
                                </div>
                                <div className="explan">처음 맞은 거라 너무 무서웠고, 이때부터가 시작이었다...</div>
                                <div className="videoResult">
                                    <img src={checkedMini} alt='체크'></img>
                                    <span>폭력 발생 횟수 2회, 폭력 지속 시간 12초</span>
                                </div>
                                <div className="media">
                                    <video controls>
                                        <source src={videoPreview} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                            </B.videoContent>
                        )}
                        {tab === 1 && (
                            <B.recordContent>
                                <div className="top">
                                    <div className="title">폭언 녹음</div>
                                    <button className="delete">삭제</button>
                                </div>
                                <div className="explan">가스라이팅 하는 말들</div>
                                <div className="media">
                                    <audio controls>
                                        <source src={audioPreview} type="audio/mpeg" />
                                        Your browser does not support the audio element.
                                    </audio>
                                </div>
                            </B.recordContent>
                        )}
                        {tab === 2 && (
                            <B.picContent>
                                <div className="top">
                                    <div className="title">폭행 cctv 영상</div>
                                    <button className="delete">삭제</button>
                                </div>
                                <div className="explan">처음 맞은 거라 너무 무서웠고, 이때부터가 시작이었다...</div>
                                <div className="media">
                                    <img src={Pic} alt=''></img>
                                </div>
                            </B.picContent>
                        )}
                        {tab === 3 && <B.chatContent></B.chatContent>}
                        {tab === 4 && (
                            <B.diaContent>
                                <div className="top">
                                    <div className="title">진단서 1</div>
                                    <button className="delete">삭제</button>
                                </div>
                                <div className="explan">저번 주에 싸우고 병원가서 떼온 진단서</div>
                                <div className="media">
                                    <img src={Dia} alt=''></img>
                                    <img src={Dia} alt=''></img>
                                    <img src={Dia} alt=''></img>
                                    <img src={Dia} alt=''></img>
                                </div>
                            </B.diaContent>
                        )}
                    </B.TabContent>
                </B.Contents>
            </B.Wrapper>
        </>
    );
}

export default BottomSheet;
