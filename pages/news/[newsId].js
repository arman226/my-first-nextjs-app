import { useRouter } from "next/router";
import styles from "../../styles/Home.module.css";

export default function Subcomponent() {
  const router = useRouter();
  const { newsId } = router.query;

  return (
    <div className={styles.container}>
      <h1>The News Subcomponent {newsId}</h1>
    </div>
  );
}
