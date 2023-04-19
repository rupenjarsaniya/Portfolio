import { useRouter } from "next/router";
import React, { FC } from "react";
import s from "./Layout.module.scss";
import { Header } from "./inside/Header";
import { Sidebar } from "./inside/Sidebar";
import { Drawer } from "./inside/Drawer";
import { Main } from "./inside/Main";
import { Footer } from "./inside/Footer";

const Layout: FC<any> = ({ children }) => {
  const Router = useRouter();

  return (
    <>
      {Router.pathname === "/" ? (
        <>{children}</>
      ) : (
        <div className={s.wrap}>
          <Header />
          <div className={s.body}>
            <Sidebar />
            <Drawer />
            <Main />
          </div>
          <Footer />
        </div>
      )}
    </>
  );
};

export default Layout;
