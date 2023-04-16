import { useRouter } from "next/router";
import React, { FC } from "react";
import { Header } from "./Header";
import s from "./Layout.module.scss";
import { Sidebar } from "./Sidebar";
import { Drawer } from "./Drawer";
import { Main } from "./Main";
import { Footer } from "./Footer";

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
