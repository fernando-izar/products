import React, { createContext, useState } from "react";
import { signInRequest } from "../../services/auth";
import { useNavigate } from "react-router-dom";
import { ConfirmLogoutModal } from "../ConfirmLogoutModal";

type AuthProviderProps = {
  children: React.ReactNode;
};

export type SignInRequestData = {
  username: string;
  password: string;
};

type AuthContextType = {
  isAuthenticated?: boolean;
  signIn: (data: SignInRequestData) => Promise<void>;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  logout: () => void;
};

export const AuthContext = createContext({} as AuthContextType);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  async function signIn({
    username,
    password,
  }: SignInRequestData): Promise<void> {
    const response = await signInRequest({
      username,
      password,
    });
    if (!response) {
      throw new Error("Invalid credentials");
    }
    const { access, refresh } = response;
    localStorage.setItem("access", access);
    localStorage.setItem("refresh", refresh);
  }

  async function logout() {
    const logout = await ConfirmLogoutModal();
    if (logout) {
      localStorage.removeItem("access");
      localStorage.removeItem("refresh");
      setIsAuthenticated(false);
      navigate("/login");
    }
  }

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, signIn, setIsAuthenticated, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
