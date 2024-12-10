// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyC97D-VacEuhVXpzj8QHD5iGkcASIT2yHY",
  authDomain: "book-home-movil.firebaseapp.com",
  projectId: "book-home-movil",
  storageBucket: "book-home-movil.appspot.com",
  messagingSenderId: "1009062296416",
  appId: "1:1009062296416:web:fc88fe52d3e1383576bc05",
  measurementId: "G-8B2Y4G33GQ"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Exportar servicios que usarás
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
