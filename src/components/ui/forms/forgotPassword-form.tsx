"use client";
import React, {useActionState} from "react";
import Form from "../global/Form";
import FormInput from "../global/FormInput";
import Button from "../global/Button";


export default function ForgotPasswordForm() {

  return (
    <Form id="forgot-password-form"  className="space-y-6">
      <FormInput
        id="email"
        name="email"
        type="email"
        label="Enter Your Email"
        placeholder="exemple@gmail.com"
        // error={state && "errors" in state ? state.errors.properties?.email?.errors : undefined}
      />
      <Button
        type="submit"
        title={false ? "Sending..." : "Restore Password"}
        // loading={isPending}
        className="w-full md:w-fit"
      />
    </Form>
  );
}
