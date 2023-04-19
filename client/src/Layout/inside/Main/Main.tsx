import { FC } from "react";
import s from "./Main.module.scss";
import { TabSection } from "../TabSection";
import Skills from "@/pages/skills";
import Project from "@/pages/project";
import { useSelector } from "react-redux";
import { AppState } from "@/store";

export const Main: FC = () => {
  const { currentFile } = useSelector((store: AppState) => store.portflio);

  return (
    <div className={s.wrap}>
      <TabSection />
      <div className={s.body}>
        {currentFile === "skills" && <Skills />}
        {currentFile === "projects" && <Project />}
        This is good
      </div>
    </div>
  );
};
