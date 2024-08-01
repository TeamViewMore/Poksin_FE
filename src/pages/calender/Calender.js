import React, { useState, useRef } from "react";
import * as C from "../../styles/calender/CalenderStyle";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import "react-calendar/dist/Calendar.css";
import Pic from "../../img/picEX.png";
import Dia from "../../img/diaEX.png";
import videoPreview from "../../img/videoEX.mp4";
import audioPreview from "../../img/audioSample.m4a";
import checkedMini from "../../img/check_checked_mini.png";
import More from "../../components/More";
import more from "../../img/more.png";
import ImgModal from "../../components/ImgModal";
import VideoModal from "../../components/VideoModal";
import PlusBtn from "../../components/PlusBtn";

function Calender() {
    const [value] = useState(new Date());
    // const nextDay = moment(value).add(1, "day").toDate();

    //게시물 id 임의로 지정, 연동할 때 수정해야함
    const id = 1;

    // 탭 버튼
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
            navigate(`/analysis/${id}`);
        } else if (menu === "기록 삭제") {
            // D 연동
        } else {
            console.log(`${menu} Clicked`);
        }
        setShowMore(false);
    };

    // 탭 변경 시 showMore 상태를 false로 변경
    const handleTabClick = (index) => {
        setTab(index);
        setShowMore(false);
    };

    // 이미지 상세보기
    const [selectedImg, setSelectedImg] = useState(null);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const handleImgClick = (src) => {
        setSelectedImg(src);
    };
    const handleVideoClick = (src) => {
        setSelectedVideo(src);
    };
    const handleCloseImgModal = () => {
        setSelectedImg(null);
    };
    const handleCloseVideoModal = () => {
        setSelectedVideo(null);
    };

    return (
        <>
            <C.Calender>
                <C.Header>{moment(value).format("YYYY. MM. DD.")}</C.Header>
                <C.Contents>
                    <C.TabBar>
                        <div
                            className={`videoTab nameTab ${tab === 0 ? "selected" : ""}`}
                            onClick={() => handleTabClick(0)}
                        >
                            동영상
                        </div>
                        <div
                            className={`recordTab nameTab ${tab === 1 ? "selected" : ""}`}
                            onClick={() => handleTabClick(1)}
                        >
                            녹취
                        </div>
                        <div
                            className={`picTab nameTab ${tab === 2 ? "selected" : ""}`}
                            onClick={() => handleTabClick(2)}
                        >
                            사진
                        </div>
                        <div
                            className={`chatTab nameTab ${tab === 3 ? "selected" : ""}`}
                            onClick={() => handleTabClick(3)}
                        >
                            상담
                        </div>
                        <div
                            className={`diaTab nameTab ${tab === 4 ? "selected" : ""}`}
                            onClick={() => handleTabClick(4)}
                        >
                            진단서
                        </div>
                    </C.TabBar>
                    <C.TabContent>
                        {tab === 0 && (
                            <C.videoContent>
                                <div className="top">
                                    <div className="title">폭행 cctv 영상</div>
                                    <C.More onClick={handleMoreClick}>
                                        <img src={more} alt="더보기" />
                                    </C.More>
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
                                    <img src={checkedMini} alt=''></img>
                                    <span>폭력 발생 횟수 2회, 폭력 지속 시간 12초</span>
                                </div>
                                <div className="media">
                                    <video onClick={() => handleVideoClick(videoPreview)}>
                                        <source src={videoPreview} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                            </C.videoContent>
                        )}
                        {tab === 1 && (
                            <C.recordContent>
                                <div className="top">
                                    <div className="title">폭언 녹음</div>
                                    <C.More onClick={handleMoreClick}>
                                        <img src={more} alt="더보기" />
                                    </C.More>
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
                                            <More menu="기록 삭제" onMenuClick={handleMenuClick} />
                                        </div>
                                    )}
                                </div>
                                <div className="explan">가스라이팅 하는 말들</div>
                                <div className="media">
                                    <audio controls>
                                        <source src={audioPreview} type="audio/mpeg" />
                                        Your browser does not support the audio element.
                                    </audio>
                                </div>
                            </C.recordContent>
                        )}
                        {tab === 2 && (
                            <C.picContent>
                                <div className="top">
                                    <div className="title">폭행 cctv 영상</div>
                                    <C.More onClick={handleMoreClick}>
                                        <img src={more} alt="더보기" />
                                    </C.More>
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
                                            <More menu="기록 삭제" onMenuClick={handleMenuClick} />
                                        </div>
                                    )}
                                </div>
                                <div className="explan">처음 맞은 거라 너무 무서웠고, 이때부터가 시작이었다...</div>
                                <div className="media">
                                    <img src={Pic} onClick={() => handleImgClick(Pic)} alt="기록된 이미지"></img>
                                </div>
                            </C.picContent>
                        )}
                        {tab === 3 && <C.chatContent></C.chatContent>}
                        {tab === 4 && (
                            <C.diaContent>
                                <div className="top">
                                    <div className="title">진단서 1</div>
                                    <C.More onClick={handleMoreClick}>
                                        <img src={more} alt="더보기" />
                                    </C.More>
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
                                            <More menu="기록 삭제" onMenuClick={handleMenuClick} />
                                        </div>
                                    )}
                                </div>
                                <div className="explan">저번 주에 싸우고 병원가서 떼온 진단서</div>
                                <div className="media">
                                    <img src={Dia} onClick={() => handleImgClick(Dia)} alt="기록된 진단서"></img>
                                    <img src={Dia} onClick={() => handleImgClick(Dia)} alt="기록된 진단서"></img>
                                    <img src={Dia} onClick={() => handleImgClick(Dia)} alt="기록된 진단서"></img>
                                    <img src={Dia} onClick={() => handleImgClick(Dia)} alt="기록된 진단서"></img>
                                </div>
                            </C.diaContent>
                        )}
                    </C.TabContent>
                </C.Contents>
                {selectedImg && <ImgModal src={selectedImg} onClose={handleCloseImgModal} />}
                {selectedVideo && <VideoModal src={selectedVideo} onClose={handleCloseVideoModal} />}
                <PlusBtn></PlusBtn>
            </C.Calender>
        </>
    );
}

export default Calender;
