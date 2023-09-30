// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQV82VMf04C0YCUBW7g-SpOiXSnqNCKNs",
  authDomain: "auth-context-mixed.firebaseapp.com",
  projectId: "auth-context-mixed",
  storageBucket: "auth-context-mixed.appspot.com",
  messagingSenderId: "71702950639",
  appId: "1:71702950639:web:45b611f1ddbaf2a7a2a11a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth