import React from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import { login, logout } from "../reducers/user";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

function Home() {
  const router = useRouter();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);
  const handleLogout = () => {
    dispatch(logout());
    router.push("/");
  };

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
              href="/home"
            />
          </div>
          <div className={styles.userInfo}>
            <div className={styles.profilInfo}>
              <div className={styles.profilPicContainer}>
                <Image
                  src="/Egg-Twitter.png"
                  alt="ProfilePictureTwitter"
                  width={40}
                  height={40}
                  className={styles.profilePic}
                />
              </div>
              <div className={styles.userInfo}>
                <p className={styles.textInfo}>{user.firstname}</p>
                <p className={styles.textInfoUsername}>@{user.username}</p>
              </div>
            </div>
            <button className={styles.btnLogout} onClick={() => handleLogout()}>
              Logout
            </button>
          </div>
        </div>
        <div className={styles.mainContent}>
          <div className={styles.inputContainer}>
            <h1 className={styles.title}>Home</h1>
            <input
              className={styles.tweetInput}
              placeholder="What's up?"
              maxLength={280}
            ></input>
          </div>
        </div>
        <div className={styles.trendContent}>
          <h2 className={styles.title}>Trends</h2>
        </div>
      </div>
    </div>
  );
}

export default Home;
