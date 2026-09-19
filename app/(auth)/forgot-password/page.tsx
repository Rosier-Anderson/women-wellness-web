import { SectionHeading } from "@/components/SectionHeading";
import ForgotPasswordForm from "@/components/ui/forms/forgotPassword-form";
import Box from "@/components/ui/global/Box";
import React from "react";

export default function ForgotPassword() {
  return (
    <Box id="forgotPassword-app" className="">
      <div className="flex flex-col items-center gap-4  ">
        <SectionHeading
          titleClassName="text-4xl sm:text-6xl"
          descClassName="text-lg w-sm "
          badge="Account"
          title="Forgot Password"
          desc="Enter your email address and we’ll send you a link to reset your password."
        />
      </div>
      <ForgotPasswordForm />
    </Box>
  );
}
