import { createContext } from "react";

const AuthContext = createContext({
    isAuthenticated: false,
    user: {},
    login: () => {},
    logout: () => {},
    saveTokens: () => {},
    refreshToken: () => {},
   
    
});

export default AuthContext;