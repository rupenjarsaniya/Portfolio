import { FC } from "react";
import { Header } from "../../module/Header";
import MoreIcon from "@/asserts/more.png";
import Image from "next/image";

export const Search: FC = () => (
  <div>
    <Header
      title="SEARCH"
      image={<Image src={MoreIcon} alt="MoreIcon" quality={100} />}
    />
  </div>
);
