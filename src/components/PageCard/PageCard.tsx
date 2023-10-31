// TODO: Fix type-error
// @ts-ignore
const PageCard = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-10 bg-gray-800 bg-opacity-60">
      <div className="bg-white p-6 rounded-lg">
        <h2 className="text-xl font-bold">Title</h2>
        <input type="text" className="w-full mb-4" />
        <h2 className="text-xl font-bold">Description</h2>
        <textarea className="w-full mb-4" />
        <h2 className="text-xl font-bold">Notes</h2>
        <textarea className="w-full mb-4" />
        <h2 className="text-xl font-bold">Link</h2>
        <input type="text" className="w-full mb-4" />
        <h2 className="text-xl font-bold">Upload</h2>
        <input type="file" className="w-full mb-4" />

        <div className="text-right">
          <button
            className="text-blue-500 hover:underline"
            onClick={onClose}
          >
            Cancel
          </button>
          <button className="bg-blue-500 text-white ml-2">Create Post</button>
        </div>
      </div>
    </div>
  );
};

export default PageCard;
