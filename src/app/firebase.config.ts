import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDMw2N8JxzKezAVsLs_96nDP2-fC5dWDWA",
  authDomain: "extralingualapp-database.firebaseapp.com",
  databaseURL: "https://extralingualapp-database-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "extralingualapp-database",
  storageBucket: "extralingualapp-database.firebasestorage.app",
  messagingSenderId: "166253399501",
  appId: "1:166253399501:web:0a5d71ed1cac4d1ea20884"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth(app);