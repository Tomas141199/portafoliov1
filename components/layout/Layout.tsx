import { FC } from "react";
import Head from "next/head";
import Header from "./Header/Header";
import Link from "next/link";

interface Props {
  children: React.ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Head>
        <title>My Portfolio</title>
      </Head>

      <Header />
      <main className="content-page relative">{children}</main>
      {/*
        Privacy Policy
      */}
      <footer className="bg-gray-900 text-white text-center p-4">
        <p>&copy; 2021 My Portfolio</p>
        <Link
          href="/privacy-policy"
          className="text-blue-500 hover:underline hover:text-green-700"
        >Privacy Policy</Link>
      </footer>


    </>
  );
};

export default Layout;
