import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import * as U from "../../styles/upload/UploadFormStyle";

function UploadForm() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [filePreview, setFilePreview] = useState(null);
    const [uploadedFileURL, setUploadedFileURL] = useState(null);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedFile(file);
            setFilePreview(URL.createObjectURL(file));
        } else {
            alert("Please select a file.");
        }
    };

    return (
        <>
            <U.UploadForm>
                <form className="form">
                    <div className="Preview">{filePreview && <img src={filePreview} alt="File preview" />}</div>
                    <input type="file" multiple onChange={handleFileChange} />
                    <DatePicker selected={selectedDate} onChange={(date) => setSelectedDate(date)} />
                    <U.Input type="text" placeholder="제목" value={title} onChange={(e) => setTitle(e.target.value)} />
                    <U.Textarea
                        placeholder="상세 설명"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <U.UploadButton type="submit">기록하기</U.UploadButton>
                </form>
            </U.UploadForm>
        </>
    );
}

export default UploadForm;
