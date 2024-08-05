import React, { useMemo, useCallback } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
// import { useCookies } from "react-cookie";
import "./App.css";

import Header from "./components/Header";
import ProtectedRoute from "./components/ProtectedRoute";
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

    // Define publicRoutes using useMemo to avoid re-creating it on every render
    const publicRoutes = useMemo(() => ["/", "/login", "/signup"], []);

    // Memoize getTitle function using useCallback to avoid re-creating it on every render
    const getTitle = useCallback(() => {
        const path = location.pathname;

        if (/^\/chat\/.*$/.test(path)) {
            return "상담하기";
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
            case "/profile":
            case "/profile/update":
                return "프로필";
            case "/upload":
            case "/upload-form":
                return "자료 업로드";
            case "/guide":
                return "가이드라인";
            case "/poksin/admin/chat-list":
                return "상담자 목록";
            case "/analysis/:id":
                return "분석 결과";
            case "/profile/:id":
            case "/profile/update/:id":
                return "프로필";
            case "/self":
            case "/self/result":
                return "연애 건강도 자가진단";
            default:
                return "";
        }
    }, [location.pathname]);

    const showHeader = location.pathname !== "/";

    return (
        <div className="App">
            {showHeader && <Header title={getTitle()} />}
            <Routes>
                <Route exact path="/" element={<Splash />} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/signup" element={<Signup />} />

                <Route
                    path="/main"
                    element={
                        <ProtectedRoute publicRoutes={publicRoutes}>
                            <Main />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/calender/:date"
                    element={
                        <ProtectedRoute publicRoutes={publicRoutes}>
                            <Calender />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/calender"
                    element={
                        <ProtectedRoute publicRoutes={publicRoutes}>
                            <CalenderList />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/upload"
                    element={
                        <ProtectedRoute publicRoutes={publicRoutes}>
                            <Upload />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/upload-form"
                    element={
                        <ProtectedRoute publicRoutes={publicRoutes}>
                            <UploadForm />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/analysis/:id"
                    element={
                        <ProtectedRoute publicRoutes={publicRoutes}>
                            <AI />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/guide"
                    element={
                        <ProtectedRoute publicRoutes={publicRoutes}>
                            <Guide />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/chat/:id"
                    element={
                        <ProtectedRoute publicRoutes={publicRoutes}>
                            <Chat />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/poksin/admin/chat-list"
                    element={
                        <ProtectedRoute publicRoutes={publicRoutes}>
                            <ChatList />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/profile"
                    element={
                        <ProtectedRoute publicRoutes={publicRoutes}>
                            <Profile />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/profile/update"
                    element={
                        <ProtectedRoute publicRoutes={publicRoutes}>
                            <ProfileUpdate />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/self"
                    element={
                        <ProtectedRoute publicRoutes={publicRoutes}>
                            <Self />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/self/result"
                    element={
                        <ProtectedRoute publicRoutes={publicRoutes}>
                            <Result />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/fake"
                    element={
                        <ProtectedRoute publicRoutes={publicRoutes}>
                            <Fake />
                        </ProtectedRoute>
                    }
                />
            </Routes>
        </div>
    );
}

export default App;
