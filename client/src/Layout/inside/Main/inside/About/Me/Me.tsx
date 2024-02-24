import { FC } from "react";
import s from "./Me.module.scss";
import Image from "next/image";
import MePic from "@/asserts/picofme (1).png";
import { AppState } from "@/store";
import { useSelector } from "react-redux";

export const Me: FC = () => {
  const {
    data: { bio, languages },
  } = useSelector((store: AppState) => store.portflio);

  return (
    <div className={s.wrap}>
      <div className={s.imageWrapper}>
        <Image src={MePic} alt="MePic" quality={100} />
      </div>
      <div className={s.intro}>{bio}</div>
    </div>
  );
};
