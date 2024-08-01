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
                        <U.Btn1 to="/upload-form">
                            <img className="BtnIcon" src={Icon1} alt="BtnIcon"></img>
                            <div className="BtnName">서면 자료</div>
                            <div className="BtnDes">진단서 및 진술서 등</div>
                        </U.Btn1>
                        <U.Btn2 to="/upload-form">
                            <img className="BtnIcon" src={Icon2} alt="BtnIcon"></img>
                            <div className="BtnName">캡쳐 자료</div>
                            <div className="BtnDes">메신저 및 메시지 내용 등</div>
                        </U.Btn2>
                    </U.BtnSection>
                    <U.BtnSection>
                        <U.Btn2 to="/upload-form">
                            <img className="BtnIcon" src={Icon3} alt="BtnIcon"></img>
                            <div className="BtnName">사진 자료</div>
                            <div className="BtnDes">상처 사진 및 망가진 물건 사진 등</div>
                        </U.Btn2>
                        <U.Btn1 to="/upload-form">
                            <img className="BtnIcon" src={Icon4} alt="BtnIcon"></img>
                            <div className="BtnName">영상/음성 자료</div>
                            <div className="BtnDes">폭행 장면이 들어간 영상 등</div>
                        </U.Btn1>
                    </U.BtnSection>
                </U.Btns>
                <div className="des">
                    {`영상 자료는 폭신폭신의 AI 판사로 정확하게 판단해드릴게요.\n영상 자료는 폭신폭신의 AI 판사로\n폭행 장면을 구분하여 올려드립니다.........`}
                </div>
            </U.Upload>
        </>
    );
}

export default Upload;
