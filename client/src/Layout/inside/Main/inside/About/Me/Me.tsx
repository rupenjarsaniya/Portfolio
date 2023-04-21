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
      Hello 👋, I am a software engineer with 1 year of experience in the
      blockchain space. I have expertise in programming languages such as
      JavaScript, Java, and TypeScript. Additionally, I possess strong knowledge
      in data structures and algorithms. My experience includes working with
      various blockchain platforms like Ethereum, Hyperledger, and Corda. I am
      passionate about developing decentralized applications and smart contracts
      that leverage the power of blockchain technology. With my skills and
      experience, I am confident in my ability to solve complex technical
      challenges and contribute to any software development team.
    </div>
  </div>
);
