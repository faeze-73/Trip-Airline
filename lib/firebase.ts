import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCXSMdYLuP89XOzlRgtlff61svqI9YdusU",
  authDomain: "trip-airline.firebaseapp.com",
  projectId: "trip-airline",
  storageBucket: "trip-airline.firebasestorage.app",
  messagingSenderId: "961144201563",
  appId: "1:961144201563:web:88e99ccf97eab5f4e2ba7e",
  measurementId: "G-S1LPDWYE2G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

export default app;