'use client';

import React, { useState } from 'react';
import { useLoginForm } from '@/hooks/useLoginForm';
import { InputField } from '@/components/InputField/InputField';
import OAuthButtons from '@/components/OAuthButtons/OAuthButtons';
import { Logo } from '@/components/InputField/LogoSVG';
import { LuLoader2 } from 'react-icons/lu';
import { Button } from '../ui/button';
import Link from 'next/link';

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const { email, setEmail, password, setPassword, validateLogin } = useLoginForm();

  return (
    <form onSubmit={validateLogin} className="h-fit w-fit bg-transparent dark:bg-black">
      <div className="w-full h-fit flex flex-col justify-center items-center pb-10">
        <Logo /> {/* SVG Component */}
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
        <InputField
          label="Email"
          type="email"
          name="email"
          placeholder="sample@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputField
          label="Password"
          type="password"
          name="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <p className="w-full flex flex-row justify-end cursor-pointer">Forgot password?</p>
        <Button className="bg-[#633CFF] hover:bg-[#633CFF]-80 text-base h-12" type="submit" disabled={loading}>
          {loading && <LuLoader2 className="animate-spin mr-2" />}
          Login
        </Button>
        <fieldset className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 place-items-center">
          <div className="h-[1px] w-2/5 md:w-full lg:w-full xl:w-full bg-[#D9D9D9] flex self-center"></div>
          <h5 className="text-[#737373] w-full text-center col-span-2">OR CONTINUE WITH</h5>
          <div className="h-[1px] w-1/5 md:w-full lg:w-full xl:w-full bg-[#D9D9D9] flex self-center"></div>
        </fieldset>
        <OAuthButtons loading={loading} setLoading={setLoading} />
        <p className="text-[#737373] text-center">
          Don't have an account?{' '}
          <Link className="text-[#633CFF]" href="/register">
            Create one
          </Link>
        </p>
      </fieldset>
    </form>
  );
};

export default LoginForm;
