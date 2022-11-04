import axios from 'axios';
import { useEffect, useState } from 'react';

function LoggedInMessage() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const getUser = async () => {
      const { data } = await axios.get(`/api/login/1`);
      setUser(data);
    };
    getUser();
  });

  return (
    <>
      <h1>Welcome back, {user.username}!</h1>
    </>
  );
}

export default LoggedInMessage;
