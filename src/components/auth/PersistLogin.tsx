"use client";
import useAuth from "@/hooks/useAuth";
import useRefreshToken from "@/hooks/useRefreshToken";
import {ReactNode, useEffect, useRef} from "react";

const PersistLogin = ({children}: {children: ReactNode}) => {
  const refresh = useRefreshToken();
  const {auth, setIsLoading} = useAuth();
  const hasRun = useRef(false);

  useEffect(() => {
    if (hasRun.current) return;
    hasRun.current = true;

    const verifyRefreshToken = async () => {
      try {
        await refresh();
      } catch {
        // No cookie or expired: the user is simply logged out
      } finally {
        setIsLoading(false);
      }
    };

    if (!auth?.accessToken) verifyRefreshToken();
    else setIsLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <>{children}</>;
};

export default PersistLogin;
