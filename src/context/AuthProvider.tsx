"use client";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

interface Auth {
  userInfo?: {
    userId: string;
    fullName: string;
    email: string;
    roles: string[];
  };
  accessToken?: string;
}

interface AuthContextType {
  auth: Auth;
  setAuth: Dispatch<SetStateAction<Auth>>;
  // true until PersistLogin has tried to restore the session on page load
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

const AuthContext = createContext<AuthContextType>({
  auth: {},
  setAuth: () => {},
  isLoading: true,
  setIsLoading: () => {},
});

export const AuthProvider = ({children}: {children: ReactNode}) => {
  const [auth, setAuth] = useState<Auth>({});
  const [isLoading, setIsLoading] = useState(true);

  return (
    <AuthContext.Provider value={{auth, setAuth, isLoading, setIsLoading}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
