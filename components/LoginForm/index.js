import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Link from 'next/link';

function LoginForm() {
  return (
    <Form className="rounded p-4 bg-darkanime m-16">
      <Form.Group className="flex flex-1 gap-4 mb-6">
        <Form.Label className="text-zinc">Username</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Username"
          required
          className="text-center"
        />
      </Form.Group>
      <Form.Group className="flex flex-1 gap-4 mb-6 pl-1">
        <Form.Label className="text-zinc">Password</Form.Label>
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
