import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"

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
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()

