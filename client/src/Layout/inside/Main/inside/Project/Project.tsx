import { FC, useCallback, useState } from "react";
import s from "./Project.module.scss";
import Link from "next/link";
import Image from "next/image";
import { useSelector } from "react-redux";
import { AppState } from "@/store";

export const Project: FC = () => {
  const [showMore, setShowMore] = useState<Record<number, boolean>>({});

  const handleShowMore = useCallback(
    (index: number) => setShowMore({ ...showMore, [index]: !showMore[index] }),
    [showMore]
  );

  const {
    data: { projects },
  } = useSelector((state: AppState) => state.portflio);

  return (
    <div className={s.wrap}>
      {projects.map((item: any, index: number) => (
        <div key={index} className={s.card}>
          <h3 className={s.title}>{item.title}</h3>
          <div className={s.underline} />
          <div className={s.body}>
            <div className={s.description}>
              {item.description.length > 150 ? (
                <>
                  {showMore[index] ? (
                    item.description
                  ) : (
                    <>{item.description.slice(0, 150)}...</>
                  )}
                  <p onClick={() => handleShowMore(index)}>
                    {showMore[index] ? "Read Less" : "Read More"}
                  </p>
                </>
              ) : (
                item.description
              )}
            </div>
            <ul className={s.technologies}>
              {item.techStack.map((tech: string, index: number) => (
                <li
                  key={index}
                  style={{ background: "#4b52f240", color: "#4b52f2" }}
                >
                  {tech}
                </li>
              ))}
            </ul>
            <div className={s.urls}>
              {
                <Link href={item.githubLink} className={s.link} target="_blank">
                  Source Code
                </Link>
              }
              {item.liveLink && (
                <Link href={item.liveLink} className={s.link} target="_blank">
                  Live Demo
                </Link>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
