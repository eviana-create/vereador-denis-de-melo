import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyCvLZ7I957VNFcoXnNEw0_avmxeNWFcj9c",
  authDomain: "vereador-denis-de-melo.firebaseapp.com",
  projectId: "vereador-denis-de-melo",
  storageBucket: "vereador-denis-de-melo.firebasestorage.app",
  messagingSenderId: "967874506382",
  appId: "1:967874506382:web:69216ef58ba7c7c5d323df",
  measurementId: "G-7BL4P71F0D"
};


const app = initializeApp(firebaseConfig);


// Analytics
if (typeof window !== "undefined") {
  getAnalytics(app);
}


// Firestore
export const db = getFirestore(app);