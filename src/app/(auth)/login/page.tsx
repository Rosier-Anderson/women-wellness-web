import { SectionHeading } from "@/components/ui/SectionHeading";
import Box from "@/components/ui/global/Box";
import LoginForm from "@/components/forms/login-form";
import React from "react";

export default function login() {
  return (
    <Box id="app-login" className="">
      <div className="flex flex-col items-center gap-4  ">
        <SectionHeading
          as="h1"
          titleClassName="text-4xl sm:text-6xl"
          descClassName="text-lg max-w-sm"
          badge="Account"
          title="Welcome Back"
          desc="Sign in to your account to continue your journey with us."
        />
      </div>
      <LoginForm/>
    </Box>
  );
}
