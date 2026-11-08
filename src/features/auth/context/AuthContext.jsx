/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";
import { loginUser } from "../api/authApi.js";

const AuthContext = createContext(null);

function getSavedUser() {
  try {
    const savedUser = localStorage.getItem("authUser");
    return savedUser ? JSON.parse(savedUser) : null;
  } catch {
    return null;
  }
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(getSavedUser);

  const login = async (credentials) => {
    
    const payload = {
      email: credentials.email,
      password: credentials.password,
    };
    const result = await loginUser(payload);

    const userData = result.data.user;
    const token = result.data.access_token;
    localStorage.setItem("authUser", JSON.stringify(userData));
    localStorage.setItem("token", token);

    setUser(userData);

    return result;
  };

  const updateUser = (updatedUser) => {
    localStorage.setItem("authUser", JSON.stringify(updatedUser));
    setUser(updatedUser);
  };

  const logout = () => {
    localStorage.removeItem("authUser");
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: Boolean(user),
        login,
        logout,
        updateUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }

  return context;
}