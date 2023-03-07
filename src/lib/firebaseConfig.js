import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// https://firebase.google.com/docs/web/setup#available-libraries

export const load = () => {

}
// Firebase configuration
const firebaseConfig = {
  apiKey: "",
  authDomain: "word-learn-18813.firebaseapp.com",
  projectId: "word-learn-18813",
  storageBucket: "word-learn-18813.appspot.com",
  messagingSenderId: "156708132240",
  appId: "1:156708132240:web:a2c1f1e34370a7b5154f15"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
