// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAds0jMnlQ-ioHjcVZzrfjvsxkspYg9EGI",
  authDomain: "calendar-c499d.firebaseapp.com",
  projectId: "calendar-c499d",
  storageBucket: "calendar-c499d.appspot.com",
  messagingSenderId: "503318095187",
  appId: "1:503318095187:web:bdf769dd334a73e4e9eda6",
  measurementId: "G-2X55LZ3QZQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const auth = getAuth(app)
