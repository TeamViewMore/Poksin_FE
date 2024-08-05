import axios from 'axios';

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
        const roomId = await findOrCreateChatRoom(user.username, accessToken);
        return { user, roomId };
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
                const roomId = await findOrCreateChatRoom(user.username, accessToken);
                return { user, roomId };
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
        const existingRoom = rooms.find(room => room.name === username);

        if (existingRoom) {
            return existingRoom.roomId;
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
            return newRoom.roomId;
        }
    } catch (error) {
        console.error('채팅방 생성/이동 중 에러 발생:', error);
        throw error;
    }
};
