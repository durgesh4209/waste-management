import { createContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    

    useEffect(() => {
        const token = localStorage.getItem("jwtToken");
        if (token) {
            const userData = JSON.parse(atob(token.split(".")[1]));
            setUser(userData);
        }
    }, []);

    const login = (token) => {
        localStorage.setItem("jwtToken", token);
        const userData = JSON.parse(atob(token.split(".")[1]));
        setUser(userData);
    };

    const logout = () => {
        localStorage.removeItem("jwtToken");
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;