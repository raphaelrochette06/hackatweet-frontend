import styles from "../styles/Login.module.css";
import Image from "next/image";
import  modal from  'react-modal' ;

function Login() {

return(
<div>
    <div className = { styles.connection}>
        <div className= {styles.logoTwitter}>
            <Image src="/Logo_of_Twitter.svg.png" alt="logotwitter" width={600} height={314}/>

        </div>
        <div className={styles.connectionContainer}> 
        <div className={styles.logoTwitterMini}>
            <Image src="/Logo_of_Twitter.svg.png" alt="logotwitter" width={100} height={100}/>
        </div>
           <div className={styles.titleConnection}>
            <h1 className={styles.title}>See what's happening</h1>
            <div className={styles.contentConnection}>
                <h2 className={styles.joinText}> Join Hackatweet today.</h2>
                <button className={styles.btnSignUp}> Sign up</button>
                <p className={styles.text}> Already have an account?</p>
                <button className={styles.btnSignIn}> Sign in</button>
            </div>
           </div>
        </div>
    </div>

</div>

)
}







export default Login