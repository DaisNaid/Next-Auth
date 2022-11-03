import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Link from 'next/link';

function SignUpForm() {
  return (
    <Form className="rounded p-4 bg-darkanime m-16 justify-center items-center justify-items-center">
      <Form.Group className="flex flex-1 gap-4 mb-6 ml-0">
        <Form.Label className="text-zinc">Email Address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter Email Address"
          required
          className="text-center"
        />
      </Form.Group>
      <Form.Group className="flex flex-1 gap-4 mb-6 ml-0">
        <Form.Label className="text-zinc">Username</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Username"
          required
          className="text-center"
        />
      </Form.Group>
      <Form.Group className="flex flex-1 gap-4 mb-6 ml-0">
        <Form.Label className="text-zinc">Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Enter Password"
          required
          className="text-center"
        />
      </Form.Group>
      <Form.Group className="flex flex-1 gap-4 mb-6 ml-0">
        <Form.Label className="text-zinc">Re-Enter Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Enter Password"
          required
          className="text-center"
        />
      </Form.Group>
      <div className="text-center mb-6">
        <Button
          variant="primary"
          className="bg-zinc text-black font-semibold text-lg rounded-md py-1 px-6"
        >
          Sign Up
        </Button>
      </div>
      <span className="text-center p-20 text-sm ml-4">
        Have an account? <Link href="/auth/login">Log In</Link>
      </span>
    </Form>
  );
}

export default SignUpForm;
