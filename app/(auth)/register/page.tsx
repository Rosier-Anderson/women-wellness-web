import { SectionHeading } from "@/components/SectionHeading";
import Box from "@/components/ui/global/Box";
import Register from "@/components/ui/register-form";
import React from "react";

export default function register() {
  return (
    <Box className="">
      <div className="flex flex-col items-center gap-4">
        <SectionHeading
          titleClassName="text-4xl text-6xl"
          descClassName="text-lg"
          badge="Account"
          title="Register"
          desc="Create an account to start your journey with us."
        />
      </div>
      <Register/>
    </Box>
  );
}
