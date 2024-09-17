// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMUW0U1kAJrDlu6HlmHQyn9LzT8Wgq-4w",
  authDomain: "react-online-shoping-firebase.firebaseapp.com",
  projectId: "react-online-shoping-firebase",
  storageBucket: "react-online-shoping-firebase.appspot.com",
  messagingSenderId: "248431346974",
  appId: "1:248431346974:web:6ca15832169028e8a2f50f",
  measurementId: "G-ND9D9JNESK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);