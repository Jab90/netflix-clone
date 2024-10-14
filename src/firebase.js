// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_dM2hH0uKkiW_Pbs2HCNcKadzJFdEExw",
  authDomain: "netflix-clone-d31d8.firebaseapp.com",
  projectId: "netflix-clone-d31d8",
  storageBucket: "netflix-clone-d31d8.appspot.com",
  messagingSenderId: "789018836743",
  appId: "1:789018836743:web:a6dae0eb9b80457b94cfa2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
