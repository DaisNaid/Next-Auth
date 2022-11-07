import useGetUserbyID from '../../hooks/useGetUserbyID';
import Button from 'react-bootstrap/Button';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

function LoggedInMessage({ id }) {
  const router = useRouter();
  const { data: user, isLoading, isStale } = useGetUserbyID(id);
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    const getUserInfo = localStorage.getItem('userInfo');
    setUserInfo(JSON.parse(getUserInfo));
  }, []);

  const logoutHandler = async (e) => {
    e.preventDefault();
    localStorage.removeItem('userInfo');
    router.push('/auth/login');
  };

  console.log(userInfo);

  return (
    <>
      {isLoading ? <h2>Loading...</h2> : <></>}
      {userInfo ? (
        isStale ? (
          <section className="flex flex-col gap-12">
            <h2 className="text-3xl shadow-lg">Let&apos;s get started!</h2>
            <div className="text-center mb-6">
              <Button
                variant="primary"
                type="submit"
                onClick={logoutHandler}
                className="bg-zinc text-black font-semibold text-lg rounded-md py-1 px-6"
              >
                Logout
              </Button>
            </div>
          </section>
        ) : (
          <h1 className="text-3xl shadow-lg">
            Welcome back,{' '}
            <span className="text-green-500">{userInfo.username} </span>!
          </h1>
        )
      ) : (
        <Button
          variant="primary"
          type="submit"
          onClick={() => router.push('/auth/login')}
          className="bg-zinc text-black font-semibold text-lg rounded-md py-1 px-6"
        >
          Back to Login
        </Button>
      )}
    </>
  );
}

export default LoggedInMessage;
