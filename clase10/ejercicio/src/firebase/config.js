import app from 'firebase/app';
import firebase from 'firebase';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpWAMZsplKG3MXcU4hHbqDju9T4Cp9xIM",
  authDomain: "demo05-2f1d0.firebaseapp.com",
  projectId: "demo05-2f1d0",
  storageBucket: "demo05-2f1d0.firebasestorage.app",
  messagingSenderId: "908728275775",
  appId: "1:908728275775:web:bb2675b0ef69178556798a"
};

app.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const storage = app.storage()
export const db = app.firestore()