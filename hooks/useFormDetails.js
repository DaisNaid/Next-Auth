import { useState } from 'react';
import { useMutation } from 'react-query';
import { useRouter } from 'next/router';

/*async function postLoginDetails(payload) {
  const { data } = await axios.post('/api/login', { payload });
  return data;
}*/

export default function FormDetails() {
  const router = useRouter();
  const mutation = useMutation({
    mutationFn: (postLoginDetails) => {
      try {
        return axios.post('/api/login', postLoginDetails);
      } catch (err) {
        alert(getError(err));
      }
    },
  });
  return { mutation };
}
