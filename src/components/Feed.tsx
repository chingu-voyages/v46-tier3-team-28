'use client';

import { useState, useEffect } from 'react';
import PageCard from './PageCard';

const Feed = () => {
  const [inputUrl, setInputUrl] = useState('');

  return (
    <section className="relative container mt-48 ">
      <form className="">
        <input
          type="text"
          placeholder="Enter URL link here: https://www.example.com"
          value={inputUrl}
          className="w-6/12"
        />
        <button className="bg-[#633CFF] text-white flex flex-col justify-center items-center font-medium py-3 px-3 mt-6 rounded-md hover:bg-opacity-80 cursor-pointer transition-all duration-300">
          Create Post
        </button>
      </form>
    </section>
  );
};

export default Feed;
