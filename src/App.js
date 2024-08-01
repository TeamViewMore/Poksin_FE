import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import Splash from "./pages/other/Splash";
import Login from "./pages/user/Login";
import Signup from "./pages/user/Signup";
import Main from "./pages/other/Main";
import Calender from "./pages/calender/Calender";
import CalenderList from "./pages/calender/CalenderList";
import Upload from "./pages/upload/Upload";
import UploadForm from "./pages/upload/UploadForm";
import AI from "./pages/upload/AI";
import Guide from "./pages/upload/Guide";
import Chat from "./pages/chat/Chat";
import ChatList from "./pages/chat/ChatList";
import Profile from "./pages/chat/Profile";
import ProfileUpdate from "./pages/chat/ProfileUpdate";
import Self from "./pages/other/Self";
import Result from "./pages/other/Result";
import Fake from "./pages/other/Fake";

function App() {
    const location = useLocation();

    const getTitle = () => {
        const path = location.pathname;

        if (/^\/chat\/\d+$/.test(path)) {
            return "상담하기";
        }
        if (/^\/profile\/\d+$/.test(path) || /^\/profile\/update\/\d+$/.test(path)) {
            return "프로필";
        }
        if (/^\/calender\/[0-9]{4}-[0-9]{2}-[0-9]{2}$/.test(path) || path === "/calender") {
            return "기록하기";
        }
        if (/^\/analysis\/\d+$/.test(path)) {
            return "분석 결과";
        }

        switch (path) {
            case "/":
            case "/main":
            case "/fake":
                return "";
            case "/login":
                return "로그인";
            case "/signup":
                return "회원가입";
            case "/upload":
            case "/upload-form":
                return "자료 업로드";
            case "/guide":
                return "가이드라인";
            case "/poksin/admin/chat-list":
                return "상담자 목록";
            case "/profile/:id":
            case "/profile/update/:id":
                return "프로필";
            case "/self":
            case "/self/result":
                return "연애 건강도 자가진단";
            default:
                return "";
        }
    };

    const showHeader = location.pathname !== "/";

    return (
        <div className="App">
            {showHeader && <Header title={getTitle()} />}
            <Routes>
                <Route exact path="/" element={<Splash />} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/signup" element={<Signup />} />
                <Route exact path="/main" element={<Main />} />
                <Route exact path="/calender/:date" element={<Calender />} />
                <Route exact path="/calender" element={<CalenderList />} />
                <Route exact path="/upload" element={<Upload />} />
                <Route exact path="/upload-form" element={<UploadForm />} />
                <Route exact path="/analysis/:id" element={<AI />} />
                <Route exact path="/guide" element={<Guide />} />
                <Route exact path="/chat/:id" element={<Chat />} />
                <Route exact path="/poksin/admin/chat-list" element={<ChatList />} />
                <Route exact path="/profile/:id" element={<Profile />} />
                <Route exact path="/profile/update/:id" element={<ProfileUpdate />} />
                <Route exact path="/self" element={<Self />} />
                <Route exact path="/self/result" element={<Result />} />
                <Route exact path="/fake" element={<Fake />} />
            </Routes>
        </div>
    );
}

export default App;
