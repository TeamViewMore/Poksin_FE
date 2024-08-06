import React, { useState, useRef, useEffect, useCallback } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import * as U from "../../styles/upload/UploadFormStyle";
import { ko } from "date-fns/locale";
import UploadModal from "../../components/UploadModal";
import axios from "axios";
import { useCookies } from "react-cookie";
import moment from "moment";

function UploadForm() {
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [filePreviews, setFilePreviews] = useState([]);
    const [selectedDate, setSelectedDate] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");

    // 모든 필드가 채워졌는지 확인
    const isFormValid = title && description && category && selectedFiles.length > 0 && selectedDate;

    // 프리뷰 보이게 하기
    const handleFileChange = (event) => {
        const files = Array.from(event.target.files);
        console.log("Files selected:", files);
        const previews = files.map((file) => {
            const url = URL.createObjectURL(file);
            return { url, type: file.type || "unknown", name: file.name };
        });
        setSelectedFiles(files);
        setFilePreviews(previews);
    };

    useEffect(() => {
        // 컴포넌트 언마운트 시 URL 해제
        return () => {
            filePreviews.forEach((url) => URL.revokeObjectURL(url));
        };
    }, [filePreviews]);

    // 파일 선택 버튼 커스텀
    const filePlus = useRef();
    const filePlusClick = (event) => {
        event.preventDefault();
        if (filePlus.current) {
            filePlus.current.click();
        }
    };

    // 카테고리 재설정 시 리셋
    const handleCategoryChange = (e) => {
        const newCategory = e.target.value;
        console.log("Selected category:", newCategory);
        setCategory(newCategory);
        setSelectedFiles([]);
        setFilePreviews([]);
        if (filePlus.current) {
            filePlus.current.value = "";
        }
    };

    // 날짜 선택란 커스텀
    const CustomInput = ({ value, onClick }) => (
        <div
            onClick={onClick}
            style={{
                width: "305px",
                height: "51px",
                borderRadius: "20px",
                border: "none",
                color: "#818181",
                backgroundColor: "#ebebeb",
                fontWeight: "300",
                fontSize: "14px",
                marginTop: "15px",
                paddingLeft: "15px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
            }}
        >
            {value || "날짜"}
        </div>
    );

    // 업로드 후 모달
    const [modalIsOpen, setModalIsOpen] = useState(false);

    // const handleClickModal = (event) => {
    //     event.preventDefault();
    //     setModalIsOpen(true);
    // };
    const handleCloseModal = () => {
        setModalIsOpen(false);
    };

    // 카테고리 선택
    const getAcceptType = useCallback(() => {
        switch (category) {
            case "image":
                return "image/*";
            case "video":
                return "video/*";
            case "audio":
                return "audio/*";
            case "diagnosis":
                return "image/*,.pdf,.txt,.doc,.docx";
            default:
                return "*";
        }
    }, [category]);

    // 연동
    const [cookies] = useCookies(["accessToken"]);

    const handleFormSubmit = useCallback(
        async (event) => {
            event.preventDefault();

            if (!isFormValid) {
                alert("파일을 다시 선택해주세요!");
                return;
            }

            const formData = new FormData();

            const formattedDate = moment(selectedDate).format("YYYY-MM-DD");
            console.log("포맷된 날짜:", formattedDate);

            formData.append(
                "createEvidenceDTO",
                JSON.stringify({
                    title,
                    description,
                    type: category.toUpperCase(),
                    createdAt: formattedDate,
                })
            );

            selectedFiles.forEach((file) => {
                formData.append("fileUrls", file);
            });

            try {
                const response = await axios.post("https://poksin-backend.store/evidence/upload", formData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                        Authorization: `${cookies.accessToken}`,
                    },
                });

                if (response.data.code === "SUCCESS_CREATE_EVIDENCE") {
                    console.log("업로드 성공:", response.data);
                    // 업로드 성공 시 필요한 처리 추가
                } else {
                    console.error("업로드 실패:", response.data.message);
                }
            } catch (error) {
                console.error("업로드 중 오류 발생:", error.response, error.response.data, error.message);
            }

            setModalIsOpen(true);
        },
        [title, description, category, selectedFiles, selectedDate, cookies.accessToken, isFormValid]
    );

    return (
        <>
            <U.UploadForm>
                <form className="form">
                    <U.Preview filesCount={filePreviews.length}>
                        {filePreviews.map((file, index) => {
                            if (file.type.startsWith("image/")) {
                                return <img key={index} src={file.url} alt={`File preview ${index + 1}`} />;
                            } else if (file.type.startsWith("video/")) {
                                return <video key={index} src={file.url} controls />;
                            } else if (file.type.startsWith("audio/")) {
                                return <audio key={index} src={file.url} controls />;
                            } else {
                                return <div key={index}>미리 보기 제공 불가</div>;
                            }
                        })}
                    </U.Preview>

                    <U.CategorySelect value={category} onChange={handleCategoryChange}>
                        <option value="">카테고리</option>
                        <option value="image">사진 자료</option>
                        <option value="video">영상 자료</option>
                        <option value="audio">음성 자료</option>
                        <option value="diagnosis">진단서</option>
                    </U.CategorySelect>

                    {category && (
                        <>
                            <U.FileInput onClick={filePlusClick}>
                                {selectedFiles.length > 0
                                    ? selectedFiles.map((file) => file.name).join(", ")
                                    : "파일 첨부"}
                            </U.FileInput>
                            <input
                                type="file"
                                multiple
                                ref={filePlus}
                                onChange={handleFileChange}
                                style={{ display: "none" }}
                                accept={getAcceptType()}
                            />
                        </>
                    )}

                    <U.DateInput>
                        <DatePicker
                            customInput={<CustomInput />}
                            dateFormat="yyyy년 MM월 dd일"
                            locale={ko}
                            selected={selectedDate}
                            onChange={(date) => setSelectedDate(date)}
                            showFullMonthYearPicker="true"
                        />
                    </U.DateInput>
                    <U.Input type="text" placeholder="제목" value={title} onChange={(e) => setTitle(e.target.value)} />
                    <U.Textarea
                        placeholder="상세 설명"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <U.UploadButton
                        type="submit"
                        onClick={handleFormSubmit}
                        style={{
                            backgroundColor: isFormValid ? "#7a29ff" : "#ebebeb",
                            color: isFormValid ? "#ffffff" : "#818181",
                            cursor: isFormValid ? "pointer" : "not-allowed",
                            pointerEvents: isFormValid ? "auto" : "none",
                        }}
                    >
                        기록하기
                    </U.UploadButton>
                </form>
                {modalIsOpen && <UploadModal onClose={handleCloseModal} />}
            </U.UploadForm>
        </>
    );
}

export default UploadForm;
