// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnMWDMa_RYAUXVbLjvUKm-h_1XEqsQaqc",
  authDomain: "education-database-dfa68.firebaseapp.com",
  projectId: "education-database-dfa68",
  storageBucket: "education-database-dfa68.appspot.com",
  messagingSenderId: "541161141320",
  appId: "1:541161141320:web:c1e913b9a73c660afe547d",
  measurementId: "G-8KFXBVKWFH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);