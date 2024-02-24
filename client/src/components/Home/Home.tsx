import React, { useContext, useEffect, useState } from "react";
import s from "./Home.module.scss";
import Link from "next/link";
import axios from "axios";
import { useSelector } from "react-redux";
import { AppState } from "@/store";
import { AppContext } from "@/context/AppContext";

function getGreet() {
  let greet = "Good Evening";

  const hours = new Date().getHours();

  if (hours >= 21 || hours < 3) {
    greet = "Good Night";
  } else if (hours < 12) {
    greet = "Good Morning";
  } else if (hours < 16) {
    greet = "Good Afternoon";
  }

  return greet;
}

export const Home = () => {
  const [greet, setGreet] = useState(getGreet());

  const { data } = useSelector((store: AppState) => store.portflio);
  const { downloadResume } = useContext(AppContext);

  useEffect(() => {
    const interval = setInterval(() => {
      setGreet(getGreet());
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={s.wrap}>
      <div className={s.head}>Click On The Moon 😉</div>
      <div className={s.body}>
        <div className={s.contentLeft}>
          <p className={s.greeting}>Hello, {greet} 👋</p>
          <h1 className={s.title}>
            {data.firstname}
            <br />
            {data.surname}
          </h1>
          <div className={s.subTitleWrapper}>
            <div className={`${s.subTitleBorder} ${s.borderFirst}`}></div>
            <div className={`${s.subTitleBorder} ${s.borderSecond}`}></div>
            <div className={s.subTitle}>
              {data.designations.map((item: string, index: number) => {
                return (
                  <>
                    {item}
                    {index !== data.designations.length - 1 && (
                      <>
                        &nbsp;/ <br />
                      </>
                    )}
                    {index === data.designations.length - 1 && "."}
                  </>
                );
              })}
            </div>
          </div>
          <div className={s.buttonWrapper}>
            <button className={s.button} onClick={downloadResume}>
              Download My Resume
            </button>
          </div>
        </div>
        <div className={s.contentRight}>
          <Link href="/dev">
            <div className={s.moon}>
              <div className={`${s.crater} ${s.crater1}`}></div>
              <div className={`${s.crater} ${s.crater2}`}></div>
              <div className={`${s.crater} ${s.crater3}`}></div>
              <div className={`${s.crater} ${s.crater4}`}></div>
              <div className={`${s.crater} ${s.crater5}`}></div>
              <div className={s.shadow}></div>
              <div className={`${s.eye} ${s.eyeL}`}></div>
              <div className={`${s.eye} ${s.eyeR}`}></div>
              <div className={s.mouth}></div>
              <div className={`${s.blush} ${s.blush1}`}></div>
              <div className={`${s.blush} ${s.blush2}`}></div>
            </div>
          </Link>
          <div className={s.orbit}>
            <div className={s.rocket}>
              <div className={s.window}></div>
            </div>
          </div>
          <div className={s.chandrayan}>Chandrayaan3</div>
        </div>
      </div>
    </div>
  );
};
