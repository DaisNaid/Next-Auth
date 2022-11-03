import Head from 'next/head';
import SignUpForm from '../../../components/SignUpForm';

function SignUp() {
  return (
    <div className="px-8">
      <Head>
        <title>SignUp</title>
      </Head>

      <main className="min-h-full py-16 flex flex-1 flex-col justify-center items-center">
        <h1 className="text-zinc font-semibold text-center text-3xl pt-8">
          Sign Up
        </h1>
        <SignUpForm />
      </main>

      <footer className="flex flex-1 py-8 border-solid border-t-2 border-[#eaeaea] justify-center items-center">
        <a href="#">
          Powered by <span className="pl-1"> Ayo</span>
        </a>
      </footer>
    </div>
  );
}

export default SignUp;
