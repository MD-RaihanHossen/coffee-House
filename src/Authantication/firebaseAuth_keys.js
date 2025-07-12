// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCj97Q3Y-ep2MKwA-IUvQloTzqzXcIfWdY",
  authDomain: "coffee-house-3.firebaseapp.com",
  projectId: "coffee-house-3",
  storageBucket: "coffee-house-3.firebasestorage.app",
  messagingSenderId: "1093612479388",
  appId: "1:1093612479388:web:19835fc1b883427147de59"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);