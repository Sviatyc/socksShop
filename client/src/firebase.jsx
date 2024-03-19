import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword } from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyBG9zZc1ow4AR4A8ZIXTnddSGNGlNZDR5U",
  authDomain: "socksshop-8ce77.firebaseapp.com",
  projectId: "socksshop-8ce77",
  storageBucket: "socksshop-8ce77.appspot.com",
  messagingSenderId: "164712976729",
  appId: "1:164712976729:web:b8c21ff07798d1b8b7bc48",
  measurementId: "G-DSXEXLDK1Q"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export const signInWithGoogle = () =>{
  signInWithPopup(auth, provider)
  .then((res)=>{
    const userName = res.user.displayName
      const userEmail = res.user.email
      const userPhoto = res.user.photoURL
      localStorage.setItem("name", userName)
      localStorage.setItem("email", userEmail)
      localStorage.setItem("photo", userPhoto)     
      localStorage.setItem("confirm", true)
      window.location.reload()
    })
    .catch((err)=>{
      console.error(err);
      localStorage.setItem("confirm", false)
    })
}



export const sightByEmailAndPassword = (email, password) =>{
  signInWithEmailAndPassword(auth, email, password)
    .then((res) => {
      const userName = res.user.displayName
      const userEmail = res.user.email
      const userPhoto = res.user.photoURL
      localStorage.setItem("name", userName)
      localStorage.setItem("email", userEmail)
      localStorage.setItem("photo", userPhoto)
      localStorage.setItem("confirm", true)
      window.location.reload()
    })
    .catch((err) => {
      console.error(err)
      localStorage.setItem("confirm", false)
    });
}
