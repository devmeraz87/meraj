// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVY0riRsRidtHrkoa_o2gGy-ApGgTUlE0",
  authDomain: "new-chaking.firebaseapp.com",
  projectId: "new-chaking",
  storageBucket: "new-chaking.appspot.com",
  messagingSenderId: "404110901647",
  appId: "1:404110901647:web:076321849728db5d7ccbfa"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore(app);

export { storage, db }
