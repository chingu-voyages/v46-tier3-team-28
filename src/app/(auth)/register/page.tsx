import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbar/Navbar';
import RegistrationForm from '@/components/RegistrationForm/RegistrationForm';

import React from 'react';

const RegistrationPage = () => {
  return (
    <>
      <Navbar />
      <main className="w-full h-fit min-h-screen flex items-center justify-start overflow-y-auto flex-col py-10 bg-[#FAFAFA]">
        <RegistrationForm />
      </main>
      <Footer />
    </>
  );
};

export default RegistrationPage;
