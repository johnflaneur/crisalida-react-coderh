
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite"

  const firebaseConfig = {
    apiKey: "AIzaSyDrCWyN2MuuFZHNfmFA02ho6WNoPuPQ0fE",
    authDomain: "crisalida-ecommerce.firebaseapp.com",
    projectId: "crisalida-ecommerce",
    storageBucket: "crisalida-ecommerce.appspot.com",
    messagingSenderId: "238501567747",
    appId: "1:238501567747:web:c5b99a806184da6cc65d36"
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)