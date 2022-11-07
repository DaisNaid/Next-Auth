import { useMutation } from 'react-query';
import axios from 'axios';
import getError from '../utils/getError';

function useAxiosPost(dataURL, payload) {
  return useMutation({
    mutationKey: ['updatedData'],
    mutationFn: async () => {
      try {
        const { data } = await axios.post(dataURL, { payload });
        return data;
      } catch (err) {
        const statusError = getError(err);
        return statusError;
      }
    },
  });
}

export default useAxiosPost;
