import React,{useContext} from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import {AuthContext} from "../context/AuthContext"
//import { useCookies } from 'react-cookie';
const ProtectedRoute = () => {
  const { pathname } = useLocation();
  const {user} = useContext(AuthContext);
  const isAuthenticated1 = localStorage.getItem("user");
  //const isAuthenticated =sessionStorage.getItem("user");
  //const [access,setaccess]=useCookies(['access_token']);
console.log(user);
console.log(document.cookie.in);
console.log(isAuthenticated1);
//console.log(access);
  if ( /*!isAuthenticated ||*/ isAuthenticated1 || isAuthenticated1===user) {
    return <Navigate to="/" state={pathname} />;
  }


  return <Outlet />;
};

export default ProtectedRoute;