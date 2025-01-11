// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAELTJTclDfTX6WTef9IHYHQf4qrF9HlCM",
  authDomain: "real-estate-50d7c.firebaseapp.com",
  projectId: "real-estate-50d7c",
  storageBucket: "real-estate-50d7c.appspot.com",
  messagingSenderId: "440471471162",
  appId: "1:440471471162:web:352d5cbd0221f270eb6103",
  measurementId: "G-12VD8H6K5Q"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);