import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';
import useAxiosPost from '../../hooks/useAxiosPost';

function SignUpForm() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [re_password, setRe_Password] = useState('');
  const payload = { email, username, password };
  const signup_API_URL = '/api/signup';
  const router = useRouter();
  const { data, mutate, isSuccess } = useAxiosPost(signup_API_URL, payload);
  const isUnequalPassword = password !== re_password;

  const signupHandler = async (e) => {
    e.preventDefault();
    mutate();
    alert('User created successfully');
  };

  if (isSuccess) {
    const newUserInfo = data?.newUserInfo;
    if (typeof window !== 'undefined') {
      localStorage.setItem('userInfo', JSON.stringify(newUserInfo));
    }
    const { id } = newUserInfo;
    router.push(`/auth/loggedIn/${id}`);
  }

  return (
    <Form className="rounded p-4 bg-darkanime m-16 justify-center items-center justify-items-center">
      <Form.Group className="flex flex-1 gap-4 mb-6 ml-0" controlId="email">
        <Form.Label className="text-zinc">Email Address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter Email Address"
          required
          className="text-center"
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="flex flex-1 gap-4 mb-6 ml-0" controlId="username">
        <Form.Label className="text-zinc">Username</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Username"
          required
          className="text-center"
          onChange={(e) => setUsername(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="flex flex-1 gap-4 mb-6 ml-0" controlId="password">
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
      {isUnequalPassword && (
        <div className="text-red-500 mb-6">Passwords are different!</div>
      )}
      <Form.Group
        className="flex flex-1 gap-4 mb-6 ml-0"
        controlId="re_password"
      >
        <Form.Label className="text-zinc">Re-Enter Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Re-Enter Password"
          required
          className="text-center"
          onChange={(e) => setRe_Password(e.target.value)}
          maxLength="4"
        />
      </Form.Group>
      <div className="flex flex-col flex-1 gap-6">
        <Button
          variant="primary"
          type="submit"
          onClick={signupHandler}
          className="bg-zinc text-black font-semibold text-lg rounded-md py-1 px-6"
          disabled={password !== '' && isUnequalPassword}
        >
          Sign Up
        </Button>
        <span className="text-center text-sm">
          Have an account? <Link href="/auth/login">Log In</Link>
        </span>
      </div>
    </Form>
  );
}

export default SignUpForm;
