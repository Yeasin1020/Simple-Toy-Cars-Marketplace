// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3_QjLf05Vdxsi8tGTuHzJdNOZA6bSYOU",
  authDomain: "toys-cars-client.firebaseapp.com",
  projectId: "toys-cars-client",
  storageBucket: "toys-cars-client.appspot.com",
  messagingSenderId: "176764773199",
  appId: "1:176764773199:web:1805b01d7cd092d6da5b3a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;