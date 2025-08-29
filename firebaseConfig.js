import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCcLALE0l8QdL1R4osyhNxWd7kPipvMhKE",
  authDomain: "fitnest-dfbe1.firebaseapp.com",
  projectId: "fitnest-dfbe1",
  storageBucket: "fitnest-dfbe1.firebasestorage.app",
  messagingSenderId: "82112154611",
  appId: "1:82112154611:web:c96ec37671d5acd3f02086"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
