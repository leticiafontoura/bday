// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFhdEDlsvhxSAcBLWXI0UBJ1oNPjDG3wM",
  authDomain: "contato-niver.firebaseapp.com",
  databaseURL: "https://contato-niver-default-rtdb.firebaseio.com",
  projectId: "contato-niver",
  storageBucket: "contato-niver.appspot.com",
  messagingSenderId: "591042802869",
  appId: "1:591042802869:web:cc0b6e112c3f4cc384bafc"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig)