import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../styles/Tweet.module.css";
import { postTweet } from "../reducers/tweet";
import { useSelector } from "react-redux";

function Tweet() {
  const tweet = useSelector((state) => state.tweet.value);
  console.log("tweetiz", tweet);
  return (
    <div>
      <div className={styles.tweet}>
        <div className={styles.username}>
          {tweet.firstname}
          {tweet.username}{" "}
        </div>
        <div className={styles.tweetContent}>{tweet.content} </div>
        <div className={styles.Icons}> </div>
      </div>
    </div>
  );
}

export default Tweet;

// import { useSelector } from 'react-redux';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import styles from "../styles/Tweet.module.css";

// function Tweet() {
//     const tweet = useSelector(state => state.tweet.value);

//     return (
//         <div>
//             <div className={styles.tweet}>
//                 <div className={styles.username}>
//                     {tweet.firstname} {tweet.username}
//                 </div>
//                 <div className={styles.tweetContent}>{tweet.content}</div>
//                 <div className={styles.Icons}></div>
//             </div>
//         </div>
//     );
// }

// export default Tweet;
