import { FC, useState } from "react";
import s from "./Explore.module.scss";
import Image from "next/image";
import { Header } from "../../module/Header";
import Arrow from "@/asserts/arrow.png";
import Angular from "@/asserts/angular.png";
import Css from "@/asserts/css.png";
import JS from "@/asserts/js.png";
import TS from "@/asserts/ts.png";
import Java from "@/asserts/java.png";
import Sol from "@/asserts/solidity.png";
import TSX from "@/asserts/react.png";
import MD from "@/asserts/md.png";
import VsCode from "@/asserts/vscode.png";
import classNames from "classnames";
import MoreIcon from "@/asserts/more.png";
import { useDispatch } from "react-redux";
import { setCurrentFile, setCurrentTab } from "@/store/portfolioSlice";

const data = [
  {
    about: [
      {
        image: Angular,
        title: "me.ts",
      },
      {
        image: Java,
        title: "education.java",
      },
      {
        image: JS,
        title: "workExperience.js",
      },
      {
        image: Css,
        title: "Language.css",
      },
    ],
  },
  {
    technology: [
      {
        image: JS,
        title: "frontend.js",
      },
      {
        image: TS,
        title: "backend.ts",
      },
      {
        image: Sol,
        title: "web3.sol",
      },
      {
        image: VsCode,
        title: "others",
      },
    ],
  },
  {
    image: Sol,
    title: "skills.sol",
  },
  {
    image: TSX,
    title: "projects.tsx",
  },
  {
    image: MD,
    title: "socialLinks.md",
  },
];

export const Explore: FC = () => {
  const [state, setState] = useState(false);
  const [aboutExpand, setAboutExpand] = useState(false);
  const [technologyExpand, setTechnologyExpand] = useState(false);
  const dispatch = useDispatch();

  return (
    <>
      <Header
        title="EXPLORE"
        image={<Image src={MoreIcon} alt="MoreIcon" quality={100} />}
      />
      <div className={s.body}>
        <div className={s.titleWrapper}>
          <div className={classNames(s.imageWrapper, { [s.active]: state })}>
            <Image
              src={Arrow}
              alt="Arrow"
              quality={100}
              onClick={() => setState(!state)}
            />
          </div>
          <div className={s.projectTitle}>PORTFOLIO</div>
        </div>

        <div className={s.explore}>
          <div
            className={classNames(s.folder, {
              [s.folderExpand]: state,
            })}
          >
            <div
              className={s.titleWrapper}
              onClick={() => setAboutExpand(!aboutExpand)}
            >
              <div
                className={classNames(s.imageWrapper, {
                  [s.active]: aboutExpand,
                })}
              >
                <Image src={Arrow} alt="Arrow" quality={100} />
              </div>
              <div className={s.projectTitle}>About</div>
            </div>
            <ul
              className={classNames(s.list, {
                [s.folderExpandActive]: aboutExpand,
              })}
            >
              {data.length > 0 &&
                data[0].about?.map((item, index) => {
                  return (
                    <li
                      key={index}
                      onClick={() => {
                        dispatch(setCurrentTab(item.title));
                        dispatch(setCurrentFile(item.title.split(".")[0]));
                      }}
                    >
                      <div className={s.techImageWrapper}>
                        <Image
                          src={item.image}
                          alt={item.title}
                          quality={100}
                        />
                      </div>
                      {item.title}
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>

        <div className={s.explore}>
          <div
            className={classNames(s.folder, {
              [s.folderExpand]: state,
            })}
          >
            <div
              className={s.titleWrapper}
              onClick={() => setTechnologyExpand(!technologyExpand)}
            >
              <div
                className={classNames(s.imageWrapper, {
                  [s.active]: technologyExpand,
                })}
              >
                <Image src={Arrow} alt="Arrow" quality={100} />
              </div>
              <div className={s.projectTitle}>Technology</div>
            </div>
            <ul
              className={classNames(s.list, {
                [s.folderExpandActive]: technologyExpand,
              })}
            >
              {data.length > 0 &&
                data[1].technology?.map((item, index) => {
                  return (
                    <li
                      key={index}
                      onClick={() => {
                        dispatch(setCurrentTab(item.title));
                        dispatch(setCurrentFile(item.title.split(".")[0]));
                      }}
                    >
                      <div className={s.techImageWrapper}>
                        <Image
                          src={item.image}
                          alt={item.title}
                          quality={100}
                        />
                      </div>
                      {item.title}
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>

        {data.length > 0 &&
          data.map((item, index) => {
            if (item.image) {
              return (
                <div
                  className={s.explore}
                  key={index}
                  onClick={() => {
                    dispatch(setCurrentTab(item.title));
                    dispatch(setCurrentFile(item.title.split(".")[0]));
                  }}
                >
                  <div
                    className={classNames(s.folder, {
                      [s.folderExpand]: state,
                    })}
                  >
                    <div className={s.titleWrapper}>
                      <div className={s.techImageWrapper}>
                        <Image
                          src={item.image}
                          alt={item.title}
                          quality={100}
                        />
                      </div>
                      <div className={s.projectTitle}>{item.title}</div>
                    </div>
                  </div>
                </div>
              );
            }
          })}
      </div>
    </>
  );
};
