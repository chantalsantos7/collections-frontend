import { useContext, createContext, useState } from "react";
import authServices from "../services/authServices";
import { useCookies } from "react-cookie";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [loggedIn, setLoggedIn] = useState(false);
    const [cookies, setCookie] = useCookies(['token']);
    const [user, setUser] = useState(null);

    const handleLogin = async (credentials) => {
        try {
            const response = await authServices.loginService(credentials);
            setLoggedIn(true);

            setCookie('token', response.data.token)
            // setUserId(response.data.token);
            return response;
        } catch (error) {
            console.log(error);
            //TODO: throw error up so Login page can handle the error
        }
    }


    return(
        <AuthContext.Provider 
        value={{ loggedIn, handleLogin }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    return useContext(AuthContext);
}