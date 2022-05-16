// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTvCWcDlgWlWEecTv-LShWuDBgUZQ5p50",
  authDomain: "viejasalhiloreact.firebaseapp.com",
  projectId: "viejasalhiloreact",
  storageBucket: "viejasalhiloreact.appspot.com",
  messagingSenderId: "25999328994",
  appId: "1:25999328994:web:a65a429530bb23edfa40bb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export default db;