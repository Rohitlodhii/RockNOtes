// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBi0j0Nl4116DnyjX4gULn2G4Sjd5GUaLY",
  authDomain: "gearup-3b50d.firebaseapp.com",
  projectId: "gearup-3b50d",
  storageBucket: "gearup-3b50d.appspot.com",
  messagingSenderId: "440858213792",
  appId: "1:440858213792:web:f15b61682628359a69f8c5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDb = getFirestore(app);
const auth = getAuth(app);
const storage  = getStorage(app);

export {fireDb, auth, storage}