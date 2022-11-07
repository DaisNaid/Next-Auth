import Button from 'react-bootstrap/Button';
import useAxiosGet from '../../hooks/useAxiosGet';
import useGetUserInfo from '../../hooks/useGetUserInfo';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

function ListUsers() {
  const url = 'https://jsonplaceholder.typicode.com/users';
  const { data } = useAxiosGet(url);
  const router = useRouter();

  const { userInfo } = useGetUserInfo();

  return (
    <>
      <h1 className="text-center py-12 text-3xl">List of Users: </h1>
      <div className="text-center">
        {userInfo ? (
          <div>
            {data?.map((user) => (
              <li key={user.id} className="list-none">
                {user.username} || {user.email}
              </li>
            ))}
          </div>
        ) : (
          <div className="flex flex-col flex-1 items-center gap-8">
            <span>Please Login</span>
            <Button
              variant="primary"
              type="submit"
              onClick={() => router.push('/auth/login')}
              className="bg-zinc text-black font-semibold text-lg rounded-md p-1"
            >
              Back to Login
            </Button>
          </div>
        )}
      </div>
    </>
  );
}

export default ListUsers;
