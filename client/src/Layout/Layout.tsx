import { useRouter } from "next/router";
import React, { FC, useEffect } from "react";
import s from "./Layout.module.scss";
import { Header } from "./inside/Header";
import { Sidebar } from "./inside/Sidebar";
import { Drawer } from "./inside/Drawer";
import { Main } from "./inside/Main";
import { Footer } from "./inside/Footer";
import Head from "next/head";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentFile, setCurrentTab, setData } from "@/store/portfolioSlice";
import Angular from "@/asserts/technology/angular.svg";
import { AppState } from "@/store";
import { client } from "@/utils/sanity";

const Layout: FC<any> = ({ children }) => {
  const Router = useRouter();
  const dispatch = useDispatch();
  const { data } = useSelector((store: AppState) => store.portflio);

  useEffect(() => {
    dispatch(
      setCurrentTab({
        image: Angular,
        title: "me.ts",
      })
    );
    dispatch(setCurrentFile("me.ts"));
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const query = `*[_type == 'portfolio']`;
      const sanityResponse = await client.fetch(query);
      dispatch(setData(sanityResponse[0]));
    };

    if (!data) {
      fetchData();
    }
  }, []);

  if (!data) return <h1>Loading...</h1>;

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
