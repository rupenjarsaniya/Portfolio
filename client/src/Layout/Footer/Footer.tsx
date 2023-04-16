import { FC } from "react";
import s from "./Footer.module.scss";
import OpenWindow from "@/asserts/remote.svg";
import Github from "@/asserts/github.svg";
import Error from "@/asserts/error.svg";
import Warning from "@/asserts/warning.svg";
import Bell from "@/asserts/bell.svg";
import Feedback from "@/asserts/feedback.svg";
import Check from "@/asserts/check.svg";
import Image from "next/image";
import classNames from "classnames";

export const Footer: FC = () => (
  <div className={s.wrap}>
    <div className={s.left}>
      <div className={classNames(s.imageWrapper, s.imageOpenWindow)}>
        <Image src={OpenWindow} alt="OpenWindow" />
      </div>
      <div className={s.wrapper}>
        <div className={s.imageWrapper}>
          <Image src={Github} alt="Github" />
        </div>
        <div className={s.desc}>master*</div>
      </div>
      <div className={s.wrapper}>
        <Image src={Error} alt="Error" />
        <div className={s.desc}>0</div>
        <Image src={Warning} alt="Warning" />
        <div className={s.desc}>0</div>
      </div>
    </div>
    <div className={s.right}>
      <div className={s.wrapper}>UTF-8</div>
      <div className={s.wrapper}>LF</div>
      <div className={s.wrapper}>TypeScript JSX</div>
      <div className={s.wrapper}>
        <div className={s.imageWrapper}>
          <Image src={Check} alt="Check" />
        </div>
        <div className={s.desc}>Prettier</div>
      </div>
      <div className={s.imageWrapper}>
        <Image src={Bell} alt="Bell" />
      </div>
      <div className={s.imageWrapper}>
        <Image src={Feedback} alt="Feedback" />
      </div>
    </div>
  </div>
);
