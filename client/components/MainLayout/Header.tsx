import React from "react";
import styles from "components/MainLayout/Header.module.css";
import LayoutStyles from "components/MainLayout/MainLayout.module.css";
import Button from "../Button/Button";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={"container"}>
        <div className={styles.brand}>wannateam?</div>
        <nav className={styles.middleMenu}>
          <div className={styles.menuItem}>Gaming</div>
          <div className={styles.menuItem}>Programming</div>
          <div className={styles.menuItem}>Other</div>
        </nav>
        <div className={styles.buttons}>
          <div className={styles.login}>Login</div>
          <Button type={"outlined"}>Register</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
