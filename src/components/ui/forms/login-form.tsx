"use client";

import Form from "../global/Form";
import {SurfaceLink} from "../global/SurfaceLink";
import Button from "../global/Button";
import React, {useState, useRef, useEffect, useContext} from "react";
import FormInput from "../global/FormInput";
import AuthContext from "@/context/AuthProvider";
import axios from "@/api/axios";
import baseAxios from "axios";
const LOGIN_URL = "/auth/login";

const LoginForm = () => {
  const {auth} = useContext(AuthContext);
  const userRef = useRef<HTMLInputElement>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errMsg, setErrMsg] = useState("");
  const errRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(
        LOGIN_URL,
        {email, password},
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        },
      );
      setEmail("");
      setPassword("");
    } catch (error) {
      if (baseAxios.isAxiosError(error)) {
        setErrMsg(error.response?.data.message);
        console.log(error.response?.data); // ← this is the actual reason from your backend
      }
      errRef.current?.focus();
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    userRef.current?.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [email, password]);
  return (
    <Form
      name="login-form"
      id="login-form"
      onSubmit={(e: React.SubmitEvent<HTMLFormElement>) => handleSubmit(e)}>
      <FormInput
        id="email"
        name="email"
        ref={userRef}
        type="email"
        label="Your Email"
        placeholder="exemple@gmail.com"
        required
        // error={errMsg}
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <FormInput
        id="password"
        name="password"
        type="password"
        label="Your Password"
        placeholder="Enter Your Password"
        required
        //  error={errMsg}
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      {errMsg && (
        <span
          ref={errRef}
          role="alert"
          aria-live="assertive"
          className="text-sm text-red-500">
          {errMsg}
        </span>
      )}
      <div className=" flex justify-end">
        {" "}
        <SurfaceLink
          href="/forgot-password"
          className="text-primary w-fit p-0 ">
          Restore Password?
        </SurfaceLink>
      </div>

      <Button
        type="submit"
        title={loading ? "Signing in..." : "Sign In"}
        // loading={isPending}
        className="w-full md:w-fit"
      />
      <span className="flex items-center whitespace-nowrap w-fit ">
        Don&apos;t have an account?
        <SurfaceLink href="/register" className="text-primary p-0 w-fit">
          Create an account
        </SurfaceLink>
      </span>
    </Form>
  );
};
export default LoginForm;
