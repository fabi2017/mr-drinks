// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAnVSKrUn7_i-GgFVjzX8acUOsiKUOnM8w",
  authDomain: "mr-drinks-f30f3.firebaseapp.com",
  projectId: "mr-drinks-f30f3",
  storageBucket: "mr-drinks-f30f3.appspot.com",
  messagingSenderId: "520518897593",
  appId: "1:520518897593:web:a8bfeb32ee08b3d5aab068",
  measurementId: "G-PXC5WNNKHS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db