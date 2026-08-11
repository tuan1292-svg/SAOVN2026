// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXm7X-OPt1tIZH6ZyjO9jQalqCd9QqNyo",
  authDomain: "saovn-os.firebaseapp.com",
  projectId: "saovn-os",
  storageBucket: "saovn-os.firebasestorage.app",
  messagingSenderId: "1063877424668",
  appId: "1:1063877424668:web:ae51e77473c69d96f851d9",
  measurementId: "G-7T2NC73FR8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);