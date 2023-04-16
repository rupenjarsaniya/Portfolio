import { FC, useState } from "react";
import s from "./Sidebar.module.scss";
import Github from "@/asserts/github.png";
import Files from "@/asserts/files.png";
import Search from "@/asserts/search.png";
import Setting from "@/asserts/setting.png";
import User from "@/asserts/user.png";
import Image, { StaticImageData } from "next/image";
import classNames from "classnames";

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
  {
    image: Search,
    alt: "Search",
  },
  {
    image: Github,
    alt: "Github",
  },
];

export const Sidebar: FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>("Files");

  const handleSwitchTab = (e: any) => {
    setActiveTab(e.target.alt);
  };

  return (
    <div className={s.wrap}>
      <div className={s.topWrapper}>
        {data.map((item, index) => {
          return (
            <div
              className={classNames(s.imageWrapper, {
                [s.active]: activeTab === item.alt,
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
        <div className={s.imageWrapper}>
          <Image src={User} alt="User" quality={100} />
        </div>
        <div className={s.imageWrapper}>
          <Image src={Setting} alt="Setting" quality={100} />
        </div>
      </div>
    </div>
  );
};
