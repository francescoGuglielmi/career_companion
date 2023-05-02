
import { useLocation } from 'react-router-dom';

const Account = ({navigate}) => {
  const { state } = useLocation();
  const userData = state.userData;
  const token = state.token;

  return (
    <div>
      <h1>Account information</h1>
      <p>Name: {userData.firstName}</p>
      <p>Email: {userData.email}</p>
      {/* rest of the code */}
    </div>
  );
};

export default Account;