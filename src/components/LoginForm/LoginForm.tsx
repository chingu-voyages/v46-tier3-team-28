"use client";
import { signIn } from "next-auth/react";
import Link from "next/link";
import React, { useState } from "react";
import OAuthButtons from "@/components/OAuthButtons/OAuthButtons";

const LoginForm = () => {
  function validateLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const email = formData.get('email');
    const password = formData.get('password');

    signIn('credentials', { email, password, callbackUrl: '/dashboard' });
  }

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <form onSubmit={validateLogin} className="h-fit w-fit bg-transparent">
      <div className="w-full h-fit flex flex-col justify-center items-center pb-10">
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="62" fill="none">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M9.237 52.741c3.91 3.732 10.192 3.732 22.763 3.732 12.57 0 18.856 0 22.76-3.732 3.907-3.726 3.907-9.733 3.907-21.74 0-12.008 0-18.012-3.907-21.743-3.901-3.73-10.19-3.73-22.76-3.73-12.57 0-18.856 0-22.763 3.73C5.333 12.992 5.333 18.993 5.333 31c0 12.007 0 18.011 3.904 21.74Zm16.096-30.019c-1.714 0-3.39.486-4.815 1.395a8.373 8.373 0 0 0-3.192 3.716 7.935 7.935 0 0 0-.493 4.783 8.171 8.171 0 0 0 2.372 4.239 8.8 8.8 0 0 0 4.438 2.265 9.044 9.044 0 0 0 5.007-.47 8.593 8.593 0 0 0 3.89-3.05A8.017 8.017 0 0 0 34 31c0-.506.21-.992.586-1.35.375-.358.884-.56 1.414-.56.53 0 1.04.202 1.414.56.375.358.586.844.586 1.35 0 2.394-.743 4.733-2.135 6.723-1.392 1.99-3.37 3.54-5.684 4.456a13.22 13.22 0 0 1-7.319.689 12.86 12.86 0 0 1-6.485-3.312 11.941 11.941 0 0 1-3.467-6.195 11.596 11.596 0 0 1 .72-6.99c.96-2.211 2.583-4.101 4.666-5.43a13.093 13.093 0 0 1 7.037-2.04c.53 0 1.04.202 1.415.56.375.358.585.844.585 1.35 0 .508-.21.993-.585 1.352-.376.358-.884.56-1.415.56Zm22 8.279c0 2.195-.913 4.301-2.538 5.854-1.625 1.552-3.83 2.424-6.128 2.424-.53 0-1.04.202-1.415.56a1.868 1.868 0 0 0-.585 1.35c0 .507.21.993.585 1.352.376.358.884.56 1.415.56 2.505 0 4.954-.71 7.037-2.04s3.706-3.22 4.665-5.43c.959-2.21 1.21-4.644.721-6.99a11.942 11.942 0 0 0-3.467-6.196 12.862 12.862 0 0 0-6.485-3.311 13.22 13.22 0 0 0-7.319.688c-2.314.916-4.292 2.467-5.684 4.457A11.718 11.718 0 0 0 26 31c0 .506.21.992.586 1.35.375.359.884.56 1.414.56.53 0 1.04-.201 1.414-.56.375-.358.586-.843.586-1.35 0-2.196.913-4.302 2.538-5.854 1.626-1.552 3.83-2.425 6.129-2.425 2.298 0 4.503.872 6.128 2.425s2.538 3.658 2.538 5.854Z"
            fill="#633CFF"
          />
        </svg>
      </div>
      <fieldset className="flex flex-col gap-10 w-screen md:w-[476px] lg:w-[476px] xl:w-[476px] p-[5%] md:p-10 lg:p-10 xl:p-10 white rounded-lg bg-white">
        <div className="flex flex-col gap-2">
          <h2 className="text-[#333333] text-3xl font-bold text-center md:text-left lg:text-left xl:text-left leading-[48px]">
            Login
          </h2>
          <p className="text-[#737373] text-center text-md:text-left lg:text-left xl:text-left">
            Enter your credentials below to login
          </p>
        </div>

        <fieldset className="flex flex-col gap-6">
          <fieldset className="flex flex-col gap-2">
            <label className="text-xs text-[#333333]">Email</label>
            <input
              className="text-[#03022D] w-full bg-white text-center p-2 outline-none border-[1px] border-[#D9D9D9] rounded-md"
              type="email"
              name="email"
              placeholder="sample@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              onInvalid={(e) => (e.target as HTMLInputElement).setCustomValidity('Please type your registered email.')}
              onInput={(e) => (e.target as HTMLInputElement).setCustomValidity('')}
            />
          </fieldset>
          <fieldset className="flex flex-col gap-2">
            <label className="text-xs text-[#333333]">Password</label>
            <input
              className="text-[#03022D] w-full bg-white border-[1px] border-[#D9D9D9] text-center p-2 outline-none rounded-md"
              type="password"
              name="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              onInvalid={(e) => (e.target as HTMLInputElement).setCustomValidity('Please type your password.')}
              onInput={(e) => (e.target as HTMLInputElement).setCustomValidity('')}
            />
          </fieldset>
          <p className="w-full flex flex-row justify-end cursor-pointer">Forgot password?</p>
          <input
            className="bg-[#633CFF] text-white w-full flex flex-col justify-center items-center font-medium py-3 rounded-md hover:bg-opacity-80 cursor-pointer transition-all duration-300"
            type="submit"
            value="Login"
          />
          <fieldset className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4">
            <div className="h-[1px] w-full bg-black flex self-center"></div>
            <h5 className="text-black w-full text-center col-span-2">OR CONTINUE WITH</h5>
            <div className="h-[1px] w-full bg-black flex self-center"></div>
          </fieldset>
          <OAuthButtons />
          <p className="text-[#737373] text-center">
            Don't have an account?{' '}
            <Link className="text-[#633CFF]" href="/register">
              Create one
            </Link>
          </p>
        </fieldset>
      </fieldset>
    </form>
  );
};

export default LoginForm;
