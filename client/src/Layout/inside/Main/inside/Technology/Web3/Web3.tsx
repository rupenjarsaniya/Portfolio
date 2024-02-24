import { FC } from "react";
import s from "./Web3.module.scss";
import BlockchainIcon from "@/asserts/technology/blockchain.svg";
import EthreumIcon from "@/asserts/technology/ethereum.svg";
import SolidityIcon from "@/asserts/technology/solidity.svg";
import RustIcon from "@/asserts/technology/rust.svg";
import NFTIcon from "@/asserts/technology/nft.svg";
import TruffleIcon from "@/asserts/technology/truffle.svg";
import HardhatIcon from "@/asserts/technology/hardhat.webp";
import Image from "next/image";

export const Web3: FC = () => (
  <div className={s.wrap}>
    <h1>Web3.o Technologies</h1>
    <div className={s.body}>
      <div className={s.wrapper}>
        <div className={s.image}>
          <Image src={BlockchainIcon} alt="BlockchainIcon" />
        </div>
        <h4>Blockchain</h4>
      </div>
      <div className={s.wrapper}>
        <div className={s.image}>
          <Image src={SolidityIcon} alt="SolidityIcon" />
        </div>
        <h4>Solidity</h4>
      </div>
      <div className={s.wrapper}>
        <div className={s.image}>
          <Image src={RustIcon} alt="RustIcon" />
        </div>
        <h4>Rust</h4>
      </div>
      <div className={s.wrapper}>
        <div className={s.image}>
          <Image src={EthreumIcon} alt="EthreumIcon" />
        </div>
        <h4>Ethereum</h4>
      </div>
      <div className={s.wrapper}>
        <div className={s.image}>
          <Image src={NFTIcon} alt="NFTIcon" />
        </div>
        <h4>NFTs</h4>
      </div>
      <div className={s.wrapper}>
        <div className={s.image}>
          <Image src={HardhatIcon} alt="HardhatIcon" />
        </div>
        <h4>Hardhat</h4>
      </div>
      <div className={s.wrapper}>
        <div className={s.image}>
          <Image src={TruffleIcon} alt="TruffleIcon" />
        </div>
        <h4>Truffle</h4>
      </div>
    </div>
  </div>
);
