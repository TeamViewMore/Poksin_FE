// src/components/ProtectedRoute.js
import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useCookies } from "react-cookie";

const ProtectedRoute = ({ children, publicRoutes }) => {
    const [cookies] = useCookies(["accessToken"]);
    const location = useLocation();
    const isAuthenticated = !!cookies.accessToken; // 인증 여부 확인

    if (!isAuthenticated && !publicRoutes.includes(location.pathname)) {
        return <Navigate to="/" replace />;
    }

    return children;
};

export default ProtectedRoute;
