import { FC, useMemo } from "react";
import s from "./Footer.module.scss";
import OpenWindow from "@/asserts/remote.svg";
import Github from "@/asserts/technology/github.svg";
import Error from "@/asserts/error.svg";
import Warning from "@/asserts/warning.svg";
import Bell from "@/asserts/bell.svg";
import Feedback from "@/asserts/feedback.svg";
import Check from "@/asserts/check.svg";
import Image from "next/image";
import classNames from "classnames";
import { AppState } from "@/store";
import { useSelector } from "react-redux";

export const Footer: FC = () => {
  const {
    data: { socialLinks },
    currentFile,
  } = useSelector((store: AppState) => store.portflio);

  const languageMode = useMemo(() => {
    const file = currentFile.split(".")[1];

    if (file === "jsx") {
      return "Javascript JSX";
    } else if (file === "js") {
      return "Javascript";
    } else if (file === "ts") {
      return "Typescript";
    } else if (file === "tsx") {
      return "Typescript TSX";
    } else if (file === "sol") {
      return "Solidity";
    } else if (file === "md") {
      return "Markdown";
    } else if (file === "java") {
      return "Java";
    }
    return "";
  }, [currentFile]);

  return (
    <div className={s.wrap}>
      <div className={s.left}>
        <div className={classNames(s.imageWrapper, s.imageOpenWindow)}>
          <Image src={OpenWindow} alt="OpenWindow" />
        </div>
        <div className={s.wrapper}>
          <div className={s.imageWrapper}>
            <Image src={Github} alt="Github" />
          </div>
          <div className={s.desc}>
            <a href={socialLinks[1].link ?? "https://github.com"} target="_">
              master*
            </a>
          </div>
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
        <div className={s.wrapper}>{languageMode}</div>
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
};
