import React, { useState, useEffect, useRef, useCallback } from "react";
import * as C from "../../styles/calender/CalenderStyle";
import { useNavigate, useParams } from "react-router-dom";
import moment from "moment";
import "react-calendar/dist/Calendar.css";
// import Pic from "../../img/picEX.png";
// import Dia from "../../img/diaEX.png";
// import videoPreview from "../../img/videoEX.mp4";
// import audioPreview from "../../img/audioSample.m4a";
import checkedMini from "../../img/check_checked_mini.png";
import exclamation from "../../img/exclamation.png";
import More from "../../components/More";
import more from "../../img/more.png";
import ImgModal from "../../components/ImgModal";
import VideoModal from "../../components/VideoModal";
import PlusBtn from "../../components/PlusBtn";
import axios from "axios";
import { useCookies } from "react-cookie";

function Calender() {
    const { date } = useParams();
    console.log(date);

    // 탭 버튼
    let [tab, setTab] = useState(0);

    // 게시물 상세 버튼
    const [showMore, setShowMore] = useState({});
    const moreRef = useRef();
    const navigate = useNavigate();

    const handleMoreClick = (evidenceId) => {
        setShowMore((prevShowMore) => ({
            ...prevShowMore,
            [evidenceId]: !prevShowMore[evidenceId],
        }));
    };

    const handleMenuClick = async (menu, evidenceId) => {
        if (menu === "분석 결과 보기") {
            navigate(`/analysis/${evidenceId}`);
        } else if (menu === "기록 삭제") {
            try {
                const response = await axios.delete(`https://poksin-backend.store/evidence/delete/${evidenceId}`, {
                    headers: {
                        Authorization: `${cookies.accessToken}`,
                    },
                });
                if (response.data.code === "SUCCESS_DELETE_EVIDENCE") {
                    setEvidenceDayData((prevData) => prevData.filter((item) => item.id !== evidenceId));
                    console.log("Evidence deleted successfully.");
                }
            } catch (error) {
                console.error("Error deleting evidence:", error);
            }
        } else {
            console.log(`${menu} Clicked`);
        }
        setShowMore((prevShowMore) => ({
            ...prevShowMore,
            [evidenceId]: false,
        }));
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

    // 데이터 가져오기
    const [cookies] = useCookies(["accessToken"]);
    const [evidenceDayData, setEvidenceDayData] = useState([]);
    const categories = ["VIDEO", "AUDIO", "IMAGE", "CONSULTATION", "DIAGNOSIS"];
    const currentCategory = categories[tab];

    useEffect(() => {
        if (currentCategory) {
            fetchEvidenceData(date, currentCategory);
        }
    }, [date, currentCategory]);

    const fetchEvidenceData = useCallback(async (date, category) => {
        try {
            const year = moment(date).year();
            const month = moment(date).month() + 1;
            const day = moment(date).date();
            const token = cookies.accessToken;

            if (!token) {
                console.error("No access token found in cookies");
                return;
            }

            const response = await axios.get("https://poksin-backend.store/evidence/get-day-evidence", {
                params: { year, month, day, category },
                headers: {
                    Authorization: `${token}`, // 인증 토큰
                },
            });
            if (response.data.code === "SUCCESS_RETRIEVE_DAY_EVIDENCE") {
                console.log("Fetch Evidence Data Response:", response);
                setEvidenceDayData(response.data.data);
            }
        } catch (error) {
            console.error("Error fetching evidence data:", error);
        }
    });

    return (
        <>
            <C.Calender>
                <C.Header>{moment(date).format("YYYY. MM. DD.")}</C.Header>
                <C.Contents>
                    <C.TabBar>
                        {["동영상", "녹취", "사진", "상담", "진단서"].map((label, index) => (
                            <div
                                key={index}
                                className={`nameTab ${tab === index ? "selected" : ""}`}
                                onClick={() => handleTabClick(index)}
                            >
                                {label}
                            </div>
                        ))}
                    </C.TabBar>
                    <C.TabContent>
                        {tab === 0 &&
                            (evidenceDayData.length > 0 ? (
                                evidenceDayData
                                    .filter((item) => item.category === "VIDEO")
                                    .map((item) => (
                                        <C.videoContent key={item.id}>
                                            <div className="top">
                                                <div className="title">{item.title}</div>
                                                <C.More onClick={handleMoreClick}>
                                                    <img src={more} alt="더보기" />
                                                </C.More>
                                                {showMore[item.id] && (
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
                                                            evidenceId={item.id}
                                                        />
                                                    </div>
                                                )}
                                            </div>
                                            <div className="explan">{item.description}</div>
                                            <div className="videoResult">
                                                <img
                                                    src={item.done ? checkedMini : exclamation}
                                                    alt="폭력 검출 완료 여부 아이콘"
                                                />
                                                <span>{item.detection}</span>
                                            </div>
                                            <div className="media">
                                                {item.fileUrls.map((url, index) => (
                                                    <video
                                                        preload="metadata"
                                                        src={`${url}#t=0.2`}
                                                        key={index}
                                                        onClick={() => handleVideoClick(url)}
                                                    ></video>
                                                ))}
                                            </div>
                                        </C.videoContent>
                                    ))
                            ) : (
                                <C.NoContent>앗, 아직 등록된 증거가 없어요!</C.NoContent>
                            ))}

                        {tab === 1 &&
                            (evidenceDayData.length > 0 ? (
                                evidenceDayData
                                    .filter((item) => item.category === "AUDIO")
                                    .map((item) => (
                                        <C.recordContent key={item.id}>
                                            <div className="top">
                                                <div className="title">{item.title}</div>
                                                <C.More onClick={handleMoreClick}>
                                                    <img src={more} alt="더보기" />
                                                </C.More>
                                                {showMore[item.id] && (
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
                                                            menu="기록 삭제"
                                                            onMenuClick={handleMenuClick}
                                                            evidenceId={item.id}
                                                        />
                                                    </div>
                                                )}
                                            </div>
                                            <div className="explan">{item.description}</div>
                                            <div className="media">
                                                {item.fileUrls.map((url, index) => (
                                                    <audio src={url} key={index} controls>
                                                        <source src={url} type="audio/mpeg" />
                                                        Your browser does not support the audio element.
                                                    </audio>
                                                ))}
                                            </div>
                                        </C.recordContent>
                                    ))
                            ) : (
                                <C.NoContent>앗, 아직 등록된 증거가 없어요!</C.NoContent>
                            ))}

                        {tab === 2 &&
                            (evidenceDayData.length > 0 ? (
                                evidenceDayData
                                    .filter((item) => item.category === "IMAGE")
                                    .map((item) => (
                                        <C.picContent key={item.id}>
                                            <div className="top">
                                                <div className="title">{item.title}</div>
                                                <C.More onClick={handleMoreClick}>
                                                    <img src={more} alt="더보기" />
                                                </C.More>
                                                {showMore[item.id] && (
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
                                                            menu="기록 삭제"
                                                            onMenuClick={handleMenuClick}
                                                            evidenceId={item.id}
                                                        />
                                                    </div>
                                                )}
                                            </div>
                                            <div className="explan">{item.description}</div>
                                            <div className="media">
                                                {item.fileUrls.map((url, index) => (
                                                    <img
                                                        key={index}
                                                        src={url}
                                                        onClick={() => handleImgClick(url)}
                                                        alt="기록된 이미지"
                                                    />
                                                ))}
                                            </div>
                                        </C.picContent>
                                    ))
                            ) : (
                                <C.NoContent>앗, 아직 등록된 증거가 없어요!</C.NoContent>
                            ))}

                        {tab === 3 &&
                            (evidenceDayData.length > 0 ? (
                                evidenceDayData
                                    .filter((item) => item.category === "CONSULTATION")
                                    .map((item) => <C.chatContent key={item.id}></C.chatContent>)
                            ) : (
                                <C.NoContent>앗, 아직 등록된 증거가 없어요!</C.NoContent>
                            ))}

                        {tab === 4 &&
                            (evidenceDayData.length > 0 ? (
                                evidenceDayData
                                    .filter((item) => item.category === "DIAGNOSIS")
                                    .map((item) => (
                                        <C.diaContent key={item.id}>
                                            <div className="top">
                                                <div className="title">{item.title}</div>
                                                <C.More onClick={handleMoreClick}>
                                                    <img src={more} alt="더보기" />
                                                </C.More>
                                                {showMore[item.id] && (
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
                                                            menu="기록 삭제"
                                                            onMenuClick={handleMenuClick}
                                                            evidenceId={item.id}
                                                        />
                                                    </div>
                                                )}
                                            </div>
                                            <div className="explan">{item.description}</div>
                                            <div className="media">
                                                {item.fileUrls.map((url, index) => (
                                                    <img
                                                        key={index}
                                                        src={url}
                                                        onClick={() => handleImgClick(url)}
                                                        alt="미리보기 제공 불가한 파일입니다."
                                                    />
                                                ))}
                                            </div>
                                        </C.diaContent>
                                    ))
                            ) : (
                                <C.NoContent>앗, 아직 등록된 증거가 없어요!</C.NoContent>
                            ))}
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
