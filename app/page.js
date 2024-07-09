import Image from "next/image";
import styles from "./page.module.css";
import { Button } from "antd";
export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Developed using &nbsp;
          <Image
            src="/next.svg"
            alt="Next Logo"
            className={styles.vercelLogo}
            width={80}
            height={24}
            priority
          />
        </p>
        <div>
          By{" "}
          <i>
            <b>Jayesh Vekariya</b>
          </i>
        </div>
      </div>

      <div className={styles.center}>
        <h1>Welcome to Mini Projects</h1>
        <br />
      </div>

      <div className={styles.grid}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          rel="noopener noreferrer"
        >
          <h3>Click here to get Started</h3>
        </a>
        {/* 
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Learn <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Templates <span>-&gt;</span>
          </h2>
          <p>Explore starter templates for Next.js.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Deploy <span>-&gt;</span>
          </h2>
          <p>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a> */}
      </div>
    </main>
  );
}
