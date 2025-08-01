import axios from "axios";
import { createContext, useContext } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const loginUser = async (userData) => {
    try {
      const response = await axios.post(
        "https://api.leosagitrades.com/public/login_portal",
        userData
      );
      return response;
    } catch (error) {
      console.error("Error logging in:", error);
      return error;
    }
  };

  return (
    <AuthContext.Provider value={{ loginUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
