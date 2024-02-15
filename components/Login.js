import styles from "../styles/Login.module.css";
import Image from "next/image";
import { useState, useEffect } from "react";
import Modal from "react-modal";
import { login, logout } from "../reducers/user.js";
import { useDispatch } from "react-redux";

function Login() {
  const dispatch = useDispatch();
  const [modalSignInIsOpen, setSignInIsOpen] = useState(false);
  const [modalSignUpIsOpen, setSignUpIsOpen] = useState(false);

  const [signUpFirstname, setSignUpFirstname] = useState("");
  const [signUpUsername, setSignUpUsername] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");

  const [signInUsername, setSignInUsername] = useState("");
  const [signInPassword, setSignInPassword] = useState("");

  function openModalSignUp() {
    setSignUpIsOpen(true);
  }

  function closeModalSignUp() {
    setSignUpIsOpen(false);
  }

  function openModalSignIn() {
    setSignInIsOpen(true);
    // Ajoutez ici votre logique spécifique pour le formulaire de connexion
  }

  function closeModalSignIn() {
    setSignInIsOpen(false);
  }

  const handleRegister = () => {
    fetch("http://localhost:3000/users/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstname: signUpFirstname,
        username: signUpUsername,
        password: signUpPassword,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.result) {
          dispatch(login({ username: signUpUsername, token: data.token }));
          setSignUpFirstname("");
          setSignUpUsername("");
          setSignUpPassword("");
        }
      });
  };

  const handleConnection = () => {
    fetch("http://localhost:3000/users/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: signInUsername,
        password: signInPassword,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.result) {
          dispatch(login({ username: signInUsername, token: data.token }));
          setSignInUsername("");
          setSignInPassword("");
        }
      });
  };

  return (
    <div>
      <div className={styles.connection}>
        <div className={styles.logoTwitter}>
          <Image
            src="/Logo_of_Twitter.svg.png"
            alt="logotwitter"
            width={600}
            height={314}
          />
        </div>
        <div className={styles.connectionContainer}>
          <div className={styles.logoTwitterMini}>
            <Image
              src="/Logo_of_Twitter.svg.png"
              alt="logotwitter"
              width={100}
              height={100}
            />
          </div>
          <div className={styles.titleConnection}>
            <h1 className={styles.title}>See what's happening</h1>
            <div className={styles.contentConnection}>
              <h2 className={styles.joinText}> Join Hackatweet today.</h2>
              <button onClick={openModalSignUp} className={styles.btnSignUp}>
                {" "}
                Sign up
              </button>
              <Modal
                isOpen={modalSignUpIsOpen}
                onRequestClose={closeModalSignUp}
                className={styles.customStyles}
                contentLabel="Sign Up Modal"
              >
                <div className={styles.modalSignUp}>
                  <div className={styles.btnClose}>
                    <button onClick={closeModalSignUp}>X</button>
                  </div>
                  <div className={styles.contentModal}>
                    <Image
                      src="/Logo_of_Twitter.svg.png"
                      alt="logotwitter"
                      width={50}
                      height={50}
                    />
                    <h2> Create your Hackatweet account</h2>

                    <div className={styles.signUpForm}>
                      <input
                        className={styles.firstname}
                        placeholder="Firstname"
                        onChange={(e) => setSignUpFirstname(e.target.value)}
                        value={signUpFirstname}
                      />
                      <input
                        className={styles.username}
                        placeholder="Username"
                        onChange={(e) => setSignUpUsername(e.target.value)}
                        value={signUpUsername}
                      />
                      <input
                        type="password"
                        className={styles.password}
                        placeholder="Password"
                        onChange={(e) => setSignUpPassword(e.target.value)}
                        value={signUpPassword}
                      />
                    </div>
                    <button
                      onClick={() => handleRegister()}
                      className={styles.modalBtn}
                    >
                      Sign Up
                    </button>
                  </div>
                </div>
              </Modal>
              <p className={styles.text}> Already have an account?</p>
              <button onClick={openModalSignIn} className={styles.btnSignIn}>
                {" "}
                Sign in
              </button>
              <Modal
                isOpen={modalSignInIsOpen}
                onRequestClose={closeModalSignIn}
                className={styles.customStyles}
                contentLabel="Sign In Modal"
              >
                <div className={styles.modalSignUp}>
                  <div className={styles.btnClose}>
                    <button onClick={closeModalSignIn}>X</button>
                  </div>
                  <div className={styles.contentModal}>
                    <h2> Connect to Hackatweet</h2>
                    <div className={styles.signInForm}>
                      <input
                        className={styles.username}
                        placeholder="Username"
                        onChange={(e) => setSignInUsername(e.target.value)}
                        value={signInUsername}
                      />
                      <input
                        type="password"
                        className={styles.password}
                        placeholder="Password"
                        onChange={(e) => setSignInPassword(e.target.value)}
                        value={signInPassword}
                      />
                    </div>
                    <button
                      onClick={() => handleConnection()}
                      className={styles.modalBtn}
                    >
                      Sign In
                    </button>
                  </div>
                </div>
              </Modal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
