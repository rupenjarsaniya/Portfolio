import { useRouter } from "next/router";
import React, { FC, useEffect } from "react";
import s from "./Layout.module.scss";
import { Header } from "./inside/Header";
import { Sidebar } from "./inside/Sidebar";
import { Drawer } from "./inside/Drawer";
import { Main } from "./inside/Main";
import { Footer } from "./inside/Footer";
import Head from "next/head";
import { useDispatch } from "react-redux";
import { setCurrentFile, setCurrentTab } from "@/store/portfolioSlice";
import Angular from "@/asserts/technology/angular.svg";

const Layout: FC<any> = ({ children }) => {
  const Router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      setCurrentTab({
        image: Angular,
        title: "me.ts",
      })
    );
    dispatch(setCurrentFile("me.ts"));
  }, []);

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
