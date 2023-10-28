import { FC } from "react";
import s from "./SocialLinks.module.scss";
import Image from "next/image";
import Link from "next/link";
import { AppState } from "@/store";
import { useSelector } from "react-redux";

export const SocialLinks: FC = () => {
  const {
    data: { socialLinks },
  } = useSelector((state: AppState) => state.portflio);

  return (
    <div className={s.wrap}>
      <h1 className={s.title}>Let&apos;s Connect For Something Great! 🎉</h1>
      <Link
        href="https://www.upwork.com/freelancers/rupenkumarj"
        target="_blank"
        className={s.link}
      >
        <div className={s.imageWrapper}>
          <Image
            src="/asserts/social/upwork.png"
            alt="upworkIcon"
            quality={100}
            width={100}
            height={100}
          />
        </div>
        <h3>Hire me on Upwork!</h3>
      </Link>
      <div className={s.socialLinks}>
        {socialLinks?.map((item: any, index: number) => (
          <Link
            href={item.link}
            target="_blank"
            className={s.linkWrapper}
            key={index}
            style={{
              background: "#ffffff240",
              borderColor: "#ffffff",
              color: "#ffffff",
            }}
          >
            <div className={s.imageWrapper}>
              <Image
                src={`/asserts/${item.icon}`}
                alt={item.link}
                quality={100}
                width={100}
                height={100}
              />
            </div>
            <h3>{item.name}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
};
