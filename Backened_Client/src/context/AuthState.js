import { useState, useEffect } from 'react';
import { getUser } from './auth.js.js'
import AuthContext from './AuthContext'


export const AuthState = ({ children }) => {

    const [user, setUser] = useState("Harishita");

    useEffect(() => {
        const currentUser = "exist!!"//getUser()-->backend work

        if(currentUser === 'exist!!')
        {
            setUser(currentUser)
        }
        else{
            setUser("SORRY:(")
        }
    }, []);

    return (
        <AuthContext.Provider value={{ user }}>
        {children}
        </AuthContext.Provider>
    );
};