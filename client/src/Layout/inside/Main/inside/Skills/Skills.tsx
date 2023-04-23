import { FC } from "react";
import s from "./Skills.module.scss";

const data = [
  "Solidity programming language",
  "Ethereum, Hyperledger Fabric platforms",
  "Smart contract development",
  "Cryptography",
  "Web3.js & Ethereum Development",
  "Decentralized application (DApp) development",
  "APIs and SDKs for blockchain development (e.g. Ethereum API, Web3.js, Hyperledger Fabric SDK)",
  "Data Structure & Algorithms",
  "Proficiency in Java & JavaScript",
  "Testing and debugging",
  "Collaboration and teamwork",
  "Strong problem-solving and analytical skills",
  "Experience with agile software development methodologies",
  "Ability to work collaboratively with cross-functional teams, including designers, project managers, and quality assurance testers",
  "Strong communication and interpersonal skills",
  "Ability to write clean, efficient, and maintainable code",
];

export const Skills: FC = () => (
  <div className={s.wrap}>
    <ul className={s.list}>
      {data.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);
