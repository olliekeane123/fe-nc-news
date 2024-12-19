import { createContext, useState } from "react"
import { useNavigate } from "react-router-dom";

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({ isLoggedIn: false, userInfo: {} })

    const login = (userData) => {
      setUser({
        isLoggedIn: true,
        userInfo: userData,
      })
    }
  
    const logout = () => {
      setUser({
        isLoggedIn: false,
        userInfo: {},
      })
    }

    return (
        <UserContext.Provider value={{ user, setUser, login, logout }}>
        {children}
        </UserContext.Provider>
    );
};