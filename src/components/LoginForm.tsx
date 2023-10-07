"use client";
import React, { useState } from "react";

const LoginForm = () => {
  function validateLogin(e: any) {
    e.preventDefault();
  }

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form
      onSubmit={validateLogin}
      className="h-fit flex flex-col gap-10 w-full md:w-[50%] lg:w-[40%] xl:w-[40%] px-[5%] text-gray-200"
    >
      <h2 className="text-gray-50 text-2xl font-bold text-center md:text-left lg:text-left xl:text-left">
        Login
      </h2>

      <fieldset className="flex flex-col gap-5">
        <fieldset className="flex flex-col gap-2">
          <label>Username</label>
          <input
            className="text-[#03022D] w-full bg-gray-100 text-center p-2 outline-none rounded-sm"
            type="text"
            name="username"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            onInvalid={(e) =>
              e.target.setCustomValidity(
                "Please type your registered username."
              )
            }
            onInput={(e) => e.target.setCustomValidity("")}
          />
        </fieldset>
        <fieldset className="flex flex-col gap-2">
          <label>Password</label>
          <input
            className="text-[#03022D] w-full bg-gray-100 text-center p-2 outline-none rounded-sm"
            type="password"
            name="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            onInvalid={(e) =>
              e.target.setCustomValidity("Please type your password.")
            }
            onInput={(e) => e.target.setCustomValidity("")}
          />
        </fieldset>
        <p className="w-full flex flex-row justify-end cursor-pointer">
          Forgot password?
        </p>
        <input
          className="bg-gray-500 text-[#03022D] w-fit flex self-center py-2 px-[20%] rounded-full hover:bg-gray-100 cursor-pointer"
          type="submit"
          value="Sign In"
        />
      </fieldset>
    </form>
  );
};

export default LoginForm;
