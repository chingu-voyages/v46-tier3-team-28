import { useState } from 'react';
import PageCard from './PageCard';

const Feed = () => {
  const [inputUrl, setInputUrl] = useState('');
  const [isPopupOpen, setPopupOpen] = useState(false);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  const handleCreatePost = () => {
    // Handle creating the post or any other logic here.
    openPopup();
  };

  return (
    <section className="relative container mt-48">
      <form className="">
        <input
          type="text"
          placeholder="Enter URL link here: https://www.example.com"
          value={inputUrl}
          className="w-6/12"
        />
        <button
          className="bg-[#633CFF] text-white flex flex-col justify-center items-center font-medium py-3 px-3 mt-6 rounded-md hover:bg-opacity-80 cursor-pointer transition-all duration-300"
          onClick={handleCreatePost}
        >
          Create Post
        </button>
      </form>

      {isPopupOpen && (
        <PageCard onClose={closePopup} />
      )}
    </section>
  );
};

export default Feed;
