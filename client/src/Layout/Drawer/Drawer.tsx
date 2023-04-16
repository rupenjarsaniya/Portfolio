import { FC } from "react";
import s from "./Drawer.module.scss";
import { Explore } from "./inside/Explore";
import { useSelector } from "react-redux";
import { AppState } from "@/store";
import { Search } from "./inside/Search";
import classNames from "classnames";

export const Drawer: FC = () => {
  const { sidebarTab } = useSelector((store: AppState) => store.portflio);
  console.log(sidebarTab);

  return (
    <div className={classNames(s.wrap, { [s.hideDrawer]: sidebarTab === "" })}>
      {sidebarTab === "Files" && <Explore />}
      {sidebarTab === "Search" && <Search />}
    </div>
  );
};
