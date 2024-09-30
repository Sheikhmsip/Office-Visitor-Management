// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDmnLqwlXZX03YMlVrChGxkBYrB3ZUogI",
  authDomain: "visitor-management-eee10.firebaseapp.com",
  projectId: "visitor-management-eee10",
  storageBucket: "visitor-management-eee10.appspot.com",
  messagingSenderId: "135406452613",
  appId: "1:135406452613:web:bdc1bba26a364f642a8eec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;