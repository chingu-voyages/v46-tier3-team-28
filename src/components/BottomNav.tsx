import React from "react";
import Link from "next/link";

const BottomNav = () => {
  return (
    <nav className="bg-[#711212] w-full h-fit py-10 pl-[10%] flex flex-row gap-5">
      <li className="list-none text-gray-100 hover:text-gray-50">
        {" "}
        <Link href="login">Login</Link>
      </li>
      <li className="list-none text-gray-400 hover:text-gray-50">
        {" "}
        <Link href="register">Sign Up</Link>
      </li>
    </nav>
  );
};

export default BottomNav;
