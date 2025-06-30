// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2UnqV1cBD0gEBPuAapbyluCJRGaR5Y70",
  authDomain: "projectfrontend-c1971.firebaseapp.com",
  databaseURL: "https://projectfrontend-c1971-default-rtdb.firebaseio.com",
  projectId: "projectfrontend-c1971",
  storageBucket: "projectfrontend-c1971.appspot.com",
  messagingSenderId: "175591745693",
  appId: "1:175591745693:web:d1b61ed561be62cf8fcc74",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
