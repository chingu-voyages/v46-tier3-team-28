import React from 'react';

import LoginForm from '@/components/LoginForm/LoginForm';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';

const LoginPage = () => {
  return (
    <>
      <Navbar />
      <main className="w-full h-fit min-h-screen flex items-center justify-start overflow-y-auto flex-col py-10 bg-[#FAFAFA]">
        <LoginForm />
      </main>
      <Footer />
    </>
  );
};

export default LoginPage;
