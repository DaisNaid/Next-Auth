import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="px-8">
      <Head>
        <title>Create Next App</title>
      </Head>

      <main className="min-h-full py-16 flex flex-1 flex-col justify-center items-center gap-12">
        <h1 className="text-red-500 text-center text-3xl pt-8">Welcome</h1>
        <Link href="/auth/login">Proceed</Link>
      </main>

      <footer className="flex flex-1 py-8 border-solid border-t-2 border-[#eaeaea] justify-center items-center">
        <a href="#">
          Powered by <span className="pl-1"> Ayo</span>
        </a>
      </footer>
    </div>
  );
}
