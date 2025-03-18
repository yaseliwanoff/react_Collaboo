import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, User as FirebaseUser  } from "firebase/auth";

// Конфигурация Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAxfFm_vWEz4_h3xOD9DApqRTdTjbq2crY",
  authDomain: "local-soulwi.firebaseapp.com",
  projectId: "local-soulwi",
  storageBucket: "local-soulwi.appspot.com",
  messagingSenderId: "944388395479",
  appId:  "1:944388395479:web:b160914f7f0a09a2083b92"
};

// Инициализация Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, signInWithEmailAndPassword, onAuthStateChanged };

export type User = FirebaseUser ;
