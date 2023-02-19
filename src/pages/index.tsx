import styles from "@/styles/Home.module.css";
import { Inter } from "@next/font/google";
import Head from "next/head";
import Image from "next/image";

import testData from "./TestData.json";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  console.log(testData);

  return (
    <>
      <Head>
        <title>Expense Explorer</title>
        <meta name="description" content="Explore your expenses" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </main>
    </>
  );
}
