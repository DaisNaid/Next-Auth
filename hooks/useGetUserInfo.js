import { useEffect, useState } from 'react';

function useGetUserInfo() {
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    const getUserInfo = localStorage.getItem('userInfo');
    setUserInfo(JSON.parse(getUserInfo));
  }, []);

  return userInfo;
}

export default useGetUserInfo;
