'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { signOut } from 'next-auth/react';

const Nav = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false);

  return (
    <div>
      <nav className="flex flex-row justify-between px-10 pt-10">
        <div className="flex gap-4">
          <Image src="/assets/images/logo.png" alt="Page Pocket" width={40} height={40} />
          <p className="flex flex-row items-center">Page Pocket</p>
        </div>
        <div className="">
          <Image
            src="/assets/images/profile.png"
            alt="Page Pocket"
            width={35}
            height={35}
            onClick={() => setToggleDropdown((prev) => !prev)}
          />
        </div>
      </nav>

      {toggleDropdown && (
        <div className="flex flex-row-reverse">
          <Link href="/profile"
            className="justify-content"
            onClick={() => setToggleDropdown(false)}>
            My Profile
          </Link>
          <button
            type="button"
            onClick={() => {
              setToggleDropdown(false);
              signOut();
            }}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Nav;
