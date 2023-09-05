// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.VITE_FIREBASE_API_KEY,
  authDomain: "counter-void.firebaseapp.com",
  projectId: "counter-void",
  storageBucket: "counter-void.appspot.com",
  messagingSenderId: "918619323286",
  appId: "1:918619323286:web:1eb85f3378fe3710153bb7", 
  databaseURL: "https://counter-void.firebaseio.com",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)