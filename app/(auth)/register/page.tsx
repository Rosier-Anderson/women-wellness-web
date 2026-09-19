import { SectionHeading } from "@/components/SectionHeading";
import Register from "@/components/ui/forms/register-form";
import Box from "@/components/ui/global/Box";
import React from "react";

export default function register() {
  return (
    <Box className="">
      <div className="flex flex-col items-center gap-4  ">
        <SectionHeading
          titleClassName="text-4xl sm:text-6xl"
          descClassName="text-lg w-sm"
          badge="Account"
          title="Register"
          desc="Create an account to start your journey with us."
        />
      </div>

      <Register/>
    </Box>
  );
}
