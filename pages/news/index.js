import { Fragment } from "react";
import Link from "next/link";
import styles from "../../styles/Home.module.css";

export default function News() {
  return (
    <Fragment>
      <div className={styles.container}>
        <h1>The News Page</h1>
        <ol>
          <li>
            <Link href='/news/nextjs-is-a-greatframework'>
              Next JS has always been a great Framework
            </Link>
          </li>
          <li>Test 2</li>
        </ol>
      </div>
    </Fragment>
  );
}
