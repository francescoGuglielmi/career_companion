import { useLocation } from "react-router-dom";
import NavbarHP from "../navbar/navBarHP";

const Account = ({ navigate }) => {
  const { state } = useLocation();
  const userData = state.userData;
  const token = state.token;

  const handleSubmit = async (event) => {
    event.preventDefault();

    let response = await fetch(`/users/${application._id}`, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${window.localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        applicationStatus: applicationStatus,
      }),
    });

    if (response.status !== 201) {
      console.log("error saving your updated application");
    } else {
      console.log("your updated application saved to db");
      window.location.reload();
    }

    setIsModalOpen(false);
  };

  if (token) {
    return (
      <>
        <NavbarHP />
        <div className="min-h-screen bg-cream font-dm-sans-regular md:pl-10 md:pr-10">
          <h1 className="text-lorange text-6xl font-poppins-bold">
            Account information
          </h1>
          <form>
            <h3 className="text-blue text-lg font-poppins-bold">
              Personal details
            </h3>
            <div className="mb-4">
              <input
                type="text"
                className="border border-gray-400 rounded w-96 h-10 shadow py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={userData.firstName}
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                className="border border-gray-400 rounded w-96 h-10 shadow py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={userData.lastName}
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                className="border border-gray-400 rounded w-96 h-10 shadow py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={userData.email}
              />
            </div>
          </form>
        </div>
      </>
    );
  } else {
    navigate("/signin");
  }
};

export default Account;
