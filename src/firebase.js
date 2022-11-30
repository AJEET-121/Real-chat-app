// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDT0tRKw3ZoBuv0DpYjSRr8Upof1KTuYxQ",
  authDomain: "my-chat-app-da3ff.firebaseapp.com",
  projectId: "my-chat-app-da3ff",
  storageBucket: "my-chat-app-da3ff.appspot.com",
  messagingSenderId: "971485813166",
  appId: "1:971485813166:web:922c0ddbc812d44cb9903f",
  measurementId: "G-NH830EV8PE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)