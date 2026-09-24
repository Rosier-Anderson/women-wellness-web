"use client";

import Form from "../global/Form";
import FormInput from "../global/FormInput";
import {SurfaceLink} from "../global/SurfaceLink";
import Button from "../global/Button";
import login from "@/lib/actions/login";
import {useActionState} from "react";

export default function LoginForm() {
  const [state, formAction, isPending] = useActionState(login, undefined);
  return (
    <Form action={formAction} id="login-form">
      <FormInput
        id="email"
        name="email"
        type="email"
        label="Your Email"
        placeholder="exemple@gmail.com"
        required
        error={state?.errors?.properties?.email?.errors}
      />
      <FormInput
        id="password"
        name="password"
        type="password"
        label="Your Password"
        placeholder="Enter Your Password"
        required
        error={state?.errors?.properties?.password?.errors}
      />
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
        title={isPending ? "Signing in..." : "Sign In"}
        loading={isPending}
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
}
