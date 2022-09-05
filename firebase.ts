// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import {getFirestore} from '@firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdqR48Jjrx8vmikEn-5CtbVYg9-ftfLDc",
  authDomain: "tinkoff-copy-e39db.firebaseapp.com",
  projectId: "tinkoff-copy-e39db",
  storageBucket: "tinkoff-copy-e39db.appspot.com",
  messagingSenderId: "783401735678",
  appId: "1:783401735678:web:2381d5f4dc2b1a77d59caf",
  measurementId: "G-0CY7RB82YQ"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const auth = getAuth();
export const register = (email: string, password: string) =>
	createUserWithEmailAndPassword(auth, email, password);
export const login = (email: string, password: string) =>
	signInWithEmailAndPassword(auth, email, password);
export const logout = () => signOut(auth);
export const db = getFirestore();
