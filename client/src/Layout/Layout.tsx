import { useRouter } from "next/router";
import React, { FC } from "react";
import s from "./Layout.module.scss";
import { Header } from "./inside/Header";
import { Sidebar } from "./inside/Sidebar";
import { Drawer } from "./inside/Drawer";
import { Main } from "./inside/Main";
import { Footer } from "./inside/Footer";
import Head from "next/head";

const Layout: FC<any> = ({ children }) => {
  const Router = useRouter();

  return (
    <>
      {Router.pathname === "/dev" ? (
        <div className={s.wrap}>
          <Head>
            <title>Portfolio - Visual Studio code</title>
          </Head>
          <Header />
          <div className={s.body}>
            <Sidebar />
            <Drawer />
            <Main />
          </div>
          <Footer />
        </div>
      ) : (
        <>{children}</>
      )}
    </>
  );
};

export default Layout;
