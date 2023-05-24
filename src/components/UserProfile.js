import React, { useContext } from 'react';
import UserContext from '../contexts/UserContext';

function UserProfile() {
  const { isOnline, setIsOnline } = useContext(UserContext);

  return (
    <>
      <div>User is: {isOnline ? 'Online' : 'Offline'}</div>
      <button onClick={() => setIsOnline ((previous) => (!previous))}>Click to change user status</button>
    </>
  );
}

export default UserProfile;
