/* eslint-disable */
import React,{useContext} from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import {AuthContext} from "../context/AuthContext"
import { useCookies } from 'react-cookie';
const ProtectedRoute = () => {
  const { pathname } = useLocation();
  const {user} = useContext(AuthContext);
  const isAuthenticated = localStorage.getItem("user");
  const [access,setaccess]=useCookies(['access_token']);
console.log(user);
console.log(document.cookie.in);
console.log(isAuthenticated);
console.log(access);
  if ( /*!isAuthenticated ||*/ isAuthenticated!==user) {
    return <Navigate to="/signup" state={pathname} />;
  }


  return <Outlet />;
};

export default ProtectedRoute;