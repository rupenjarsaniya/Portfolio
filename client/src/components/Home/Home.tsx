import React, { useCallback, useEffect, useMemo, useState } from "react";
import s from "./Home.module.scss";
import Link from "next/link";
import axios from "axios";
import Image from "next/image";
import upworkIcon from "@/asserts/social/upwork.png";

function getGreet() {
  let greet = "goodEvening";

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

  useEffect(() => {
    const interval = setInterval(() => {
      setGreet(getGreet());
    }, 10000);

    return () => clearInterval(interval);
  }, []);

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

  return (
    <div className={s.wrap}>
      <div className={s.head}>Click On The Moon 😉</div>
      <div className={s.body}>
        <div className={s.contentLeft}>
          <p className={s.greeting}>Hello, {greet} 👋</p>
          <h1 className={s.title}>
            Rupenkumar
            <br />
            Jarsaniya
          </h1>
          <div className={s.subTitleWrapper}>
            <div className={`${s.subTitleBorder} ${s.borderFirst}`}></div>
            <div className={`${s.subTitleBorder} ${s.borderSecond}`}></div>
            <div className={s.subTitle}>
              Software Engineer / <br /> Blockchain Developer.
            </div>
          </div>
          <div className={s.buttonWrapper}>
            <button className={s.button} onClick={downloadResume}>
              Download My Resume
            </button>
            <Link
              role="button"
              className={`${s.hireButton} ${s.button}`}
              href="https://www.upwork.com/freelancers/rupenkumarj"
              target="_blank"
            >
              <div className={s.imageWrapper}>
                <Image src={upworkIcon} alt="upworkIcon" quality={100} />
              </div>
              Hire me on Upwork!
            </Link>
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
        </div>
      </div>
    </div>
  );
};
