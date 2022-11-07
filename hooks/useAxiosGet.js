import axios from 'axios';
import { useQuery } from 'react-query';

function useAxiosGet(dataURL) {
  return useQuery({
    queryKey: ['retrievedData'],
    queryFn: async () => {
      const { data } = await axios.get(dataURL);
      return data;
    },
  });
}

export default useAxiosGet;
