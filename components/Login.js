import styles from "../styles/Login.module.css";
import Image from "next/image";
import { useState, useEffect } from "react";
import Modal from "react-modal";

// function Login() {
//     const [modalIsOpen, setIsOpen] = useState(false);

//     const customStyles = {
//       content: {
//         top: "20%",
//         left: "50%",
//         right: "auto",
//         bottom: "auto",
//         marginRight: "-50%",
//         transform: "translate(-50%, -50%)",
//       },
//     };

//     function openModal() {
//       setIsOpen(true);
//     }
//     function closeModal() {
//       setIsOpen(false);
//     }

// return(
// <div>
//     <div className = { styles.connection}>
//         <div className= {styles.logoTwitter}>
//             <Image src="/Logo_of_Twitter.svg.png" alt="logotwitter" width={600} height={314}/>

//         </div>
//         <div className={styles.connectionContainer}>
//         <div className={styles.logoTwitterMini}>
//             <Image src="/Logo_of_Twitter.svg.png" alt="logotwitter" width={100} height={100}/>
//         </div>
//            <div className={styles.titleConnection}>
//             <h1 className={styles.title}>See what's happening</h1>
//             <div className={styles.contentConnection}>
//                 <h2 className={styles.joinText}> Join Hackatweet today.</h2>
//                 <button onClick={openModal} className={styles.btnSignUp}> Sign up</button>
//                 <Modal
//           isOpen={modalIsOpen}
//           onRequestClose={closeModal}
//           style={customStyles}
//           contentLabel="Example Modal"
//         />
//                 <p className={styles.text}> Already have an account?</p>
//                 <button className={styles.btnSignIn}> Sign in</button>
//             </div>
//            </div>
//         </div>
//     </div>

// </div>

// )
// }

// // <button onClick={openModal}>Open Modal</button>
// //         <Modal
// //           isOpen={modalIsOpen}
// //           onRequestClose={closeModal}
// //           style={customStyles}
// //           contentLabel="Example Modal"
// //         >
//   <button onClick={closeModal}>close</button>
//   <div>Signup</div>
//   <form>
//     <input />
//   </form>
// //         </Modal>

// export default Login

function Login() {
  const [modalSignInIsOpen, setSignInIsOpen] = useState(false);
  const [modalSignUpIsOpen, setSignUpIsOpen] = useState(false);

  const customStyles = {
    content: {
      top: "300px",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      height: "400px",
      width: "550px",
      borderRadius: "30px",
      backgroundColor: "#161d28",
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
    },
  };

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

                    <form className={styles.signUpForm}>
                      <input
                        className={styles.firstname}
                        placeholder="Firstname"
                      />
                      <input
                        className={styles.username}
                        placeholder="Username"
                      />
                      <input
                        type="password"
                        className={styles.password}
                        placeholder="Password"
                      />
                    </form>
                    <button className={styles.modalBtn}>Sign Up</button>
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
                    <form className={styles.signInForm}>
                      <input
                        className={styles.username}
                        placeholder="Username"
                      />
                      <input
                        type="password"
                        className={styles.password}
                        placeholder="Password"
                      />
                    </form>
                    <button className={styles.modalBtn}>Sign In</button>
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
