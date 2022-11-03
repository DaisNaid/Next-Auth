import Head from 'next/head';
import LoginForm from '../../../components/LoginForm';

function Login() {
  return (
    <div className="px-8">
      <Head>
        <title>Login</title>
      </Head>

      <main className="min-h-full py-16 flex flex-1 flex-col justify-center items-center">
        <h1 className="text-zinc font-semibold text-center text-3xl pt-8">
          Log In
        </h1>
        <LoginForm />
      </main>

      <footer className="flex flex-1 py-8 border-solid border-t-2 border-[#eaeaea] justify-center items-center">
        <a href="#">
          Powered by <span className="pl-1"> Ayo</span>
        </a>
      </footer>
    </div>
  );
}

export default Login;
