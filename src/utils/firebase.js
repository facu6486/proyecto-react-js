// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBE0JG16ID_4PB33IPjNZ_peVOwQ2MYAy0",
  authDomain: "brdburgerhouse.firebaseapp.com",
  projectId: "brdburgerhouse",
  storageBucket: "brdburgerhouse.appspot.com",
  messagingSenderId: "1016815191496",
  appId: "1:1016815191496:web:990a6cf1731c427cceecfd",
  measurementId: "G-J5S19RKLN9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export default db;