import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ToastContainer } from 'react-bootstrap';
import { useState } from 'react';
import useAxiosPost from '../../hooks/useAxiosPost';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const payload = { username, password };
  const login_API_URL = '/api/login';
  const router = useRouter();
  const { data, mutate, isSuccess } = useAxiosPost(login_API_URL, payload);

  const loginHandler = async (e) => {
    e.preventDefault();
    mutate();
  };

  if (isSuccess) {
    if (typeof data === 'object') {
      typeof window !== 'undefined' &&
        localStorage.setItem('userInfo', JSON.stringify(data));
      const { id } = data;
      router.push(`/auth/loggedIn/${id}`);
    } else {
      alert(data);
      window.location.reload();
    }
  }

  return (
    <Form className="rounded p-4 bg-darkanime m-16">
      <ToastContainer position="top-center" limit={1} />
      <Form.Group className="flex flex-1 gap-4 mb-6" controlId="username">
        <Form.Label className="text-zinc">Username</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Username"
          required
          className="text-center"
          onChange={(e) => setUsername(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="flex flex-1 gap-4 mb-6 pl-1" controlId="password">
        <Form.Label className="text-zinc">Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Enter Password"
          required
          className="text-center"
          onChange={(e) => setPassword(e.target.value)}
          maxLength="4"
        />
      </Form.Group>
      <div className="text-center mb-6">
        <Button
          variant="primary"
          type="submit"
          onClick={loginHandler}
          className="bg-zinc text-black font-semibold text-lg rounded-md py-1 px-6"
        >
          Login
        </Button>
      </div>
      <span className="text-center text-sm p-4 ml-4">
        No login details? <Link href="/auth/signup">Create Account</Link>
      </span>
    </Form>
  );
}

export default LoginForm;
