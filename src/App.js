import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

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
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Splash />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/main" element={<Main />} />
        <Route exact path="/calender/:id" element={<Calender />} />
        <Route exact path="/calender" element={<CalenderList />} />
        <Route exact path="/uploade" element={<Upload />} />
        <Route exact path="/upload-form" element={<UploadForm />} />
        <Route exact path="/upload-ai" element={<AI />} />
        <Route exact path="/guide" element={<Guide />} />
        <Route exact path="/chat/:id" element={<Chat />} />
        <Route exact path="/profile/:id" element={<Profile />} />
        <Route exact path="/profile/update/:id" element={<ProfileUpdate />} />
        <Route exact path="/self" element={<Self />} />
        <Route exact path="/self/result" element={<Result />} />
        <Route exact path="/fake" element={<Fake />} />

                {/* 어드민 페이지 */}
                <Route exact path="/poksin/admin/chat-list" element={<ChatList />} />
            </Routes>
        </div>
    );
}

export default App;
