import { FC } from "react";
import s from "./Skills.module.scss";
import { AppState } from "@/store";
import { useSelector } from "react-redux";

export const Skills: FC = () => {
  const {
    data: { skills },
  } = useSelector((state: AppState) => state.portflio);

  return (
    <div className={s.wrap}>
      {skills.map((item: any, index: number) => (
        <div className={s.skillsWrapper} key={index}>
          <ul className={s.list}>
            <li>{item}</li>
          </ul>
        </div>
      ))}
    </div>
  );
};
