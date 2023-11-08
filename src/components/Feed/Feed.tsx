import { useState } from 'react';
import PageCard from '@/components/PageCard/PageCard';
import { Button} from "@/components/button/Button";

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
        <Button text="Create Post" onClick={handleCreatePost} />
      </form>

      {isPopupOpen && (
        <PageCard onClose={closePopup} />
      )}
    </section>
  );
};

export default Feed;
