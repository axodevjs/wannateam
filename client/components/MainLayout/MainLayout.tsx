import { ReactNode, FC } from "react";
import Header from "./Header";
import styles from "components/MainLayout/MainLayout.module.css";

type Props = { children: ReactNode };

const MainLayout: FC<Props> = (props) => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.main}>{props.children}</main>
    </div>
  );
};

export default MainLayout;
