"use client";

import Input from "../global/Input";
import {SurfaceLink} from "../global/SurfaceLink";
import Button from "../global/Button";
import login from "@/lib/actions/login";
import {useActionState} from "react";

export default function LoginForm() {
  const [state, formAction, isPending] = useActionState(login, undefined);
  return (
    <form
      action={formAction}
      id="login-form"
      className=" space-y-3 bg-secondary rounded-2xl w-sm sm:w-2xl p-8 mt-10 ">
      <div className="flex flex-col gap-3">
        <label htmlFor="email">Your Email</label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="exemple@gmail.com"
          required
          className="w-full bg-white px-4 py-2  h-14 text-lg"
        />
      </div>
      <div className="flex flex-col gap-3">
        <label htmlFor="password">Your Password</label>
        <Input
          id="password"
          name="password"
          type="password"
          placeholder="Enter Your Password"
          required
          className="w-full bg-white px-4 py-2  h-14 text-lg"
        />
        {state?.errors && (
          <span className="text-red-500">{state.errors.properties?.password?.errors}</span>
        )}
      </div>
      <div className=" flex justify-end">
        {" "}
        <SurfaceLink
          href="/forgot-password"
          className="text-primary w-fit p-0 ">
          Restore Password?
        </SurfaceLink>
      </div>

      <Button type="submit" title="Sign In" className="w-full md:w-fit" />
      <span className="flex items-center whitespace-nowrap w-fit ">
        Don't have an account?
        <SurfaceLink href="/register" className="text-primary p-0 w-fit">
          Create an account
        </SurfaceLink>
      </span>
    </form>
  );
}
