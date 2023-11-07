'use client';
import React from 'react'
import {Button} from "@/components/button/Button";
import Link from "next/link";

function page() {
  const handleUpdateProfile = () => {};

  return (
    <div>
      <p>Avatar</p>
      <p>Name</p>
      <p>Surname</p>

      <Link href={"/profile/settings/"}>
      <Button text="Update profile" onClick={handleUpdateProfile} />
      </Link>
    </div>
  )
}

export default page