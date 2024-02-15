import React from "react";
import styles from "../styles/Home.module.css";

function Home() {
  return (
    <div>
      <div className={styles.homePage}>
        <div className={styles.sideHeader}></div>
        <div className={styles.mainContent}></div>
        <div className={styles.trendContent}></div>
      </div>
    </div>
  );
}

export default Home;
