import React, { useEffect, useState } from "react";
import s from "./Home.module.scss";
import Link from "next/link";

export const Home = () => {
  const [show, setShow] = useState(true);

  const listenToScrol = () => {
    let heightToHideFrom = 10;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHideFrom) {
      show && setShow(false);
    } else {
      setShow(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScrol);
    return () => window.removeEventListener("scroll", listenToScrol);
  }, []);

  return (
    <div className={s.wrap}>
      <div className={s.head}>Click on The Moon 😉</div>
      <div className={s.body}>
        <div className={s.contentLeft}>
          <p className={s.greeting}>Good Morning, I am Rupen 👋</p>
          <h1 className={s.title}>
            Rupenkumar
            <br />
            Jarsaniya
          </h1>
          <div className={s.subTitleWrapper}>
            <div className={`${s.subTitleBorder} ${s.borderFirst}`}></div>
            <div className={`${s.subTitleBorder} ${s.borderSecond}`}></div>
            <div className={s.subTitle}>
              Blockchain Developer / <br /> Full Stack Developer.
            </div>
          </div>
        </div>
        <div className={s.contentRight}>
          <Link href="/about">
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
        </div>
      </div>
    </div>
  );
};
