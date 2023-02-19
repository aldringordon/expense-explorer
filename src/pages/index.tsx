import styles from "@/styles/Home.module.css";
import { Inter } from "@next/font/google";
import Head from "next/head";
import Image from "next/image";
import FinanceCard from "./FinanceCard";

import testData from "./TestData.json";

interface finItem {
  Name: string;
  Type: string;
  Subtype: string;
  Amount: number;
  Frequency: string;
}

export default function Home() {
  testData.forEach((item) => {
    console.log(item);
    console.log("-----");
  });

  return (
    <>
      <Head>
        <title>Expense Explorer</title>
        <meta name="description" content="Explore your expenses" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-[#09051b] grid grid-rows-6 grid-flow-col gap-4 justify-center  items-center w-screen h-screen">
        {testData.map((testData, i) => (
          <FinanceCard key={i} finItem={testData} />
        ))}
      </main>
    </>
  );
}
