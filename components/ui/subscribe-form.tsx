import React from "react";
import Button from "./global/Button";

export const SubscribeForm = () => {
  return (
    <form id="subscribe" action="subscribe-form" className="">
      <label htmlFor="email" className="form-label">
        Enter Your Email
      </label>
      {/* should be a form */}
      <div className="relative w-full">
        <input
          id="email"
          name="email"
          type="email"
          placeholder="example@gmail.com"
          className="w-full h-14 bg-secondary rounded-full pl-5 pr-28 text-lg "
        />

        <Button
          title="Submit"
          type="submit"
          className="absolute right-2 top-2 h-10 py-0"
        />
      </div>
    </form>
  );
};
