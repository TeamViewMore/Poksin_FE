import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;

export const fetchUserData = async (accessToken) => {
    try {
        const response = await axios.get(`${apiUrl}/user/mypage`, {
            headers: {
                Authorization: `${accessToken}`,
            },
        });
        // 데이터 반환
        return response.data.data;
    } catch (error) {
        // 오류 응답이 있는 경우
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    console.error("유효하지 않은 액세스 토큰입니다.");
                    break;
                case 404:
                    console.error("사용자를 찾을 수 없습니다.");
                    break;
                default:
                    console.error("유저 정보 조회 실패:", error.response.data.message);
            }
        } else {
            // 오류 응답이 없는 경우
            console.error("유저 정보 조회 실패:", error.message);
        }
        // 오류를 다시 던짐
        throw error;
    }
};
