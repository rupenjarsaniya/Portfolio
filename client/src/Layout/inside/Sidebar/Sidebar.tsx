import { FC, useEffect, useState } from "react";
import s from "./Sidebar.module.scss";
import Github from "@/asserts/github.svg";
import Files from "@/asserts/files.png";
import Search from "@/asserts/search.png";
import Setting from "@/asserts/setting.png";
import User from "@/asserts/user.png";
import Image, { StaticImageData } from "next/image";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "@/store";
import { setSidebarTab } from "@/store/portfolioSlice";
import CorrectIcon from "@/asserts/correct.svg";
import { useTheme } from "next-themes";
import { setCurrentFile, setCurrentTab } from "@/store/portfolioSlice";
import Angular from "@/asserts/technology/angular.svg";

type Tab = "Files" | "Search" | "Github";

interface DataEntity {
  image: StaticImageData;
  alt: string;
}

const data: DataEntity[] = [
  {
    image: Files,
    alt: "Files",
  },
  // {
  //   image: Search,
  //   alt: "Search",
  // },
  // {
  //   image: Github,
  //   alt: "Github",
  // },
];

export const Sidebar: FC = () => {
  const dispatch = useDispatch();
  const { sidebarTab } = useSelector((store: AppState) => store.portflio);
  const [showBox, setShowBox] = useState(false);

  const handleSwitchTab = (e: any) => {
    if (sidebarTab === e.target.alt) {
      dispatch(setSidebarTab(""));
    } else {
      if (e.target.alt) {
        dispatch(setSidebarTab(e.target.alt));
      }
    }
  };

  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTheme("system");
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className={s.wrap}>
      <div className={s.topWrapper}>
        {data.map((item, index) => {
          return (
            <div
              className={classNames(s.imageWrapper, {
                [s.active]: sidebarTab === item.alt,
              })}
              onClick={handleSwitchTab}
              key={index}
            >
              <Image src={item.image} alt={item.alt} quality={100} />
            </div>
          );
        })}
      </div>
      <div>
        <div
          className={s.imageWrapper}
          onClick={() => {
            dispatch(
              setCurrentTab({
                image: Angular,
                title: "me.ts",
              })
            );
            dispatch(setCurrentFile("me.ts"));
          }}
        >
          <Image src={User} alt="User" quality={100} />
        </div>
        <div className={s.imageWrapper} onClick={() => setShowBox(!showBox)}>
          <Image src={Setting} alt="Setting" quality={100} />
          <div
            className={classNames(s.themeSelecter, {
              [s.themeSelecterFlex]: showBox,
            })}
          >
            <div className={s.themeName} onClick={() => setTheme("system")}>
              <div className={s.iconWrapper}>
                {theme === "system" && (
                  <Image src={CorrectIcon} alt="correct" />
                )}
              </div>
              Github Dark Default
            </div>
            <div className={s.themeName} onClick={() => setTheme("githubdark")}>
              <div className={s.iconWrapper}>
                {theme === "githubdark" && (
                  <Image src={CorrectIcon} alt="correct" />
                )}
              </div>
              Github Dark
            </div>
            <div className={s.themeName} onClick={() => setTheme("monokai")}>
              <div className={s.iconWrapper}>
                {theme === "monokai" && (
                  <Image src={CorrectIcon} alt="correct" />
                )}
              </div>
              Monokai
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
