// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mernestatewebsite.firebaseapp.com",
  projectId: "mernestatewebsite",
  storageBucket: "mernestatewebsite.firebasestorage.app",
  messagingSenderId: "986545140519",
  appId: "1:986545140519:web:0301c15c4b29b3f6af2f02"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);