import { FC, useCallback, useState } from "react";
import s from "./Experience.module.scss";
import Image from "next/image";
import ArrowIcon from "@/asserts/arrow.png";
import classNames from "classnames";

const data = [
  {
    background: "#ff99008d",
    color: "#ffebc2",
    designation: "Software Engineer",
    companyName: "Ansorbit Technolabs",
    location: "Ahmedabad, Gujarat",
    timePeriod: "01/2023 - Present",
    skillToBeDeveloped: [
      "Designed and implemented a software-as-a-service platform for customers.",
      "Designed and built new business applications, including CRM, ERP, and supply chain software.",
      "Maintained software products including programs, webpages, and databases.",
      "Developed custom software solutions for customers.",
      "Manage Daily Standup Meeting.",
    ],
    projects: [
      {
        projectName: "ZCrypto - Web3 Trading Platform",
        Responsibilities: [
          "Requirement gathering & client communication.",
          "Web3 project on blockchain, solidity.",
          "Manage and run tasks based on sprints & jira.",
          "Customized business logic using plugins & Develop complex business logic.",
          "Worked on core part of project.",
          "Code review and refactoring.",
          "CI/CD setup using circleci.",
          "Implemented D3.JS as require for graphs.",
          "Design and develop core components.",
          "Requirement analysis and MVC design & Design pixel perfect UI design.",
        ],
        description:
          "ZCrypto is A blockchain-based trading platform is a decentralised marketplace where buyers and sellers can trade digital assets such as cryptocurrencies, tokens, and other digital assets in a secure, transparent, and immutable way. The platform uses a blockchain network to facilitate transactions, record ownership, and ensure the integrity of the trading process.The platform also provides users with real-time market data, enabling them to make informed decisions about their trades.",
        technologies: ["Blockchain", "Ethereum", "NextJS", "D3.js", "Solidity"],
      },
      {
        projectName: "ZCrypto",
        Responsibilities: [
          "Requirement gathering & client communication.",
          "Web3 project on blockchain, solidity.",
          "Manage and run tasks based on sprints & jira.",
          "Customized business logic using plugins & Develop complex business logic.",
          "Worked on core part of project.",
          "Code review and refactoring.",
          "CI/CD setup using circleci.",
          "Implemented D3.JS as require for graphs.",
          "Design and develop core components.",
          "Requirement analysis and MVC design & Design pixel perfect UI design.",
        ],
        description:
          "ZCrypto is A blockchain-based trading platform is a decentralised marketplace where buyers and sellers can trade digital assets such as cryptocurrencies, tokens, and other digital assets in a secure, transparent, and immutable way. The platform uses a blockchain network to facilitate transactions, record ownership, and ensure the integrity of the trading process.The platform also provides users with real-time market data, enabling them to make informed decisions about their trades.",
        technologies: ["Blockchain", "Ethereum", "NextJS", "D3.js", "Solidity"],
      },
    ],
  },
  // {
  //   background: "#99cc008d",
  //   color: "#ecffb3",
  //   designation: "Software Engineer",
  //   companyName: "Ansorbit Technolabs",
  //   location: "Ahmedabad, Gujarat",
  //   timePeriod: "01/2023 - Present",
  //   skillToBeDeveloped: [
  //     "Designed and implemented a software-as-a-service platform for customers.",
  //     "Designed and built new business applications, including CRM, ERP, and supply chain software.",
  //     "Maintained software products including programs, webpages, and databases.",
  //     "Developed custom software solutions for customers.",
  //     "Manage Daily Standup Meeting.",
  //   ],
  //   projects: [
  //     {
  //       projectName: "ZCrypto - Web3 Trading Platform",
  //       Responsibilities: [
  //         "Requirement gathering & client communication.",
  //         "Web3 project on blockchain, solidity.",
  //         "Manage and run tasks based on sprints & jira.",
  //         "Customized business logic using plugins & Develop complex business logic.",
  //         "Worked on core part of project.",
  //         "Code review and refactoring.",
  //         "CI/CD setup using circleci.",
  //         "Implemented D3.JS as require for graphs.",
  //         "Design and develop core components.",
  //         "Requirement analysis and MVC design & Design pixel perfect UI design.",
  //       ],
  //       description:
  //         "ZCrypto is A blockchain-based trading platform is a decentralised marketplace where buyers and sellers can trade digital assets such as cryptocurrencies, tokens, and other digital assets in a secure, transparent, and immutable way. The platform uses a blockchain network to facilitate transactions, record ownership, and ensure the integrity of the trading process.The platform also provides users with real-time market data, enabling them to make informed decisions about their trades.",
  //       technologies: ["Blockchain", "Ethereum", "NextJS", "D3.js", "Solidity"],
  //     },
  //     {
  //       projectName: "ZCrypto",
  //       Responsibilities: [
  //         "Requirement gathering & client communication.",
  //         "Web3 project on blockchain, solidity.",
  //         "Manage and run tasks based on sprints & jira.",
  //         "Customized business logic using plugins & Develop complex business logic.",
  //         "Worked on core part of project.",
  //         "Code review and refactoring.",
  //         "CI/CD setup using circleci.",
  //         "Implemented D3.JS as require for graphs.",
  //         "Design and develop core components.",
  //         "Requirement analysis and MVC design & Design pixel perfect UI design.",
  //       ],
  //       description:
  //         "ZCrypto is A blockchain-based trading platform is a decentralised marketplace where buyers and sellers can trade digital assets such as cryptocurrencies, tokens, and other digital assets in a secure, transparent, and immutable way. The platform uses a blockchain network to facilitate transactions, record ownership, and ensure the integrity of the trading process.The platform also provides users with real-time market data, enabling them to make informed decisions about their trades.",
  //       technologies: ["Blockchain", "Ethereum", "NextJS", "D3.js", "Solidity"],
  //     },
  //   ],
  // },
];

export const Experience: FC = () => {
  const [collapse, setCollapse] = useState<Record<number, boolean>>({});

  const handleCollapse = useCallback(
    (index: number) => setCollapse({ ...collapse, [index]: !collapse[index] }),
    [collapse]
  );

  return (
    <div className={s.wrap}>
      <div className={s.cardsWrapper}>
        {data.length > 0 &&
          data.map((item, index) => (
            <div
              key={index}
              className={s.card}
              onClick={() => handleCollapse(index)}
              style={{ borderColor: item.background }}
            >
              <div
                className={s.cardHeader}
                style={{ background: item.background, color: item.color }}
              >
                <div className={s.companyDetail}>
                  <h2>{item.designation}</h2>
                  <h4>
                    {item.companyName} · {item.location}
                  </h4>
                </div>
                <div className={s.time}>
                  {item.timePeriod}
                  <div
                    className={classNames(s.imageWrapper, {
                      [s.active]: !collapse[index],
                    })}
                  >
                    <Image src={ArrowIcon} alt="ArrowIcon" />
                  </div>
                </div>
              </div>
              <div
                className={s.projectWrapper}
                style={{ display: collapse[index] ? "flex" : "none" }}
              >
                {item.projects.map((project, index) => (
                  <div key={index} className={s.projectCardWrapper}>
                    <h4>
                      {index + 1}. {project.projectName}
                    </h4>
                    <div className={s.description}>
                      Description:
                      <div>{project.description}</div>
                    </div>
                    <div className={s.responsibilities}>
                      Responsibilities:
                      <ul>
                        {project.Responsibilities.map((i, index) => (
                          <li key={index}>{i}</li>
                        ))}
                      </ul>
                    </div>
                    <ul className={s.technologies}>
                      {project.technologies.map((i, index) => (
                        <li
                          key={index}
                          style={{
                            background: item.background,
                            color: item.color,
                          }}
                        >
                          {i}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
