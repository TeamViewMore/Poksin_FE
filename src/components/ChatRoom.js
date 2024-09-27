import React from "react";
import * as C from "../styles/components/ChatRoomStyle";

import profile from "../img/profile_mini.png";

function ChatRoom({ roomname, lastMessage, lastUpdate, blocked, onClick }) {
    return (
        <C.ChatRoom onClick={onClick}>
            <C.Left>
                <C.Profile><img src={profile} alt="프로필" /></C.Profile>
                <C.TextBox>
                    <C.Username>{roomname}</C.Username>
                    <C.Preview>{lastMessage}</C.Preview>
                </C.TextBox>
            </C.Left>
            <C.Right>
                <C.Time>{lastUpdate}</C.Time>
                {blocked && (
                    <C.Noti>차단</C.Noti>
                )}
            </C.Right>
        </C.ChatRoom>
    );
}

export default ChatRoom;
