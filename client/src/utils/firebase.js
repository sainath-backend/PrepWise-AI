import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth,GoogleAuthProvider} from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "authprepwiseai.firebaseapp.com",
  projectId: "authprepwiseai",
  storageBucket: "authprepwiseai.firebasestorage.app",
  messagingSenderId: "265969152115",
  appId: "1:265969152115:web:f9545f5e3718762efc7a06"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export {auth,provider}