import { FC } from "react";
import s from "./Skills.module.scss";

const general = [
  "Data Structure & Algorithms",
  "Proficiency in Java & JavaScript",
  "Ability to write clean, efficient, and maintainable code",
  "Ability to work collaboratively with cross-functional teams, including designers, project managers, and quality assurance testers",
  "Strong problem-solving and analytical skills",
  "Experience with agile software development methodologies",
  "Testing and debugging",
  "Collaboration and teamwork",
  "Strong communication and interpersonal skills",
];

const web3 = [
  "Solidity programming language",
  "Ethereum, Hyperledger Fabric platforms",
  "Smart contract development",
  "Cryptography",
  "Web3.js & Ethereum Development",
  "Decentralized application (DApp) development",
  "APIs and SDKs for blockchain development (e.g. Ethereum API, Web3.js, Hyperledger Fabric SDK)",
];

export const Skills: FC = () => (
  <div className={s.wrap}>
    <div className={s.skillsWrapper}>
      <div
        className={s.spacerStart}
        style={{
          background: `linear-gradient(0deg, rgba(0,153,51,1) 23%, rgba(0,204,68,1) 100%)`,
        }}
      />
      <ul className={s.list}>
        {web3.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div
        className={s.spacerEnd}
        style={{
          background: `linear-gradient(0deg, rgba(0,153,51,1) 23%, rgba(0,204,68,1) 100%)`,
        }}
      />
    </div>

    <div className={s.skillsWrapper}>
      <div
        className={s.spacerStart}
        style={{
          background: `linear-gradient(
      0deg,
      rgba(0, 153, 153, 1) 23%,
      rgba(0, 230, 230, 1) 100%
    )`,
        }}
      />
      <ul className={s.list}>
        {general.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div
        className={s.spacerEnd}
        style={{
          background: `linear-gradient(
      0deg,
      rgba(0, 153, 153, 1) 23%,
      rgba(0, 230, 230, 1) 100%
    )`,
        }}
      />
    </div>
  </div>
);
