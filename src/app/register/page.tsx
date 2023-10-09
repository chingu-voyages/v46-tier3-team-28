import RegistrationForm from "@/components/RegistrationForm";
// import BottomNav from "@/components/BottomNav";
import React from "react";

const RegistrationPage = () => {
  return (
    <main className="w-full h-fit flex flex-col items-center justify-start overflow-y-auto bg-[#03022D]">
      <RegistrationForm />
      {/* <BottomNav /> */}
    </main>
  );
};

export default RegistrationPage;

