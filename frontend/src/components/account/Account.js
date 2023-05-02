import { useLocation } from "react-router-dom";
import NavbarHP from "../navbar/navBarHP";

const Account = ({ navigate }) => {
  const { state } = useLocation();
  const userData = state.userData;
  const token = state.token;

  return (
    <>
      <NavbarHP />
      <div className="min-h-screen bg-cream font-dm-sans-regular md:pl-10 md:pr-10">
        <form>
          <input type="text" value={`${userData.firstName} ${userData.lastName}`} />
          <input type="text" value={userData.email} />
          <input type="text" value={`${userData.firstName} ${userData.lastName}`} />
        </form>
      <h1>Account information</h1>
      <p>Name: {userData.firstName} {userData.lastName}</p>
      <p>Email: {userData.email}</p>
      </div>

    </>
  );
};

export default Account;
