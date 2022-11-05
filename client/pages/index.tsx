import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import MainLayoutStyles from "../components/MainLayout/MainLayout.module.css";
import MainLayout from "../components/MainLayout/MainLayout";
import Button from "../components/Button/Button";

export default function Home() {
  return (
    <MainLayout>
      <div className="container-lg">
        <div className={styles.firstBlock}>
          <div className={styles.leftInfo}>
            <div className={styles.title}>Find your team without problem</div>
            <div className={styles.description}>
              That's right, baby. I ain't your loverboy Flexo, the guy you love
              so much. You even love anyone pretending to be him
            </div>
            <div className={styles.buttons}>
              <Button type={"primary"}>Get started</Button>
              <Button
                type={"outlined"}
                margin={"0 0 0 34px"}
                onClick={console.log(123)}
              >
                Documentation
              </Button>
            </div>
          </div>
          <div className={styles.right}>
            <img src="/images/firstBlock.png" alt="" />
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
