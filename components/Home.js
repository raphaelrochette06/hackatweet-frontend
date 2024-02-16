import React from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";

function Home() {
  return (
    <div>
      <div className={styles.homePage}>
        <div className={styles.sideHeader}>
          <div className={styles.logoTwitterMini}>
            <Image
              src="/Logo_of_Twitter.svg.png"
              alt="logotwitter"
              width={50}
              height={40}
              className={styles.logoTwitter}
            />
          </div>
          <div className={styles.profilInfo}>
            <Image
              src="/Egg-Twitter.png"
              alt="ProfilePictureTwitter"
              width={40}
              height={40}
              className={styles.profilePic}
            />
            <button className={styles.btnLogout}>Logout</button>
          </div>
        </div>
        <div className={styles.mainContent}>
          <h1 className={styles.title}>Home</h1>
        </div>
        <div className={styles.trendContent}>
        <h2 className={styles.title}>Trends</h2>
        </div>
      </div>
    </div>
  );
}

export default Home;
