import Head from "next/head";
import { Home } from "@/components/Home";

export default function Index() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main style={{ display: "flex", minHeight: "100vh" }}>
        <Home />
      </main>
    </>
  );
}
