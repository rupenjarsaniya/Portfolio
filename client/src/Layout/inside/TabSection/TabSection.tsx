import { FC, useEffect } from "react";
import s from "./TabSection.module.scss";
import Image from "next/image";
import close from "@/asserts/close.svg";
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
    if (!currentTab.length) {
      dispatch(setCurrentFile(""));
    }
  }, [currentTab, dispatch]);

  return (
    <div className={s.wrap}>
      <div className={s.tabWrapper}>
        {currentTab.length > 0 &&
          currentTab.map(
            (item, index) =>
              item.title !== "" && (
                <div
                  key={index}
                  className={classNames(s.tab, {
                    [s.current]: currentFile === item.title,
                  })}
                >
                  <div className={s.imageWrapper}>
                    <Image src={item.image} alt={item.title} quality={100} />
                  </div>
                  <div
                    className={s.tabName}
                    onClick={() => {
                      dispatch(setCurrentFile(item.title));
                    }}
                  >
                    {item.title}
                  </div>
                  <Image
                    src={close}
                    alt="Close"
                    quality={100}
                    onClick={() => {
                      dispatch(setPopCurrentTab(item.title));
                      dispatch(setCurrentFile(""));
                    }}
                  />
                </div>
              )
          )}
      </div>
    </div>
  );
};
