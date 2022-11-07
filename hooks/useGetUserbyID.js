import { useQuery } from 'react-query';
import users from '../data/users';

function useGetUserbyID(id) {
  return useQuery({
    queryKey: ['user'],
    queryFn: () => {
      const data = users.find((user) => user.id === parseInt(id));
      return data;
    },
    staleTime: 2000,
  });
}

export default useGetUserbyID;
