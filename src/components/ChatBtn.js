import React from "react";
import { useNavigate } from "react-router-dom";
import * as C from "../styles/components/ChatBtnStyle";
import chat_button from "../img/chat_button.png";

function ChatBtn() {
    const navigate = useNavigate();

    const goToUploadForm = () => {
        navigate("/chat");
    };

    return (
        <>
            <C.ChatBtn onClick={goToUploadForm}>
                <img src={chat_button} alt="채팅가기"></img>
            </C.ChatBtn>
        </>
    );
}

export default ChatBtn;
