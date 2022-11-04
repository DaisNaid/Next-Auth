import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Link from 'next/link';
import { useState } from 'react';
import getError from '../../utils/getError';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';

function SignUpForm() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [re_password, setRe_Password] = useState('');

  const router = useRouter();

  const signupHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('/api/signup', {
        email,
        username,
        password,
      });
      toast.success('User created successfully');
    } catch (err) {
      alert(getError(err));
    }
  };

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
        />
      </Form.Group>
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
        />
      </Form.Group>
      <Button
        variant="primary"
        type="submit"
        onClick={submitHandler}
        className="bg-zinc text-black font-semibold text-lg rounded-md py-1 px-6"
      >
        Sign Up
      </Button>
      <span className="text-center p-20 text-sm ml-4">
        Have an account? <Link href="/auth/login">Log In</Link>
      </span>
    </Form>
  );
}

export default SignUpForm;
