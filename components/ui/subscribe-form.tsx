import React from "react";

export const  SubscribeForm = () =>  {
  return (
    <form action="subscribe-form" className="">
      <label htmlFor="email" className="form-label">
        Email
      </label>
      {/* should be a form */}
      <input
        id="email"
        name="email"
        type="email"
        placeholder="example@gmail.com"
        className="w-full bg-secondary rounded-full p-2 h-14 text-lg outline-none"
      />
    </form>
  );
}
