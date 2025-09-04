// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCFuQDLcBTuconNRW_tBOf5_XOBB7U9mQ",
  authDomain: "gc-goal-tracker.firebaseapp.com",
  projectId: "gc-goal-tracker",
  storageBucket: "gc-goal-tracker.firebasestorage.app",
  messagingSenderId: "128959289563",
  appId: "1:128959289563:web:bd1d6caf7f9a771f0454fe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)