import { FC } from "react";
import s from "./Experience.module.scss";
import Image from "next/image";
import { AppState } from "@/store";
import { useSelector } from "react-redux";

const colors = [
  {
    background: "#00aaff60",
    color: "#c2e6ff",
  },
  {
    background: "#ff990060",
    color: "#ffebc2",
  },
];

export const Experience: FC = () => {
  const {
    data: { workExperience },
  } = useSelector((state: AppState) => state.portflio);

  return (
    <div className={s.wrap}>
      <div className={s.cardsWrapper}>
        {workExperience.map((item: any, index: number) => {
          return (
            <div
              className={s.card}
              key={index}
              style={{
                background: colors[index].background,
                color: colors[index].color,
              }}
            >
              <div className={s.logo}>
                <Image
                  src={`/asserts/${item.companyLogo}`}
                  alt={item.companyLogo}
                  width={100}
                  height={100}
                />
              </div>
              <div className={s.timePeriod}>
                <div>{item.location}</div>
                <div>{item.timePeriod}</div>
              </div>
              <div
                className={s.underline}
                style={{ background: `${colors[index].color + 25}` }}
              />
              <div className={s.designation}>{item.designation}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
