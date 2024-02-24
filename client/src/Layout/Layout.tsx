import { useRouter } from "next/router";
import React, { FC, useContext, useEffect } from "react";
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
import { AppContext } from "@/context/AppContext";

const Layout: FC<any> = ({ children }) => {
  const Router = useRouter();
  const dispatch = useDispatch();
  const { data } = useSelector((store: AppState) => store.portflio);
  const { filled, setIsModalOpen } = useContext(AppContext);

  useEffect(() => {
    dispatch(
      setCurrentTab({
        image: Angular,
        title: "me.ts",
      })
    );
    dispatch(setCurrentFile("me.ts"));
  }, [dispatch]);

  useEffect(() => {
    const fetchData = async () => {
      const query = `*[_type == 'portfolio']`;
      const sanityResponse = await client.fetch(query);
      dispatch(setData(sanityResponse[0]));
    };

    if (!data) {
      fetchData();
    }
  }, [data, dispatch]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!filled) {
        setIsModalOpen(true);
      }
    }, 10000);

    return () => clearTimeout(timeout);
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
