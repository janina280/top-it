import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';  
import { ACCESS_TOKEN_NAME } from '../constants/apiConstants'; 

function PrivateRoute() {
    const token = localStorage.getItem(ACCESS_TOKEN_NAME);
    if (!token) {
        return <Navigate to="/login" replace />;
    }
    return <Outlet />;
}

export default PrivateRoute;
