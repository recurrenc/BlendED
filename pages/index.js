import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import Router from "next/router";

export default function Home() {
  const [count, setCount] = useState(10);
  useEffect(() => {
    count > 0
      ? setTimeout(() => setCount(count - 1), 1000)
      : Router.push("/feedback");
  }, [count]);
  return (
    <div className={styles.container}>
      <Head>
        <title>ASSIGNMENT</title>
      </Head>
      <h1>Home Page</h1>
      <p className={styles.counter}>{count}</p>
    </div>
  );
}
