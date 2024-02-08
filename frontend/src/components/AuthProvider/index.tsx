import React, { createContext, useState } from "react";
import { signInRequest } from "../../services/auth";

type AuthProviderProps = {
  children: React.ReactNode;
};

export type SignInRequestData = {
  username: string;
  email: string;
  password: string;
};

type AuthContextType = {
  isAuthenticated?: boolean;
  signIn: (data: SignInRequestData) => Promise<void>;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
};

export const AuthContext = createContext({} as AuthContextType);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  async function signIn({
    username,
    email,
    password,
  }: SignInRequestData): Promise<void> {
    console.log("username", username);
    const response = await signInRequest({
      username,
      email,
      password,
    });
    if (!response) {
      throw new Error("Invalid credentials");
    }
    const { access, refresh } = response;
    localStorage.setItem("access", access);
    localStorage.setItem("refresh", refresh);
  }

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, signIn, setIsAuthenticated }}
    >
      {children}
    </AuthContext.Provider>
  );
};
