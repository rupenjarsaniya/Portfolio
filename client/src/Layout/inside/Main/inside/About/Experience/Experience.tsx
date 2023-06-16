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
          "ZCrypto is a decentralized trending platform that operates on the Ethereum blockchain.",
          "Developed a cryptocurrency trading platform using blockchain technology with ethereum, smart contracts, solidity, decentralized finance (DeFi), and cryptocurrency markets.",
          "Managed project timeline and deliverables, ensuring timely code delivery and successful project completion. Facilitated meetings between development teams and stakeholders to ensure clear communication and alignment on project goals.",
          "Designed and implemented user interface using React and Redux and Integration between solidity smart contract, backend and frontend.",
          "Proficient in using Jira to manage project tasks and ensure timely completion of deliverables.",
        ],
        description:
          "ZCrypto is A blockchain-based trading platform is a decentralised marketplace where buyers and sellers can trade digital assets such as cryptocurrencies, tokens, and other digital assets in a secure, transparent, and immutable way. The platform uses a blockchain network to facilitate transactions, record ownership, and ensure the integrity of the trading process.The platform also provides users with real-time market data, enabling them to make informed decisions about their trades.",
        technologies: [
          "Blockchain",
          "Web3",
          "Ethereum",
          "NextJS",
          "D3.js",
          "Solidity",
          "DApp",
        ],
      },
      {
        projectName: "Transport Web App",
        Responsibilities: [
          "Transport is a web application designed to help manage transactions and parties involved in the transportation industry.",
          "Design whole web application with single handed in Next.JS, Create Restful APIs in Node.JS with help of express.js framework, Manage and maintain mongodb database and Led integration efforts between backend, and frontend development teams.",
          "Managed project tasks on a daily basis and cleared Jira tickets in a timely manner, ensuring successful project completion.",
        ],
        description:
          "The system has a range of features, including parties management, payment ledger, transactions, areas, build quotation, reports, company profile, and dashboard. These features allow users to manage parties involved in transportation requests, keep track of payments related to transportation requests, create and manage transportation requests, and generate reports to provide useful insights into transportation patterns and usage.",
        technologies: ["NextJS", "React query", "Mongodb"],
      },
    ],
  },
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
              onClick={() => {}}
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
                      [s.active]: collapse[index],
                    })}
                  >
                    <Image src={ArrowIcon} alt="ArrowIcon" />
                  </div>
                </div>
              </div>
              <div
                className={s.projectWrapper}
                style={{ display: !collapse[index] ? "flex" : "none" }}
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
                    {/* <ul className={s.technologies}>
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
                    </ul> */}
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
