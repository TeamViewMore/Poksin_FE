import React, { useState } from "react";
import * as C from "../styles/components/ChatMessageStyle";
import ImgModal from "../components/ImgModal";

const ChatMessage = ({ message, loggedInUser }) => {
    const { type, sender, message: msgText, timestamp, fileUrl, fileName } = message;

    // 이미지 상세 보기
    const [selectedImg, setSelectedImg] = useState(null);
    const handleImgClick = (src) => {
        setSelectedImg(src);
    };
    const handleCloseImgModal = () => {
        setSelectedImg(null);
    };

    const renderFileMessage = (fileUrl, fileName) => {
        const fileExtension = fileName.split(".").pop().toLowerCase();
        const imageExtensions = ["jpg", "jpeg", "png", "gif", "bmp", "webp"];
        const videoExtensions = ["mp4", "webm", "ogg"];
        const audioExtensions = ["mp3", "wav", "ogg", "m4a"];

        if (imageExtensions.includes(fileExtension)) {
            return <img src={fileUrl} alt={fileName} onClick={() => handleImgClick(fileUrl)} />;
        } else if (videoExtensions.includes(fileExtension)) {
            return (
                <video controls>
                    <source src={fileUrl} type={`video/${fileExtension}`} />
                    Your browser does not support the video tag.
                </video>
            );
        } else if (audioExtensions.includes(fileExtension)) {
            return (
                <audio controls>
                    <source src={fileUrl} type={`audio/${fileExtension}`} />
                    Your browser does not support the audio tag.
                </audio>
            );
        } else {
            return (
                <a href={fileUrl} target="_blank" rel="noopener noreferrer">
                    {fileName}
                </a>
            );
        }
    };

    const isSender = sender === loggedInUser.username || sender === "anonymousUser";

    const formatTimestamp = (timestamp) => {
        const date = new Date(timestamp);
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const period = hours >= 12 ? "오후" : "오전";
        const formattedHours = hours % 12 || 12; // Convert to 12-hour format
        const formattedMinutes = minutes.toString().padStart(2, "0"); // Ensure minutes are 2 digits

        return `${period} ${formattedHours}:${formattedMinutes}`;
    };

    return (
        <div style={{ marginBottom: "11px" }}>
            <C.All
                className="chatmessage"
                style={{
                    display: "flex",
                    justifyContent: isSender ? "flex-end" : "flex-start",
                    marginBottom: "10px",
                }}
            >
                <C.Message
                    style={{
                        borderRadius: isSender ? "20px 20px 0px 20px" : "20px 20px 20px 0px",
                        background: isSender ? "#DED6FF" : "#E6E6E6",
                        padding: "10px",
                        maxWidth: "75%",
                        wordBreak: "break-word",
                    }}
                >
                    {/* <span><strong>{sender}:</strong> </span> */}
                    {type === "FILE" ? renderFileMessage(fileUrl, fileName) : <div className="text">{msgText}</div>}
                </C.Message>
            </C.All>
            <C.Text style={{ justifyContent: isSender ? "flex-end" : "flex-start" }}>
                {formatTimestamp(timestamp)}
            </C.Text>
            {selectedImg && <ImgModal src={selectedImg} onClose={handleCloseImgModal} />}
        </div>
    );
};

export default ChatMessage;
