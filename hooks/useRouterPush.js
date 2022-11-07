import { useRouter } from 'next/router';
import { useQuery } from 'react-query';

function useRouterPush(destination) {
  const router = useRouter();
  return useQuery({
    queryKey: ['pushUser'],
    queryFn: () => {
      router.push(destination);
    },
  });
}

export default useRouterPush;
