import { useContext, createContext, Children, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [loggedIn, setLoggedIn] = useState(false);

    return(
        <AuthContext.Provider 
        value = { { loggedIn } }
        >
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    return useContext(AuthContext);
}