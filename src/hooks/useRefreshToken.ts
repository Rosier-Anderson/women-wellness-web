"use client";
import React from "react";
import useAuth from "./useAuth";
import axios from "@/api/axios";

const useRefreshToken = () => {
  const {setAuth} = useAuth();

  const refresh = async () => {
    const REFRESH_URL = "auth/refresh";
    const res = await axios.post(
      `${REFRESH_URL}`,
      {},
      {
        withCredentials: true,
      },
    );
    setAuth((prev) => {
      console.log(JSON.stringify(prev));
      console.log(res);
      return {...prev, accessToken: res.data?.accessToken};
    });
    return res.data.accessToken;
  };

  return refresh;
};

export default useRefreshToken;
