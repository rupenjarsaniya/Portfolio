import { FC } from "react";
import s from "./Skills.module.scss";

// const data = [
//   {
//     skills: [
//       "Solidity programming language",
//       "Ethereum, Hyperledger Fabric platforms",
//       "Smart contract development",
//       "Cryptography",
//       "Web3.js & Ethereum Development",
//       "Decentralized application (DApp) development",
//       "APIs and SDKs for blockchain development (e.g. Ethereum API, Web3.js, Hyperledger Fabric SDK)",
//     ],
//     background:
//       "linear-gradient(0deg, rgba(0,153,51,.7) 23%, rgba(0,204,68,.7) 100%)",
//   },
//   {
//     skills: [
//       "Data Structure & Algorithms",
//       "Proficiency in Java & JavaScript",
//       "Ability to write clean, efficient, and maintainable code",
//       "Ability to work collaboratively with cross-functional teams, including designers, project managers, and quality assurance testers",
//       "Strong problem-solving and analytical skills",
//       "Experience with agile software development methodologies",
//       "Testing and debugging",
//       "Collaboration and teamwork",
//       "Strong communication and interpersonal skills",
//     ],
//     background:
//       "linear-gradient( 0deg,rgba(0, 153, 153, .7) 23%,rgba(0, 230, 230, .7) 100%)",
//   },
// ];
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
  "Ability to write clean, efficient, and maintainable code",
  "Ability to work collaboratively with cross-functional teams, including designers, project managers, and quality assurance testers",
  "Strong problem-solving and analytical skills",
  "Experience with agile software development methodologies",
  "Testing and debugging",
  "Collaboration and teamwork",
  "Strong communication and interpersonal skills",
];

export const Skills: FC = () => (
  <div className={s.wrap}>
    {data.map((item, index) => (
      <div className={s.skillsWrapper} key={index}>
        <ul className={s.list}>
          <li>{item}</li>
        </ul>
      </div>
    ))}
  </div>
);
