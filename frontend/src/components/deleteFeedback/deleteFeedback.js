import { useState } from "react";

const DeleteFeedback = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFeedbackDeleteClick = async (event) => {
    event.preventDefault();

    let response = await fetch(`${window.BACKEND_API_SERVER_ADDRESS}/feedback/${props.feedback._id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${window.localStorage.getItem("token")}`,
      },
      
    });
    if (response.status !== 200) {
      console.log("error deleting your feedback");
    } else {
      console.log("your feedback was deleted from the db");
      window.location.reload();
      setIsModalOpen(false);
    }
  };

  function handleClose() {
    setIsModalOpen(false);
  }

  return (
    <>
     <button className="text-md py-1 px-3 bg-transparent text-navy inline-flex items-center justify-center text-center border border-lorange hover:border-blue rounded-xl ease-in-out duration-200" onClick={() => setIsModalOpen(true)}>
      Delete
    </button>

      {isModalOpen ? (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-75">
          <div className="bg-white rounded-lg p-5 w-3/4 md:w-1/3">
            <div className="flex justify-end">
              <button
                className="text-gray-700 hover:text-gray-900 font-bold text-xl leading-none focus:outline-none"
                onClick={handleClose}
              >
                &times;
              </button>
            </div>
            <h2 className="text-xl font-bold mb-4 text-center">
              Are you sure you want to delete this feedback?
            </h2>
            <div className="flex items-center justify-center">
              <button
                className="bg-blue text-white text-md py-2 px-4 inline-flex items-center justify-center text-center border-2 hover:border-blue hover:bg-white hover:text-navy rounded-xl ease-in-out duration-200 "
                type="submit"
                onClick={handleFeedbackDeleteClick}
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

export default DeleteFeedback;
