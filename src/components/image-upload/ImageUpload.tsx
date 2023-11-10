import React from 'react';
import './styles.css';
export const ImageUpload = () => {
  return (
    <div id="uploadFile_Loader" className="upload-zone">
      <form className="form-upload" id="uploadForm" method="post" encType="multipart/form-data">
        <div className="upload-zone_dragover">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1"
            viewBox="0 0 24 24"
            className="upload-loader__image"
          >
            <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242M12 12v9" />
            <path d="m16 16-4-4-4 4" />
          </svg>
          <p>Gimme a file</p>
          <span className="form-upload__hint" id="hint">
            Accept only images
          </span>
        </div>
        <label className="form-upload__label" htmlFor="uploadForm_file">
          <span className="form-upload__title">Or click on button</span>
          <input
            className="form-upload__input"
            id="uploadForm_File"
            type="file"
            name="file_name"
            accept="image/*"
            aria-describedby="hint"
          />
        </label>
        <div className="form-upload__container">
          <span className="form-upload__hint" id="uploadForm_Hint"></span>
        </div>
      </form>
    </div>
  );
};
