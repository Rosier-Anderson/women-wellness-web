"use client";
import React, {useActionState} from "react";
import Form from "../global/Form";
import FormInput from "../global/FormInput";
import Button from "../global/Button";
import forgotPassword from "@/lib/actions/forgotPassword";

export default function ForgotPasswordForm() {
  const [state, formAction, isPending] = useActionState(
    forgotPassword,
    undefined,
  );
  return (
    <Form id="forgot-password-form" action={formAction} className="space-y-6">
      <FormInput
        id="email"
        name="email"
        type="email"
        label="Enter Your Email"
        placeholder="exemple@gmail.com"
        error={state && "errors" in state ? state.errors.properties?.email?.errors : undefined}
      />
      <Button
        type="submit"
        title={isPending ? "Sending..." : "Restore Password"}
        loading={isPending}
        className="w-full md:w-fit"
      />
    </Form>
  );
}
