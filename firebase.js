import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"

const firebaseConfig = {
  apiKey: "AIzaSyDZ3h5Ai8pElvNCl_7ju3I1AUCG4A8XiX0",
  authDomain: "green-house-monitoring-65fe4.firebaseapp.com",
  databaseURL: "https://green-house-monitoring-65fe4-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "green-house-monitoring-65fe4",
  storageBucket: "green-house-monitoring-65fe4.appspot.com",
  messagingSenderId: "678979787235",
  appId: "1:678979787235:web:4f2a30c79d82cbd546e8d6",
  measurementId: "${config.measurementId}"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase();

export { db }