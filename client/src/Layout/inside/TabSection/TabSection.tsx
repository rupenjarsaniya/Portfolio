import { FC, useEffect, useState } from "react";
import s from "./TabSection.module.scss";
import Image from "next/image";
import sol from "@/asserts/solidity.png";
import close from "@/asserts/close.svg";
import jsx from "@/asserts/react.png";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "@/store";
import { setCurrentFile, setPopCurrentTab } from "@/store/portfolioSlice";

export const TabSection: FC = () => {
  const { currentTab, currentFile } = useSelector(
    (store: AppState) => store.portflio
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentTab.length === 0) {
      dispatch(setCurrentFile(""));
    }
  }, [currentTab, dispatch]);

  return (
    <div className={s.wrap}>
      <div className={s.tabWrapper}>
        {currentTab &&
          currentTab.length > 0 &&
          currentTab.map((item) => (
            <div
              className={classNames(s.tab, {
                [s.current]: currentFile === item.split(".")[0],
              })}
              onClick={() => dispatch(setCurrentFile(item.split(".")[0]))}
            >
              <div className={s.imageWrapper}>
                <Image src={sol} alt="Sol" quality={100} />
              </div>
              <div className={s.tabName}>{item}</div>
              <Image
                src={close}
                alt="Close"
                quality={100}
                onClick={() => dispatch(setPopCurrentTab(item))}
              />
            </div>
          ))}
      </div>
    </div>
  );
};
