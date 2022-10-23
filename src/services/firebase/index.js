// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDg0rkGPl-0VVyDR7U43H76xPkvx57MR3w",
  authDomain: "app-proyecto-react.firebaseapp.com",
  projectId: "app-proyecto-react",
  storageBucket: "app-proyecto-react.appspot.com",
  messagingSenderId: "30928736235",
  appId: "1:30928736235:web:1994a8c55e3251efe053ae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db=getFirestore(app)