import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getAuth, initializeAuth, indexedDBLocalPersistence } from 'firebase/auth';
import { Capacitor } from '@capacitor/core';

const firebaseConfig = {
  apiKey: "AIzaSyDMw2N8JxzKezAVsLs_96nDP2-fC5dWDWA",
  authDomain: "extralingualapp-database.firebaseapp.com",
  databaseURL: "https://extralingualapp-database-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "extralingualapp-database",
  storageBucket: "extralingualapp-database.firebasestorage.app",
  messagingSenderId: "166253399501",
  appId: "1:166253399501:web:0a5d71ed1cac4d1ea20884"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth with proper persistence for native platforms
let auth, db;
try {
  // Use initializeAuth with IndexedDB persistence for native iOS
  if (Capacitor.isNativePlatform()) {
    auth = initializeAuth(app, {
      persistence: indexedDBLocalPersistence
    });
    console.log('Firebase Auth initialized for native platform with IndexedDB persistence');
  } else {
    auth = getAuth(app);
    console.log('Firebase Auth initialized for web platform');
  }
  
  db = getDatabase(app);
  console.log('Firebase services initialized successfully');
} catch (error) {
  console.error('Firebase initialization error:', error);
}

export { auth, db };