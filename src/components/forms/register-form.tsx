"use client";
import React, {useEffect, useRef, useState} from "react";
import Button from "@/components/ui/global/Button";
import Form from "@/components/ui/global/Form";
import {SurfaceLink} from "@/components/ui/global/SurfaceLink";
import FormInput from "@/components/ui/global/FormInput";

export default function Register() {
  const userRef = useRef<HTMLInputElement>(null);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errMsg, setErrMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    try {
    } catch (error) {}
  };
  useEffect(() => {
    userRef.current?.focus();
  }, []);
  useEffect(() => {
    setErrMsg("");
  }, [firstName, lastName, email, password, confirmPassword]);
  return (
    <Form
      id="register-form"
      onSubmit={(e: React.SubmitEvent<HTMLFormElement>) => handleSubmit(e)}
      className="">
      <FormInput
        ref={userRef}
        id="firstName"
        name="firstName"
        label="First Name"
        placeholder="John"
        type="name"
        onChange={(e) => setFirstName(e.target.value)}
        value={firstName}
      />
      <FormInput
        id="lastName"
        name="lastName"
        label="Last Name"
        placeholder="Doe"
        type="name"
        onChange={(e) => setLastName(e.target.value)}
        value={lastName}
      />
      <FormInput
        id="email"
        name="email"
        label="Your Email"
        placeholder="exemple@.com"
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <FormInput
        id="password"
        name="password"
        label="Your Password"
        placeholder="Enter Your Password"
        type="password"
        autoComplete="new-password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <FormInput
        id="confirmPassword"
        name="confirmPassword"
        label="Confirm Password"
        placeholder="Confirm your password"
        type="password"
        autoComplete="new-password"
        required
        onChange={(e) => setConfirmPassword(e.target.value)}
        value={confirmPassword}
      />
      <div className=" flex justify-end">
        {" "}
        <SurfaceLink
          href="/forgot-password"
          className="text-primary w-fit p-0 ">
          Restore Password?
        </SurfaceLink>
      </div>
      <Button type="submit" title="Register" className="w-full md:w-fit" />
      <span className="flex items-center whitespace-nowrap w-fit ">
        Already have an account?
        <SurfaceLink href="/login" className="text-primary p-0 w-fit">
          Sign In
        </SurfaceLink>
      </span>
    </Form>
  );
}
