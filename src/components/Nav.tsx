"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react"; 
import { signOut } from "next-auth/react";

const Nav = () => {

  const [toggleDropdown, setToggleDropdown] = useState(false)

  return (
    <div>
      <nav className="flex-between w-full mb-16 pt-3">
        <div className="flex items-center">
          <Image
            src="/assets/images/logo.png"
            alt="Page Pocket"
            width={30}
            height={30}
          />
          <p className="ml-2">Page Pocket</p>
          <Image
            src="/assets/images/profile.png"
            alt="Page Pocket"
            width={30}
            height={30}
            className="profile-img"
            onClick={() => setToggleDropdown((prev) => !prev)}  
          />
          
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
