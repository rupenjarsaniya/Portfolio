import { FC } from "react";
import s from "./SocialLinks.module.scss";
import Image from "next/image";
import Link from "next/link";
import twitterIcon from "@/asserts/social/twitter.png";
import gmailIcon from "@/asserts/social/gmail.png";
import githubIcon from "@/asserts/social/github.png";
import gfgIcon from "@/asserts/social/gfg.png";
import linkedinIcon from "@/asserts/social/linkedin.png";
import mediumIcon from "@/asserts/social/medium.png";
import websiteIcon from "@/asserts/social/website.png";

const data = [
  {
    link: "https://www.github.com/rupenjarsaniya",
    icon: githubIcon,
    title: "Github",
    borderColor: "#9da2ac",
    background: "#9da2ac40",
  },
  {
    link: "https://www.linkedin.com/in/rupenjarsaniya",
    icon: linkedinIcon,
    title: "Linkedin",
    borderColor: "#78b4dc",
    background: "#78b4dc40",
  },
  {
    link: "https://www.twitter.com/rupenjarsaniya",
    icon: twitterIcon,
    title: "Twitter",
    borderColor: "#08acf4",
    background: "#08acf440",
  },
  {
    link: "https://www.medium.com/rupenjarsaniya",
    icon: mediumIcon,
    title: "Medium",
    borderColor: "#ac9c94",
    background: "#ac9c9440",
  },
  {
    link: "mailto://rupenjarsaniya7984@gmail.com",
    icon: gmailIcon,
    title: "Gmail",
    borderColor: "#e05c54",
    background: "#e05c5440",
  },
  {
    link: "https://auth.geeksforgeeks.org/user/rupenjarsaniya/",
    icon: gfgIcon,
    title: "Geeksforgeeks",
    borderColor: "#48a444",
    background: "#48a44440",
  },
  {
    link: "https://www.rupen.vercel.app",
    icon: websiteIcon,
    title: "Website",
    borderColor: "#3080f8",
    background: "#3080f840",
  },
];

export const SocialLinks: FC = () => (
  <div className={s.wrap}>
    <h1 className={s.title}>Let's Connect For Something Great! 🎉</h1>
    <div className={s.socialLinks}>
      {data?.map((item, index) => (
        <Link
          href={item.link}
          target="_blank"
          className={s.linkWrapper}
          key={index}
          style={{
            background: item.background,
            borderColor: item.borderColor,
            color: item.borderColor,
          }}
        >
          <div className={s.imageWrapper}>
            <Image src={item.icon} alt={item.link} quality={100} />
          </div>
          <h3>{item.title}</h3>
        </Link>
      ))}
    </div>
  </div>
);
