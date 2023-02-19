import styles from "@/styles/Home.module.css";
import { Inter } from "@next/font/google";
import Head from "next/head";
import Image from "next/image";
import FinanceCard from "./FinanceCard";
import PieChart from "./PieChart";

import testData from "./TestData.json";

interface finItem {
  Name: string;
  Type: string;
  Subtype: string;
  Amount: number;
  Frequency: string;
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Expense Explorer</title>
        <meta name="description" content="Explore your expenses" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-[#605e69] flex flex-col justify-center  items-center w-screen h-screen">
        <PieChart testData={testData} />
        <main className="bg-[#09051b] grid grid-rows-6 grid-flow-col gap-4 justify-center  items-center w-screen h-screen">
          {testData.map((testItem, i) => (
            <FinanceCard key={i} finItem={testItem} />
          ))}
        </main>
      </div>
    </>
  );
}
