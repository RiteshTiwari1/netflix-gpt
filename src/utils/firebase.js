// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLHbytLmAS2jiytTRoubZyPe-dKnsCPJ0",
  authDomain: "netflix-gpt-33647.firebaseapp.com",
  projectId: "netflix-gpt-33647",
  storageBucket: "netflix-gpt-33647.appspot.com",
  messagingSenderId: "227577485020",
  appId: "1:227577485020:web:2ca3056a90b1340c978619",
  measurementId: "G-FYTRTYMDSC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();