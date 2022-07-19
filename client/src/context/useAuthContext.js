import AuthContext from "./AuthContext";
import { useContext } from "react";


const useAuthContext = () => {
    const user = useContext(AuthContext);

    if (user === undefined) {
        throw new Error("useAuthContext can only be used inside AuthState");
    }
    return user;
};

export default useAuthContext;