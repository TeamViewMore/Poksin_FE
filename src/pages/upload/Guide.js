import React from "react";
import { keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";
import * as G from "../../styles/upload/GuideStyle";
import lightbulb from "../../img/lightbulb.svg";

function Guide() {
    const navigate = useNavigate();
    const goToUpload = () => {
        navigate("/upload");
    };
    return (
        <>
            <G.Guide>
                <G.Section>
                    <G.Scroll1>
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <G.CheckCustom type="checkbox" />

                            <G.Line />
                        </div>
                        <G.PaperBox>
                            <div style={{ height: "10px" }}></div>
                            <G.Paper>
                                &nbsp;
                                <G.Lightbulb>
                                    &nbsp;
                                    <img
                                        src={lightbulb}
                                        alt="Electric Light Bulb"
                                        style={{ width: "10px", height: "10px" }}
                                    />
                                </G.Lightbulb>
                                &nbsp;서면 자료
                            </G.Paper>
                            <div style={{ marginLeft: "10px" }}>
                                1. 상해시, 진단서를 발급 받아주세요.
                                <br /> 2. 육하원칙에 맞춰 피해 사실 진술서를 작성해 주세요.
                                <br /> 3. 목격자나 지인에게도 진술서를 받아두시면 도움 돼요.
                            </div>
                        </G.PaperBox>
                    </G.Scroll1>
                    <br />
                    <G.Scroll2>
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <G.CheckCustom type="checkbox" />

                            <G.Line />
                        </div>
                        <G.PhotoBox>
                            <div style={{ height: "10px" }}></div>
                            <G.Photo>
                                &nbsp;
                                <G.Lightbulb>
                                    &nbsp;
                                    <img
                                        src={lightbulb}
                                        alt="Electric Light Bulb"
                                        style={{ width: "10px", height: "10px" }}
                                    />
                                </G.Lightbulb>
                                &nbsp;사진 자료
                            </G.Photo>
                            <div style={{ marginLeft: "10px" }}>
                                1. 상처 사진, 망가진 물건 등을 찍어두세요.
                                <br /> 2. 폭행 장면이 담긴 사진이나 영상도 도움이 돼요.
                                <br />
                                <div style={{ fontSize: "8pt", marginTop: "5px" }}>
                                    *&nbsp;무리해서 찍지 마세요! 당신의 안전이 가장 중요합니다.
                                </div>
                            </div>
                        </G.PhotoBox>
                    </G.Scroll2>
                    <br />
                    <G.Scroll3>
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <G.CheckCustom type="checkbox" />

                            <G.Line2 />
                        </div>
                        <G.RecordBox>
                            <div style={{ height: "10px" }}></div>
                            <G.Record>
                                &nbsp;
                                <G.Lightbulb>
                                    &nbsp;
                                    <img
                                        src={lightbulb}
                                        alt="Electric Light Bulb"
                                        style={{ width: "10px", height: "10px" }}
                                    />
                                </G.Lightbulb>
                                &nbsp;녹취 자료
                            </G.Record>
                            <div style={{ marginLeft: "10px" }}>
                                1. 욕설 등이 담긴 전화 통화 내용을 녹음해주세요. <br />
                                2. 욕설 등이 담긴 현장의 녹음도 도움이 돼요. <br />
                                3. 목격자의 증언을 녹음해두면 도움이 돼요.
                                <br />
                                <div style={{ fontSize: "8pt", marginTop: "9px", lineHeight: "13px" }}>
                                    *&nbsp;대화의 당사자로 대화에 참여하는 경우에는
                                    <br />
                                    상대의 동의 없이 대화/통화를 녹음하더라도 형사처벌 받지 않습니다.
                                    <br />
                                    다만, 민사상으로 손해배상 책임을 부담할 수 있습니다.
                                </div>
                            </div>
                        </G.RecordBox>
                    </G.Scroll3>
                    <br />
                    <G.Scroll4>
                        <G.CheckCustom type="checkbox" />
                        <br />

                        <G.CaptureBox>
                            <div style={{ height: "10px" }}></div>
                            <G.Capture>
                                &nbsp;
                                <G.Lightbulb>
                                    &nbsp;
                                    <img
                                        src={lightbulb}
                                        alt="Electric Light Bulb"
                                        style={{ width: "10px", height: "10px" }}
                                    />
                                </G.Lightbulb>
                                &nbsp;캡쳐 자료
                            </G.Capture>
                            <div style={{ marginLeft: "10px" }}>
                                1. SNS, 문자 메시지 등 괴롭힘을 입증할 수 있는 화면을
                                <br />
                                &nbsp;&nbsp;&nbsp;캡쳐해주세요.
                            </div>
                        </G.CaptureBox>
                    </G.Scroll4>
                </G.Section>
                <G.Detail>
                    폭신폭신에서 제공하는 가이드라인을 참고하여
                    <br />
                    증거 자료를 모아보세요.
                </G.Detail>
                <G.ButtonBox>
                    <G.Button onClick={goToUpload}>자료 업로드 바로 가기</G.Button>
                </G.ButtonBox>
            </G.Guide>
        </>
    );
}

export default Guide;
