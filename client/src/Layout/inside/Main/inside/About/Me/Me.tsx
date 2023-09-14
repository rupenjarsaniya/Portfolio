import { FC } from "react";
import s from "./Me.module.scss";
import Image from "next/image";
import MePic from "@/asserts/picofme.png";

export const Me: FC = () => (
  <div className={s.wrap}>
    <div className={s.imageWrapper}>
      <Image src={MePic} alt="MePic" quality={100} />
    </div>
    <div className={s.intro}>
      Hello, I am a highly skilled professional with a passion for developing
      innovative blockchain solutions. With a strong background in programming
      languages such as Solidity, Rust, Typescript, JavaScript, and Java, I am
      experienced in creating smart contracts and decentralized applications
      (DApps). My goal is to leverage my technical expertise and industry
      knowledge to contribute to cutting-edge projects in the blockchain space.
      I am dedicated to continuous learning and staying updated with the latest
      trends and advancements in blockchain technology. I thrive in
      collaborative environments, where I can apply my problem-solving skills
      and attention to detail to deliver high-quality solutions.
      <ul>
        <li>I Know,</li>
        <li>English - Professional Working Proficiency</li>
        <li>Hindi - Full Professional Proficiency</li>
        <li>Gujarati - Native or Bilingual Proficiency</li>
      </ul>
    </div>
  </div>
);
