import { FC, useCallback, useState } from "react";
import s from "./Project.module.scss";
import Link from "next/link";
import Image from "next/image";

const data = [
  {
    title: "E Commerce Supplychain",
    image: "https://picsum.photos/200/300/?blur",
    description:
      "I developed an e-commerce supply chain web app using blockchain technology. It offers transparency, automation through smart contracts, product traceability, supply chain visibility, secure transactions, data analytics, and seamless integration. The project showcases my expertise in blockchain, supply chain management, and software development, providing an efficient and trustworthy solution for the industry.",
    technology: [
      "Blockchain",
      "Solidity",
      "Ethereum",
      "ReactJS",
      "Chai",
      "Mocha",
    ],

    github: "https://github.com/rupenjarsaniya/E-Commerce-Supplychain",
    livedemo: "https://e-commerce-supplychain.vercel.app/",

    background: "#fedd9954",
    color: "#fedd99",
  },
  {
    title: "Solidity Contracts",
    image: "https://picsum.photos/200/300/?blur",
    description:
      "Solidity Contracts. I have published a solidity contract weekly here!",
    technology: ["Solidity", "Ethereum"],

    github: "https://github.com/rupenjarsaniya/solidity-help",
    gitbook: "https://blockchainbuilders.gitbook.io/solidity/",

    background: "#be252554",
    color: "#be2525",
  },
  {
    title: "Twitter web3.0",
    image: "https://picsum.photos/200/300/?blur",
    description:
      "Twitter's web3 blockchain web application integrates blockchain technology to provide a decentralized social media platform. Users have complete control over their data and content, while blockchain ensures transparency and security. The application enables microtransactions for users to monetize their content and rewards creators for high-quality content. It also provides a unique identity to each user on the blockchain, allowing for trustless interactions and fostering a vibrant online community.",
    technology: [
      "Solidity",
      "Ethereum",
      "Blockchain",
      "NFT",
      "Web3.js",
      "Hardhat",
      "ReactJS",
      "Sanity.io",
    ],
    github: "https://github.com/rupenjarsaniya/Twitter-Web3.0",
    background: "#beb92554",
    color: "#beb925",
  },
  {
    title: "Uniswap web3.0",
    image: "https://picsum.photos/200/300/?blur",
    description:
      "Uniswap is a decentralized exchange (DEX) web application built on the Ethereum blockchain, providing a platform for peer-to-peer trading of various ERC-20 tokens. It utilizes an automated market maker (AMM) mechanism to facilitate trades without the need for order books or centralized intermediaries. Users can also provide liquidity to the exchange's pools and earn fees and governance tokens in return. Uniswap promotes a trustless, open, and decentralized financial ecosystem, which enables anyone to participate in the exchange of digital assets without restrictions.",
    technology: [
      "Solidity",
      "Ethereum",
      "Blockchain",
      "NFT",
      "Web3.js",
      "Hardhat",
      "ReactJS",
      "Sanity.io",
    ],
    github: "https://github.com/rupenjarsaniya/uniswap-web3.0",
    background: "#2dbe2554",
    color: "#2dbe25",
  },
  {
    title: "Foody",
    image: "https://picsum.photos/200/300/?blur",
    description:
      "Welcome to our food delivery website that offers a seamless ordering experience with Paytm as the payment gateway. Customers can browse through the menu, select their favorite dishes, and pay using Paytm. Our website also provides real-time order tracking, ensuring that customers receive their food on time.",
    technology: [
      "ReactJS",
      "NodeJS",
      "ExpressJS",
      "MongoDB",
      "Redux",
      "Paytm gateway",
    ],
    github: "https://github.com/rupenjarsaniya/foody",
    background: "#25bea554",
    color: "#25bea5",
  },
  {
    title: "Facegram",
    image: "https://picsum.photos/200/300/?blur",
    description:
      "The social web application is a platform that allows users to post content and engage in real-time chat with their followers. Users can share their thoughts, images, and videos with their audience while also having the option to interact with them through messaging and group chats. The platform fosters a community-driven environment, where users can connect with like-minded individuals, share information, and stay up-to-date on the latest trends. The real-time chat feature enables instant communication, making the platform an efficient and effective means of staying connected with followers.",
    technology: [
      "ReactJS",
      "NodeJS",
      "ExpressJS",
      "MongoDB",
      "Redux",
      "Socket.io",
    ],
    github: "https://github.com/rupenjarsaniya/facegram",
    background: "#93f20554",
    color: "#93f205",
  },
  {
    title: "Cookitup",
    image: "https://picsum.photos/200/300/?blur",
    description:
      "The Food Recipe web application is a platform where users can share their favorite recipes, discover new dishes, and interact with other food enthusiasts. Users can post their recipes, along with images, ingredients, and instructions. They can also like, share, and comment on other users' posts, as well as save posts to try later. The platform creates a community of food lovers, where users can exchange ideas and tips, and explore different cuisines from around the world.",
    technology: ["NextJS", "MongoDB", "Redux", "Tailwind"],
    github: "https://github.com/rupenjarsaniya/cookitup",
    background: "#6d8be354",
    color: "#6d8be3",
  },
  {
    title: "Bunny Chat",
    image: "https://picsum.photos/200/300/?blur",
    description:
      "This is project of chatting web application offers a platform for users to connect with each other in private rooms. Users can create their chat rooms, invite others to join, and have private conversations. The web application also allows users to customize their profiles and interact with others through a user-friendly interface. With its robust features and secure environment, our chatting web application offers a seamless chatting experience to users.",
    technology: ["ReactJS", "NodeJS", "Socket.io"],
    github: "https://github.com/rupenjarsaniya/bunny",
    background: "#51825554",
    color: "#518255",
  },
  {
    title: "Codeswear",
    image: "https://picsum.photos/200/300/?blur",
    description:
      "This is ecommerce clothing website offers a wide range of clothing options for customers to choose from, and payments can be made using Paytm. Customers can browse through the website, add items to their cart, and complete the payment process using the Paytm gateway. Our website also offers various delivery options, including express delivery, and provides customers with order tracking information.",
    technology: ["NextJS", "MongoDB", "Tailwind", "Paytm gateway"],
    github: "https://github.com/rupenjarsaniya/codeswear",
    background: "#8c347d54",
    color: "#8c347d",
  },
];

export const Project: FC = () => {
  const [showMore, setShowMore] = useState<Record<number, boolean>>({});

  const handleShowMore = useCallback(
    (index: number) => setShowMore({ ...showMore, [index]: !showMore[index] }),
    [showMore]
  );

  return (
    <div className={s.wrap}>
      {data.map((item, index) => (
        <div key={index} className={s.card}>
          <h3 className={s.title}>{item.title}</h3>
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
              {item.technology.map((tech, index) => (
                <li
                  key={index}
                  style={{ background: item.background, color: item.color }}
                >
                  {tech}
                </li>
              ))}
            </ul>
            <div className={s.urls}>
              {
                <Link href={item.github} className={s.link} target="_blank">
                  Source Code
                </Link>
              }
              {item.gitbook && (
                <Link href={item.gitbook} className={s.link} target="_blank">
                  Git book
                </Link>
              )}
              {item.livedemo && (
                <Link href={item.livedemo} className={s.link} target="_blank">
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
