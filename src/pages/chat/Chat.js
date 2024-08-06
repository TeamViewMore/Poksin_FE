import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import * as C from "../../styles/chat/ChatStyle";
import axios from 'axios';
import { Client } from '@stomp/stompjs';
import SockJS from 'sockjs-client';
import { useCookies } from 'react-cookie';
import ChatMessage from "../../components/ChatMessage";
import { fetchUserData } from '../../utils/userApi';
import More from '../../components/More';
import Modal from '../../components/Modal';

import profile from "../../img/profile_admin.png";
import more from "../../img/more.png";
import fileimg from "../../img/file.png";
import send from "../../img/send.png";
import close from "../../img/close.png";

function Chat({ date }) {
    const [cookies] = useCookies(["accessToken"]);
    const [loggedInUser, setLoggedInUser] = useState(null);
    const [roomId, setRoomId] = useState(null);
    const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');
    const [file, setFile] = useState(null);
    const [fileKey, setFileKey] = useState(Date.now());
    const [stompClient, setStompClient] = useState(null);
    const [loadingMessages, setLoadingMessages] = useState(true);
    const [showMore, setShowMore] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [modalType, setModalType] = useState('');
    const moreRef = useRef();
    const chatRef = useRef();
    const navigate = useNavigate();
    const [blocked, setBlocked] = useState(false);

    const handleMoreClick = () => {
        setShowMore((prevShowMore) => !prevShowMore);
    };

    const handleClickOutside = (event) => {
        if (moreRef.current && !moreRef.current.contains(event.target)) {
            setShowMore(false);
        }
    };

    const handleMenuClick = (menu) => {
        if (menu === '상담 종료') {
            setModalType('end');
            setShowModal(true);
        } else {
            console.log(`${menu} Clicked`);
        }
        setShowMore(false);
    };

    const handleConfirmClose = async () => {
        console.log("클로즈 직전: " + blocked);
        try {
            const token = cookies.accessToken;
            const response = await axios.post(`https://poksin-backend.store/chat/rooms/${roomId}/close`, null, {
                headers: {
                    'Authorization': `${token}`
                }
            });
            if (response.status === 200) {
                setBlocked(true);
                alert("상담이 종료되었습니다.");
                navigate(`/main`);
            } else {
                console.error('상담 종료 요청 실패:', response);
                alert("상담 종료 요청이 실패했습니다. 다시 시도해주세요.");
            }
        } catch (error) {
            console.error('상담 종료 중 오류 발생:', error);
            alert("상담 종료 중 오류가 발생했습니다. 다시 시도해주세요.");
        }
    };

    const handleResumeChat = async () => {
        console.log("오픈 직전: " + blocked);
        try {
            const token = cookies.accessToken;
            const response = await axios.post(`https://poksin-backend.store/chat/rooms/${roomId}/open`, null, {
                headers: {
                    'Authorization': `${token}`
                }
            });
            if (response.status === 200) {
                setBlocked(false);
                alert("상담이 재개되었습니다.");
                setShowModal(false);
            } else {
                console.error('상담 재개 요청 실패:', response);
                alert("상담 재개 요청이 실패했습니다. 다시 시도해주세요.");
            }
        } catch (error) {
            console.error('상담 재개 중 오류 발생:', error);
            alert("상담 재개 중 오류가 발생했습니다. 다시 시도해주세요.");
        }
    };

    const handleModalClose = () => {
        setShowModal(false);
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }, [messages]);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const token = cookies.accessToken;
                if (!token) {
                    throw new Error("토큰을 찾을 수 없음");
                }
                const data = await fetchUserData(token);
                console.log("챗에서 함수실행");
                setLoggedInUser(data.user);
                setRoomId(data.roomId);
                console.log("서버 roomId: " + roomId);
                setBlocked(data.blocked);
                console.log("서버 state: " + blocked);
            } catch (error) {
                console.error("채팅에서 유저 정보 가져오기 에러:", error);
            }
        };

        fetchUser();
    }, [cookies.accessToken, blocked, roomId]);

    useEffect(() => {
        if (!loggedInUser || !roomId) {
            return;
        }

        const socket = new SockJS('https://poksin-backend.store/chat');
        const client = new Client({
            webSocketFactory: () => socket,
            onConnect: (frame) => {
                console.log('Connected: ' + frame);
                client.subscribe(`/topic/${roomId}`, (message) => {
                    const newMessage = JSON.parse(message.body);
                    setMessages((prevMessages) => {
                        const isMessageExist = prevMessages.some(msg => msg.id === newMessage.id);
                        if (isMessageExist) return prevMessages;
                        return [...prevMessages, newMessage];
                    });
                });
            },
            onStompError: (frame) => {
                console.error('STOMP Error:', frame);
            },
            onWebSocketError: (error) => {
                console.error('WebSocket Error:', error);
            }
        });

        client.activate();
        setStompClient(client);

        if (blocked) {
            console.log(blocked);
            setModalType('resume');
            setShowModal(true);
        }

        const fetchMessages = async () => {
            try {
                const token = cookies.accessToken;
                const response = await axios.get(`https://poksin-backend.store/chat/rooms/messages/${roomId}`, {
                    headers: {
                        'Authorization': `${token}`
                    }
                });
                if (Array.isArray(response.data)) {
                    setMessages(response.data);
                } else {
                    console.error('메시지 데이터가 배열이 아님:', response.data);
                }
            } catch (error) {
                console.error('메시지 로드 중 오류 발생:', error);
            } finally {
                setLoadingMessages(false);
                if (chatRef.current) {
                    chatRef.current.scrollTop = chatRef.current.scrollHeight;
                }
            }
        };

        fetchMessages();

        return () => {
            client.deactivate();
        };
    }, [loggedInUser, roomId, cookies.accessToken, blocked]);

    const sendMessage = async () => {
        if (!stompClient || !stompClient.connected) {
            console.error('STOMP client is not connected');
            return;
        }

        if (!loggedInUser || !loggedInUser.username) {
            console.error('Logged-in user information is missing');
            return;
        }

        if (!message.trim()) {
            console.error('Message is empty');
            return;
        }

        const koreaTime = new Date().toLocaleString("en-US", { timeZone: "Asia/Seoul" });
        const timestamp = new Date(koreaTime).toISOString();

        const chatMessage = {
            type: 'TALK',
            sender: loggedInUser.username,
            roomId: roomId,
            message: message,
            timestamp: timestamp
        };

        try {
            await stompClient.publish({ destination: `/app/chat.sendMessage`, body: JSON.stringify(chatMessage) });
            setMessage('');
            if (chatRef.current) {
                chatRef.current.scrollTop = chatRef.current.scrollHeight;
            }
        } catch (error) {
            console.error('메시지 전송 중 오류 발생:', error);
        }
    };

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleFileDelete = () => {
        setFile(null);
        setFileKey(Date.now());
    };

    const uploadFile = async () => {
        if (!file) {
            console.error('No file selected');
            return;
        }
    
        const formData = new FormData();
        formData.append('file', file);
        formData.append('roomId', roomId);
    
        try {
            const token = cookies.accessToken;
            const response = await axios.post('https://poksin-backend.store/chat/upload', formData, {
                headers: {
                    'Authorization': `${token}`,
                }
            });
            console.log('File upload response:', response.data);
            const newMessage = response.data;
            newMessage.timestamp = convertToKST(newMessage.timestamp).toISOString();
            setMessages((prevMessages) => {
                const isMessageExist = prevMessages.some(msg => msg.id === newMessage.id);
                if (isMessageExist) return prevMessages;
                return [...prevMessages, newMessage];
            });
            setFile(null);
            setFileKey(Date.now());
            if (chatRef.current) {
                chatRef.current.scrollTop = chatRef.current.scrollHeight;
            }
        } catch (error) {
            console.error('파일 업로드 중 오류 발생:', error);
        }
    };

    const convertToKST = (timestamp) => {
        const date = new Date(timestamp);
        const utcOffset = date.getTimezoneOffset() * 60000; // UTC offset in milliseconds
        const kstOffset = 9 * 60 * 60000; // KST offset in milliseconds (UTC+9)
        const kstDate = new Date(date.getTime() + utcOffset + kstOffset);
        return kstDate;
    };

    const groupMessagesByDate = (messages) => {
        const groupedMessages = [];
        let lastDate = '';

        if (!Array.isArray(messages)) {
            // console.error('groupMessagesByDate: messages가 배열이 아님', messages);
            return groupedMessages;
        }

        messages.forEach((msg) => {
            const messageDate = new Date(msg.timestamp);
            const formattedDate = messageDate.toLocaleDateString('ko-KR', { year: 'numeric', month: 'numeric', day: 'numeric' });

            if (formattedDate !== lastDate) {
                groupedMessages.push({ date: formattedDate, messages: [msg] });
                lastDate = formattedDate;
            } else {
                groupedMessages[groupedMessages.length - 1].messages.push(msg);
            }
        });

        return groupedMessages;
    };

    const filterMessagesByDate = (messages, date) => {
        return messages.filter((msg) => {
            const messageDate = new Date(msg.timestamp).toLocaleDateString('ko-KR', { year: 'numeric', month: 'numeric', day: 'numeric' });
            return messageDate === date;
        });
    };

    const groupedMessages = groupMessagesByDate(messages);
    const filteredMessages = date ? filterMessagesByDate(messages, date) : messages;

    useEffect(() => {
        const handleResize = () => {
            const heightDiff = window.innerHeight - document.documentElement.clientHeight;
            if (heightDiff > 150) {
                setIsKeyboardVisible(true);
            } else {
                setIsKeyboardVisible(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleKeyDown = (event) => {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            sendMessage();
        }
    };

    const handleKeyUp = (event) => {
        if (event.key === 'Enter' && !event.shiftKey) {
            setIsKeyboardVisible(false);
        }
    };

    if (date) {
        filterMessagesByDate(messages, date);
        const hasMessagesForDate = filteredMessages.length > 0;
        return (
            <C.Chat ref={chatRef} style={{ height: isKeyboardVisible ? 'calc(100vh - 220px)' : 'calc(100vh - 100px)' }}>
                {loadingMessages ? (
                    <div style={{ width: '151px', margin: '300px auto',}}>메시지를 불러오는 중...</div>
                ) : (
                    <div>
                        <C.Date>
                            <div className='line'></div>
                            <div className='date'>{date}</div>
                            <div className='line'></div>
                        </C.Date>
                        {hasMessagesForDate ? (
                            filteredMessages.map((msg) => (
                                <ChatMessage key={msg.id} message={msg} loggedInUser={loggedInUser} />
                            ))
                        ) : (
                            <div style={{display: 'flex', justifyContent: 'center',}}>앗, 해당 날짜의 상담 내용이 없어요!</div>
                        )}
                    </div>
                )}
            </C.Chat>
        );
    }

    return (
        <C.Background>
            <C.Top>
                <div className='left'>
                    <img src={profile} alt='프로필' />
                    <div>폭신폭신</div>
                </div>
                <div className='right' onClick={handleMoreClick}><img src={more} alt='더보기' /></div>
                {showMore && (
                    <div ref={moreRef} style={{ position: 'absolute', top: 'calc(100% - 12px)', right: '32px', zIndex: 1000 }}>
                        <More menu="상담 종료" onMenuClick={handleMenuClick} />
                    </div>
                )}
            </C.Top>
            <C.Chat ref={chatRef} style={{ height: isKeyboardVisible ? 'calc(100vh - 220px)' : 'calc(100vh - 100px)' }}>
                {loadingMessages ? (
                    <div style={{ width: '151px', margin: '300px auto',}}>메시지를 불러오는 중...</div>
                ) : (
                    groupedMessages.map((group, index) => (
                        <div key={`date-${index}`}>
                            <C.Date>
                                <div className='line'></div>
                                <div className='date'>{group.date}</div>
                                <div className='line'></div>
                            </C.Date>
                            {group.messages.map((msg) => (
                                <ChatMessage key={msg.id} message={msg} loggedInUser={loggedInUser} />
                            ))}
                        </div>
                    ))
                )}
            </C.Chat>
            <C.Bottom style={{ position: isKeyboardVisible ? 'absolute' : 'fixed', bottom: isKeyboardVisible ? 'calc(100vh - 210px)' : '0' }}>
                <C.InputArea>
                    <C.InputBox>
                    <C.File onClick={() => document.getElementById('file-upload').click()}>
                        <img src={fileimg} alt='파일 첨부' />
                    </C.File>
                    <input
                        key={fileKey}
                        type="file"
                        id="file-upload"
                        onChange={handleFileChange}
                        style={{ display: 'none' }}
                    />
                        <C.Text>
                            <textarea
                                placeholder='Type a message...'
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                onKeyDown={handleKeyDown}
                                onKeyUp={handleKeyUp}
                            />
                        </C.Text>
                        <C.Send>
                            <img src={send} alt='전송' onClick={file ? uploadFile : sendMessage} />
                        </C.Send>
                    </C.InputBox>
                </C.InputArea>
            </C.Bottom>
            {file && (
                <C.FileName>
                    <C.FileNameBox>
                        <div className='filename'><div>{file.name}</div></div>
                        <div className='filedelete' onClick={handleFileDelete}><img src={close} alt='제거' /></div>
                    </C.FileNameBox>
                </C.FileName>
            )}
            {showModal && modalType === 'end' && (
                <Modal onClose={handleModalClose} onConfirm={handleConfirmClose} left="상담 종료" right="취소" text="정말로 상담을 종료할까요?" />
            )}
            {showModal && modalType === 'resume' && (
                <Modal onClose={handleModalClose} onConfirm={handleResumeChat} left="상담 재개" right="취소" text="상담을 다시 시작할까요?" />
            )}
        </C.Background>
    );
}

export default Chat;
