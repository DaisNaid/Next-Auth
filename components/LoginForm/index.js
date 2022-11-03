import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

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
      <div className="text-center">
        <Button
          variant="primary"
          className="bg-zinc text-black font-semibold text-lg rounded-md py-1 px-6"
        >
          Login
        </Button>
      </div>
    </Form>
  );
}

export default LoginForm;
