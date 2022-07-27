import { FC } from "react";
import Head from "next/head";
import Header from "./Header/Header";

interface Props {
  children: React.ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Head>
        <title>My Portafolio</title>
      </Head>

      <Header />
      {children}
    </>
  );
};

export default Layout;
