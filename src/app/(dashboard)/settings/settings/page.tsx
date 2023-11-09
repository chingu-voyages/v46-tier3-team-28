'use client';
import React, { useState } from 'react';
import { Button } from '@/components/button/Button';
import { Input } from '@/components/input/Input';
import { ImageUpload } from '@/components/image-upload/ImageUpload';

function Page() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');

  const handleUpdateProfile = () => {};

  const changeNameHandler = (value: string) => {
    setName(value);
  };

  const changeSurnameHandler = (value: string) => {
    setSurname(value);
  };

  return (
    <div>
      Profile settings
      <p>Profile Details</p>
      <p>Add your details to create a personal touch to your profile.</p>
      <ImageUpload />
      <div className={'bg-neutral-50'}>
        <div className={'flex-row'}>
          <p>First name</p>
          <Input value={name} placeholder={'Enter your name'} onChangeText={changeNameHandler} />
        </div>
        <div className={'flex-row'}>
          <p className={'w-auto'}>Surname</p>
          <Input value={surname} placeholder={'Enter your surname'} onChangeText={changeSurnameHandler} />
        </div>
      </div>
      <Button text="Save" onClick={handleUpdateProfile} />
    </div>
  );
}

export default Page;
