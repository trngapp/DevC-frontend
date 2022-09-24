import React,{useContext} from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import {AuthContext} from "../context/AuthContext"
const ProtectedRoute = () => {
  const { pathname } = useLocation();
  const {user} = useContext(AuthContext);
  const isAuthenticated = localStorage.getItem("user");
console.log(user);
console.log(isAuthenticated);
  if ( /*!isAuthenticated ||*/ isAuthenticated!==user) {
    return <Navigate to="/signup" state={pathname} />;
  }


  return <Outlet />;
};

export default ProtectedRoute;