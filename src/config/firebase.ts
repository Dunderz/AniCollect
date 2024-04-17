// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAx5809ZdClegbapVXY9DlmdOFy4dK-Pi4",
  authDomain: "anicollect-4527f.firebaseapp.com",
  projectId: "anicollect-4527f",
  storageBucket: "anicollect-4527f.appspot.com",
  messagingSenderId: "219588248154",
  appId: "1:219588248154:web:3735c82799a77343b68e63",
  measurementId: "G-NHXM6E48E5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
