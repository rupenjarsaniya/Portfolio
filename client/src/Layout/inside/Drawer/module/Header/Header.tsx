import { FC, ReactNode } from "react";
import s from "./Header.module.scss";

interface HeaderProps {
  title: string;
  image: ReactNode;
}

export const Header: FC<HeaderProps> = ({ title, image }) => (
  <div className={s.wrap}>
    <p className={s.title}>{title}</p>
    <div className={s.moreImageWrapper}>{image}</div>
  </div>
);
