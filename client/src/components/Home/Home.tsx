import React, { useCallback, useEffect, useMemo, useState } from "react";
import s from "./Home.module.scss";
import Link from "next/link";
import axios from "axios";

export const Home = () => {
  const [show, setShow] = useState(true);
  const [greeting, setGreeting] = useState("");

  const getGreeting = useCallback(() => {
    let currentHour = new Date().getUTCHours();

    if (currentHour >= 3 && currentHour < 12) return "Good Morning!";
    else if (currentHour >= 12 && currentHour < 16) return "Good Afternoon!";
    else if (currentHour >= 16 && currentHour < 21) return "Good Evening!";
    else return "Good Night!";
  }, []);

  const listenToScroll = useCallback(() => {
    let heightToHideFrom = 10;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHideFrom) {
      show && setShow(false);
    } else {
      setShow(true);
    }
  }, [show]);

  const downloadResume = useCallback(() => {
    axios
      .get("./My_Resume.pdf", {
        responseType: "blob",
      })
      .then((res) => {
        const url = window.URL.createObjectURL(new Blob([res.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "My_Resume.pdf");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      })
      .catch((error: Error) => console.log("Error downloading file: ", error));
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, [listenToScroll]);

  useEffect(() => {
    setGreeting(getGreeting);
    const interval = window.setInterval(() => setGreeting(getGreeting), 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={s.wrap}>
      <div className={s.head}>Click On The Moon 😉</div>
      <div className={s.body}>
        <div className={s.contentLeft}>
          <p className={s.greeting}>Hello, {greeting} 👋</p>
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
          <button className={s.downloadButton} onClick={downloadResume}>
            Download My Resume
          </button>
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
        </div>
      </div>
    </div>
  );
};
