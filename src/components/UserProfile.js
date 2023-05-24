import React, { useContext } from 'react';
import UserContext from '../contexts/UserContext';

function UserProfile() {
  const { users, setUsers } = useContext(UserContext);

  return (
    <>
      <div>User is: </div>

      {users.isOnline}
      <button onClick={() => setUsers(users)}>
        click to change user status
      </button>
    </>
  );
}

export default UserProfile;
