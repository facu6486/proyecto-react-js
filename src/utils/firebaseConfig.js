// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNHg2MpPCqZr5sADOGscM1GNkxeDrkllQ",
  authDomain: "brdreact.firebaseapp.com",
  projectId: "brdreact",
  storageBucket: "brdreact.appspot.com",
  messagingSenderId: "589075529317",
  appId: "1:589075529317:web:5c86d2ef3097e6155ad08c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;