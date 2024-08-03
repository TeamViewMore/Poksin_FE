import React from "react";
import * as U from "../../styles/upload/UploadStyle";
import Icon1 from "../../img/upload_paper.png";
import Icon2 from "../../img/upload_capture.png";
import Icon3 from "../../img/upload_picture.png";
import Icon4 from "../../img/upload_video.png";

function Upload() {
    return (
        <>
            <U.Upload>
                <U.Btns>
                    <U.BtnSection>
                        <U.Btn1>
                            <img className="BtnIcon" src={Icon1} alt="BtnIcon"></img>
                            <div className="BtnName">서면 자료</div>
                            <div className="BtnDes">진단서 및 진술서 등</div>
                        </U.Btn1>
                        <U.Btn2>
                            <img className="BtnIcon" src={Icon2} alt="BtnIcon"></img>
                            <div className="BtnName">캡쳐 자료</div>
                            <div className="BtnDes">메신저 및 메시지 내용 등</div>
                        </U.Btn2>
                    </U.BtnSection>
                    <U.BtnSection>
                        <U.Btn2>
                            <img className="BtnIcon" src={Icon3} alt="BtnIcon"></img>
                            <div className="BtnName">사진 자료</div>
                            <div className="BtnDes">상처 사진 및 망가진 물건 사진 등</div>
                        </U.Btn2>
                        <U.Btn1>
                            <img className="BtnIcon" src={Icon4} alt="BtnIcon"></img>
                            <div className="BtnName">영상/음성 자료</div>
                            <div className="BtnDes">폭행 장면이 들어간 영상 등</div>
                        </U.Btn1>
                    </U.BtnSection>
                </U.Btns>
                <div className="des">
                    {`증거 자료를 날짜별로 기록해보세요.\n영상 자료는 폭신폭신의 폭력 검출 기능으로\n중요 부분만 잘라드려요.\n만약, 어떤 증거를 수집해야 할지 고민이라면\n`}
                    <span>
                        폭신폭신의 <U.GoToGuide to="/guide">가이드라인</U.GoToGuide>을 참고해보세요!
                    </span>
                </div>

                <U.GoToUploadButton to="/upload-form">기록하러 가기</U.GoToUploadButton>
            </U.Upload>
        </>
    );
}

export default Upload;
