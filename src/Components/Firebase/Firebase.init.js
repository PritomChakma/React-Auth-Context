// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDPrxBmy3gL2KaiLEbdDS2FgEdDURbvKg",
  authDomain: "react-auth-context-a4673.firebaseapp.com",
  projectId: "react-auth-context-a4673",
  storageBucket: "react-auth-context-a4673.firebasestorage.app",
  messagingSenderId: "1010864859628",
  appId: "1:1010864859628:web:e9d5d67c5a847ca4cd38c9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth