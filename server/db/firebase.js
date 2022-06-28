// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAK24FO4_6TblqqYZ7p85Cp--lySs1gso",
  authDomain: "brc-shoes.firebaseapp.com",
  projectId: "brc-shoes",
  storageBucket: "brc-shoes.appspot.com",
  messagingSenderId: "64817186053",
  appId: "1:64817186053:web:0226ae435ed2989ee7636c",
  measurementId: "G-FLL7NBLFS9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
