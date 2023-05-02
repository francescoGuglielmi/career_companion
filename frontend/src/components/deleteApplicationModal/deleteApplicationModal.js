import { useState } from "react";

const DeleteApplication = ({ application }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDelete = async (event) => {
    event.preventDefault();

    let response = await fetch(`/applications/${application._id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${window.localStorage.getItem("token")}`,
      },
    });
    if (response.status !== 200) {
      console.log("error deleting your application");
    } else {
      console.log("your application was deleted from the db");
      window.location.reload();
      setIsModalOpen(false);
    }
  };

  function handleClose() {
    setIsModalOpen(false);
  }

  return (
    <>
      <button
        className="bg-cream text-black font-bold py-2 px-4 rounded"
        onClick={() => setIsModalOpen(true)}
      >
        Delete
      </button>

      {isModalOpen ? (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-75">
          <div className="bg-white rounded-lg p-8 w-1/3">
            <div className="flex justify-end">
              <button
                className="text-gray-700 hover:text-gray-900 font-bold text-xl leading-none focus:outline-none"
                onClick={handleClose}
              >
                &times;
              </button>
            </div>
            <h2 className="text-2xl font-bold mb-4">Are you sure you want to delete this application?</h2>

            <div className="flex items-center justify-center">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Yes, delete it
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default DeleteApplication;
