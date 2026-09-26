"use client";
import {
  createContext,
  createElement,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

interface Auth {
  roles?: string[];
  accessToken?: string;
}

interface AuthContextType {
  auth: Auth;
  setAuth: Dispatch<SetStateAction<Auth>>;
}

const AuthContext = createContext<AuthContextType>({
  auth: {},
  setAuth: () => {},
});

export const AuthProvider = ({children}: {children: ReactNode}) => {
  const [auth, setAuth] = useState<Auth>({});

  return createElement(
    AuthContext.Provider,
    {value: {auth, setAuth}},
    children,
  );
};

export default AuthContext;
