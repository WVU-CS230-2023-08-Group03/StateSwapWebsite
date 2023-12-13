// Import the functions you need from the SDKs you need 
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged} from "firebase/auth";
import 'firebase/firestore';
import { getFirestore, addDoc, collection } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use 
// https://firebase.google.com/docs/web/setup#available-libraries 
// Your web app's Firebase configuration 
// For Firebase JS SDK v7.20.0 and later, measurementId is optional 
const firebaseConfig = {
    apiKey: "AIzaSyCHjjHdaFAAZzed6ZG0UIrNVLCujaG5jHY",
    authDomain: "messaging-cce94.firebaseapp.com",
    projectId: "messaging-cce94",
    storageBucket: "messaging-cce94.appspot.com",
    messagingSenderId: "850730572045",
    appId: "1:850730572045:web:29fb044faca996d2ba3844",
    measurementId: "G-F5DBNE32S6"
};

// Initialize Firebase 
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

export {auth, app, firestore, getAuth, onAuthStateChanged, addDoc, collection}