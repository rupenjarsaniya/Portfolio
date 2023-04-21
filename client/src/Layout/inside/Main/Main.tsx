import { FC } from "react";
import s from "./Main.module.scss";
import { TabSection } from "../TabSection";
import { useSelector } from "react-redux";
import { AppState } from "@/store";
import { Me } from "./inside/About/Me";
import { Education } from "./inside/About/Education";
import { SocialLinks } from "./inside/SocialLinks";

export const Main: FC = () => {
  const { currentFile } = useSelector((store: AppState) => store.portflio);

  return (
    <div className={s.wrap}>
      <TabSection />
      <div className={s.body}>
        {currentFile === "me.ts" && <Me />}
        {currentFile === "education.java" && <Education />}
        {currentFile === "socialLinks.md" && <SocialLinks />}
      </div>
    </div>
  );
};
