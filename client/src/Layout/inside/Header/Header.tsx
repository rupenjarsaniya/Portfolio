import { FC } from "react";
import s from "./Header.module.scss";
import classNames from "classnames";
import splitImage from "@/asserts/split-horizontal.png";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { setDrawerStatus } from "@/store/portfolioSlice";
import { AppState } from "@/store";
import { useRouter } from "next/router";

export const Header: FC = () => {
  const { drawerStatus, currentFile } = useSelector(
    (store: AppState) => store.portflio
  );
  const dispatch = useDispatch();
  const Router = useRouter();

  return (
    <div className={s.wrap}>
      <div className={s.buttonWrapper}>
        <div
          className={classNames(s.actionButton, s.firstButton)}
          onClick={() => Router.push("/")}
        />
        <div
          className={classNames(s.actionButton, s.secondButton)}
          onClick={() => Router.push("/")}
        />
        <div
          className={classNames(s.actionButton, s.thirdButton)}
          onClick={() => Router.push("/")}
        />
      </div>
      <div className={s.fileName}>
        {currentFile ? currentFile : "Welcome"} - Portfolio
      </div>
      <div className={s.iconWrapper}>
        <Image
          src={splitImage}
          alt="split-horizontal"
          onClick={() => dispatch(setDrawerStatus(!drawerStatus))}
        />
      </div>
    </div>
  );
};
