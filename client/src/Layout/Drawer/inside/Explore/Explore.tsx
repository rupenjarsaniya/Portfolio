import { FC, useState } from "react";
import s from "./Explore.module.scss";
import Image from "next/image";
import { Header } from "../../module/Header";
import Arrow from "@/asserts/arrow.png";
import Angular from "@/asserts/Angular.png";
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

export const Explore: FC = () => {
  const [state, setState] = useState(false);
  const [aboutExpand, setAboutExpand] = useState(false);
  const [technologyExpand, setTechnologyExpand] = useState(false);

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
              <li>
                <div className={s.techImageWrapper}>
                  <Image src={Angular} alt="Angular" quality={100} />
                </div>
                Me.ts
              </li>
              <li>
                <div className={s.techImageWrapper}>
                  <Image src={Java} alt="Java" quality={100} />
                </div>
                Education.java
              </li>
              <li>
                <div className={s.techImageWrapper}>
                  <Image src={JS} alt="JS" quality={100} />
                </div>
                workExperience.js
              </li>
              <li>
                <div className={s.techImageWrapper}>
                  <Image src={Css} alt="Css" quality={100} />
                </div>
                Language.css
              </li>
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
              <li>
                <div className={s.techImageWrapper}>
                  <Image src={JS} alt="JS" quality={100} />
                </div>
                Frontend.js
              </li>
              <li>
                <div className={s.techImageWrapper}>
                  <Image src={TS} alt="TS" quality={100} />
                </div>
                Backend.ts
              </li>
              <li>
                <div className={s.techImageWrapper}>
                  <Image src={Sol} alt="Solidity" quality={100} />
                </div>
                Web3.sol
              </li>
              <li>
                <div className={s.techImageWrapper}>
                  <Image src={VsCode} alt="VsCode" quality={100} />
                </div>
                Others
              </li>
            </ul>
          </div>
        </div>

        <div className={s.explore}>
          <div
            className={classNames(s.folder, {
              [s.folderExpand]: state,
            })}
          >
            <div className={s.titleWrapper}>
              <div className={s.techImageWrapper}>
                <Image src={Sol} alt="Solidity" quality={100} />
              </div>
              <div className={s.projectTitle}>skills.sol</div>
            </div>
          </div>
        </div>

        <div className={s.explore}>
          <div
            className={classNames(s.folder, {
              [s.folderExpand]: state,
            })}
          >
            <div className={s.titleWrapper}>
              <div className={s.techImageWrapper}>
                <Image src={TSX} alt="TSX" quality={100} />
              </div>
              <div className={s.projectTitle}>projects.tsx</div>
            </div>
          </div>
        </div>

        <div className={s.explore}>
          <div
            className={classNames(s.folder, {
              [s.folderExpand]: state,
            })}
          >
            <div className={s.titleWrapper}>
              <div className={s.techImageWrapper}>
                <Image src={MD} alt="MD" quality={100} />
              </div>
              <div className={s.projectTitle}>socialLinks.md</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
