import React from "react";
import Form from "./global/Form";
import FormInput from "./global/FormInput";
import Button from "./global/Button";

export default function ForgotPasswordForm() {
  return (
    <Form id="forgot-password-form" action="forgot-password" className="space-y-6">
      <FormInput
        id="email"
        name="email"
        type="email"
        label="Enter Your Email"
        placeholder="exemple@gmail.com"
      />
      <Button
        type="submit"
        title="Restore Password"
        className="w-full md:w-fit"
      />
    </Form>
  );
}
