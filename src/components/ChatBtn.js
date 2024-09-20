import React, { useState } from "react";
import * as C from "../styles/components/ChatBtnStyle";
import map_button from "../img/map_button.png";
import Map from "../components/Map";

function ChatBtn() {
    const [showModal, setShowModal] = useState(false);

    const mapModalOpen = () => {
        setShowModal(true);
    };

    const mapModalClose = () => {
        setShowModal(false);
    };

    return (
        <>
            <C.ChatBtn onClick={mapModalOpen}>
                <img src={map_button} alt="현재 위치 전송"></img>
            </C.ChatBtn>
            {showModal && <Map onClose={mapModalClose} />}
        </>
    );
}

export default ChatBtn;
