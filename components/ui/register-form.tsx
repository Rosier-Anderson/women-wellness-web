import Form from "./global/Form";
import FormInput from "./global/FormInput";
import Button from "./global/Button";
import { SurfaceLink } from "./global/SurfaceLink";

export default function Register() {
  return (
    <Form id="register-form" action="register" className="">
      <FormInput
        id="name"
        name="full-name"
        label="Full Name"
        placeholder="John Doe"
        type="name"
      />
      <FormInput
        id="email"
        name="email"
        label="Your Email"
        placeholder="exemple@.com"
        type="email"
      />
      <FormInput
        id="password"
        name="password"
        label="Your Password"
        placeholder="Enter Your Password"
        type="password"
        autoComplete="new-password"
      />
      <FormInput
        id="confirm-password"
        name="confirm-password"
        label="Confirm Password"
        placeholder="Confirm your password"
        type="password"
        autoComplete="new-password"
        required
      />
      <div className=" flex justify-end">
        {" "}
        <SurfaceLink
          href="/forgot-password"
          className="text-primary w-fit p-0 "
        >
          Restore Password?
        </SurfaceLink>
      </div>
      <Button type="submit" title="Register" className="w-full md:w-fit" />
      <span className="flex items-center whitespace-nowrap w-fit ">
        Already have an account?
        <SurfaceLink href="/login" className="text-primary p-0 w-fit">
          Sign In
        </SurfaceLink>
      </span>
    </Form>
  );
}
