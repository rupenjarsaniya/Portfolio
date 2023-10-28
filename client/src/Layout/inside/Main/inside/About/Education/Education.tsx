import { FC } from "react";
import s from "./Education.module.scss";
import { useSelector } from "react-redux";
import { AppState } from "@/store";

export const Education: FC = () => {
  const {
    data: { education },
  } = useSelector((state: AppState) => state.portflio);

  return (
    <div className={s.wrap}>
      <ul className={s.timeline}>
        {education.map((item: any, index: number) => (
          <li key={item._key}>
            <div className={index === 1 ? s.directionR : s.directionL}>
              <div className={s.flagWrapper}>
                <span className={s.flag}>{item.universityName}</span>
                <span className={s.timeWrapper}>
                  <span className={s.time}>{item.timePeriod}</span>
                </span>
              </div>
              <div className={s.desc}>
                {item.degree} from {item.collegeName}
                <br />
                {item.score}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
