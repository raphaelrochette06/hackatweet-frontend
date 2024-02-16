import React from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import { login, logout } from "../reducers/user";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useState } from "react";
import Tweet from "./Tweet";

function Home() {
  const [text, setText] = useState("");
  const router = useRouter();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);

  const handleLogout = () => {
    dispatch(logout());
    router.push("/");
  };

  const handleTweet = () => {
    fetch("http://localhost3000/tweet/postTweet", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content: text }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.result) {
          dispatch(
            postTweet({
              firstname: data.firstname,
              username: data.username,
              content: text,
            })
          );
          setText("");
        }
      });
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
          </div>
          <div>
            <input
              onChange={(e) => setText(e.target.value)}
              value={text}
              className={styles.tweetInput}
              placeholder="What's up?"
              maxLength={280}
            ></input>
          </div>
          <div className={styles.btnContent}>
            <p>{text.length}/280</p>
            <button className={styles.btnTweet} onClick={() => handleTweet()}>
              {" "}
              Tweet{" "}
            </button>
          </div>
          <Tweet />
        </div>
        <div className={styles.trendContent}>
          <h2 className={styles.title}>Trends</h2>
        </div>
      </div>
    </div>
  );
}

export default Home;
