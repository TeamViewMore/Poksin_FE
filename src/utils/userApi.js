import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;

export const fetchUserData = async (accessToken) => {
    try {
        // 먼저 사용자 API를 호출
        const userResponse = await axios.get(`${apiUrl}/user/mypage`, {
            headers: {
                Authorization: `${accessToken}`,
            },
        });
        const user = userResponse.data.data;
        const { roomId, blocked } = await findOrCreateChatRoom(user.username, accessToken);
        return { user, roomId, blocked };
    } catch (userError) {
        if (userError.response && userError.response.status === 404) {
            // 사용자가 아닌 경우 상담사 API를 호출
            try {
                const counselorResponse = await axios.get(`${apiUrl}/counselor/mypage`, {
                    headers: {
                        Authorization: `${accessToken}`,
                    },
                });
                const user = counselorResponse.data.data;
                const { roomId, blocked } = await findOrCreateChatRoom(user.username, accessToken);
                return { user, roomId, blocked };
            } catch (counselorError) {
                if (counselorError.response) {
                    console.error('유저 정보 조회 실패:', counselorError.response.data.message);
                } else {
                    console.error('유저 정보 조회 실패:', counselorError.message);
                }
                throw counselorError;
            }
        } else {
            console.error('유저 정보 조회 실패:', userError.message);
            throw userError;
        }
    }
};

const findOrCreateChatRoom = async (username, accessToken) => {
    let count;
    try {
        const roomsResponse = await axios.get(`${apiUrl}/chat/rooms`, {
            headers: {
                Authorization: `${accessToken}`
            }
        });

        if (roomsResponse.status !== 200) {
            throw new Error('채팅방 목록을 가져오는 데 실패했습니다.');
        }

        const rooms = roomsResponse.data.data;
        console.log(rooms);
        const existingRoom = rooms.find(room => room.name === username);

        if (existingRoom) {
            console.log("채팅 목록 가져온 데이터로 전달");
            return { roomId: existingRoom.roomId, blocked: existingRoom.blocked };
        } else {
            const createResponse = await axios.post(`${apiUrl}/chat`, { roomName: username }, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `${accessToken}`
                }
            });

            if (createResponse.status !== 201) {
                throw new Error('채팅방 생성에 실패했습니다.');
            }

            const newRoom = createResponse.data.data;
            count++;
            console.log("새로운 채팅 생성 데이터로 전달" + count);
            return { roomId: newRoom.roomId, blocked: newRoom.blocked };
        }
    } catch (error) {
        console.error('채팅방 생성/이동 중 에러 발생:', error);
        throw error;
    }
};
