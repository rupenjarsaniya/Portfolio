import { FC } from "react";
import s from "./Main.module.scss";
import { TabSection } from "../TabSection";
import { useSelector } from "react-redux";
import { AppState } from "@/store";
import { Me } from "./inside/About/Me";
import { Education } from "./inside/About/Education";
import { SocialLinks } from "./inside/SocialLinks";
import { Experience } from "./inside/About/Experience";
import { Frontend } from "./inside/Technology/Frontend";
import { Backend } from "./inside/Technology/Backend";
import { Web3 } from "./inside/Technology/Web3";
import { Tools } from "./inside/Technology/Tools";
import { Skills } from "./inside/Skills";

export const Main: FC = () => {
  const { currentFile } = useSelector((store: AppState) => store.portflio);

  return (
    <div className={s.wrap}>
      <TabSection />
      <div className={s.body}>
        {currentFile === "me.ts" && <Me />}
        {currentFile === "education.java" && <Education />}
        {currentFile === "socialLinks.md" && <SocialLinks />}
        {currentFile === "workExperience.js" && <Experience />}
        {currentFile === "frontend.js" && <Frontend />}
        {currentFile === "backend.ts" && <Backend />}
        {currentFile === "web3.sol" && <Web3 />}
        {currentFile === "others" && <Tools />}
        {currentFile === "skills.sol" && <Skills />}
      </div>
    </div>
  );
};
