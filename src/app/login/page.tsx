import React from "react";
import BottomNav from "@/components/BottomNav";
import LoginForm from "@/components/LoginForm";

const LoginPage = () => {
  return (
    <main className="w-full h-fit min-h-screen flex items-center justify-end overflow-y-auto flex-col bg-[#03022D]">
      <LoginForm />
      <BottomNav />
    </main>
  );
};

export default LoginPage;
