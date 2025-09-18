// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDoQT2ayZWgIZOY8-k0Gsz796yT-v802n0",
  authDomain: "vue-blog-33937.firebaseapp.com",
  projectId: "vue-blog-33937",
  storageBucket: "vue-blog-33937.firebasestorage.app",
  messagingSenderId: "12840999948",
  appId: "1:12840999948:web:fbbeddfbcb09c1b4982229"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
