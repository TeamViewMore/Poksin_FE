import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import * as C from "../../styles/chat/ChatListStyle";
import ChatRoom from '../../components/ChatRoom';

function ChatList() {
    const [rooms, setRooms] = useState([]);
    const [cookies] = useCookies(['accessToken']);
    const navigate = useNavigate();

    useEffect(() => { 
        const fetchRooms = async () => {
            try {
                const accessToken = cookies.accessToken; 

                const response = await fetch(`${process.env.REACT_APP_API_URL}/chat/rooms`, {
                    method: 'GET',
                    headers: {
                        Authorization: `${accessToken}`
                    },
                });
                if (!response.ok) {
                    throw new Error('채팅방 목록을 가져오는 데 실패했습니다');
                }
    
                const result = await response.json();
                setRooms(result.data); 
            } catch (error) {
                console.error('채팅방 목록을 가져오는 중 에러 발생:', error);
            }
        };
    
        fetchRooms();
    }, [cookies.accessToken]);

    const handleRoomClick = (roomId) => {
        navigate(`/chat/${roomId}`);
    };

    // console.log(rooms);

    const formatLastUpdated = (lastUpdated) => {
        const koreanTimeZone = new Date(lastUpdated).toLocaleString("en-US", { timeZone: "Asia/Seoul" });
        const lastUpdatedDate = new Date(koreanTimeZone);
        const now = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Seoul" }));

        const isToday = lastUpdatedDate.toDateString() === now.toDateString();

        if (isToday) {
            return lastUpdatedDate.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
        } else {
            return lastUpdatedDate.toISOString().split('T')[0];
        }
    };

    return (
        <C.ChatList>
            {rooms.length === 0 ? (
                <div>채팅방이 없습니다.</div>
                ) : (
                rooms.map((room) => (
                    <ChatRoom key={room.roomId} roomname={room.name} lastMessage={room.lastMessage} lastUpdate={formatLastUpdated(room.lastUpdated)} blocked={room.blocked} onClick={() => handleRoomClick(room.roomId)} />
                ))
            )}
        </C.ChatList>
    );
}

export default ChatList;
