import Head from 'next/head';
import LoggedInMessage from '../../../components/LoggedInMessage';

function LoggedIn() {
  return (
    <div className="px-8">
      <Head>
        <title>Login</title>
      </Head>

      <main className="min-h-full py-16 flex flex-1 flex-col justify-center items-center">
        <LoggedInMessage />
      </main>

      <footer className="flex flex-1 py-8 border-solid border-t-2 border-[#eaeaea] justify-center items-center">
        <a href="#">
          Powered by <span className="pl-1"> Ayo</span>
        </a>
      </footer>
    </div>
  );
}

export default LoggedIn;
