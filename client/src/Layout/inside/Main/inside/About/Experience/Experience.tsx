import { FC } from "react";
import s from "./Experience.module.scss";
import Image from "next/image";
import AnsorbitLogo from "@/asserts/logos/ansorbit.png";
import PedalsupLogo from "@/asserts/logos/pedalsup.svg";

const data = [
  {
    background: "#00aaff60",
    color: "#c2e6ff",
    designation: "Blockchain Developer",
    companyName: "Pedalsup",
    location: "Ahmedabad, Gujarat",
    timePeriod: "09/2023 - Present",
    logo: PedalsupLogo,
    companyURL: "www.pedalsup.com",
  },
  {
    background: "#ff990060",
    color: "#ffebc2",
    designation: "Software Engineer",
    companyName: "Ansorbit Technolabs",
    location: "Ahmedabad, Gujarat",
    timePeriod: "01/2023 - 08/2023",
    logo: AnsorbitLogo,
    companyURL: "www.ansorbit.com",
  },
];

export const Experience: FC = () => {
  return (
    <div className={s.wrap}>
      <div className={s.cardsWrapper}>
        {data.map((item, index) => {
          return (
            <div
              className={s.card}
              key={index}
              style={{ background: item.background, color: item.color }}
            >
              <div className={s.logo}>
                <Image src={item.logo} alt={item.logo} />
              </div>
              <div className={s.timePeriod}>
                <div>{item.location}</div>
                <div>{item.timePeriod}</div>
              </div>
              <div
                className={s.underline}
                style={{ background: `${item.color + 25}` }}
              />
              {/* <div className={s.location}></div> */}
              <div className={s.designation}>{item.designation}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
