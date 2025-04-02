import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
    // Your web app's Firebase configuration
    apiKey: "AIzaSyCt2i7yQ8nd71T3iD_SbrreG1WVkpDUSG4",
    authDomain: "book-store-a5162.firebaseapp.com",
    projectId: "book-store-a5162",
    storageBucket: "book-store-a5162.firebasestorage.app",
    messagingSenderId: "368682438355",
    appId: "1:368682438355:web:6ec9abc59677544da70e26",
    measurementId: "G-K8GHFEY79P"
  };

initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();
export const cvdb=getStorage();