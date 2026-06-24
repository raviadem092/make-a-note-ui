// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmvbsHvk7FUq1EmYLCaEhu3SacCidtRwM",
  authDomain: "make-a-note-bfc07.firebaseapp.com",
  projectId: "make-a-note-bfc07",
  storageBucket: "make-a-note-bfc07.firebasestorage.app",
  messagingSenderId: "834996463242",
  appId: "1:834996463242:web:942412434e32fbbf25af73"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
console.log("Firebase Initialized");
console.log("auth", auth);
export default app;