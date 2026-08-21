import { SectionHeading } from "@/components/SectionHeading";
import Box from "@/components/ui/global/Box";
import LoginForm from "@/components/ui/login-form";
import React from "react";

export default function login() {
  return (
    <Box id="app-login" className="">
      <div className="flex flex-col items-center gap-4  ">
        <SectionHeading
          titleClassName="text-4xl text-6xl"
          descClassName="text-lg"
          badge="Account"
          title="Welcome Back"
          desc="Sign in to your account to continue your journey with us."
        />
      </div>
      <LoginForm/>
    </Box>
  );
}
