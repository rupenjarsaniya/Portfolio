import { FC } from "react";
import s from "./Backend.module.scss";
import NodeIcon from "@/asserts/technology/node.svg";
import MongodbIcon from "@/asserts/technology/mongodb.svg";
import ExpressIcon from "@/asserts/technology/express.svg";
import SanityIcon from "@/asserts/technology/sanity.svg";
import Image from "next/image";

export const Backend: FC = () => (
  <div className={s.wrap}>
    <h1>Backend - Database</h1>
    <div className={s.body}>
      <div className={s.wrapper}>
        <div className={s.image}>
          <Image src={NodeIcon} alt="nodeIcon" />
        </div>
        <h4>Node</h4>
      </div>
      <div className={s.wrapper}>
        <div className={s.image}>
          <Image src={ExpressIcon} alt="expressIcon" />
        </div>
        <h4>Express</h4>
      </div>
      <div className={s.wrapper}>
        <div className={s.image}>
          <Image src={MongodbIcon} alt="mongodbIcon" />
        </div>
        <h4>Mongodb</h4>
      </div>
      <div className={s.wrapper}>
        <div className={s.image}>
          <Image src={SanityIcon} alt="sanityIcon" />
        </div>
        <h4>Sanity</h4>
      </div>
    </div>
  </div>
);
