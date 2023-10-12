"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react"; 
import { signOut } from "next-auth/react";

const Nav = () => {

  const [toggleDropdown, setToggleDropdown] = useState(false)

  return (
    <div>
      <nav className="relative container mx-auto pt-6">
        <div className="flex items-center">
          <Image
            src="/assets/images/logo.png"
            alt="Page Pocket"
            width={40}
            height={40}
          />
          <p className="ml-2">Page Pocket</p>
          <div className="ml-auto">
          <Image
            src="/assets/images/profile.png"
            alt="Page Pocket"
            width={35}
            height={35}
            onClick={() => setToggleDropdown((prev) => !prev)}  
            />
          </div>
          
          {toggleDropdown && (
              <div className='dropdown'>
                <Link
                  href='/profile'
                  className='dropdown_link'
                  onClick={() => setToggleDropdown(false)}
                >
                  My Profile
                </Link>
                <Link
                  href='/create-prompt'
                  className='dropdown_link'
                  onClick={() => setToggleDropdown(false)}
                >
                </Link>
                <button
                  type='button'
                  onClick={() => {
                    setToggleDropdown(false);
                    signOut();
                  }}
                  className='mt-5 w-full black_btn'
                >
                  Sign Out
                </button>
              </div>
            )}
        </div>
      </nav>
    </div>
  );
}

export default Nav;
