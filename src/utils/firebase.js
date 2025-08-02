// firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLKYP6MDu1MbDlINJfILoqy3KBVdC2CDA",
  authDomain: "netflixgpt-501c3.firebaseapp.com",
  projectId: "netflixgpt-501c3",
  storageBucket: "netflixgpt-501c3.appspot.com", // 🔧 corrected from ".app" to ".app**spot**.com"
  messagingSenderId: "522831236621",
  appId: "1:522831236621:web:4b3b0b17a7db894191cf44",
  measurementId: "G-3FG1GZEHJ3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// ✅ Export the auth with app passed explicitly
export const auth = getAuth(app);
