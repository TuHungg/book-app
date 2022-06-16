// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtMrRbC4nXxd-eMufNn9zXamU3tBzEARc",
  authDomain: "reacnative-bookapp.firebaseapp.com",
  projectId: "reacnative-bookapp",
  storageBucket: "reacnative-bookapp.appspot.com",
  messagingSenderId: "760128176165",
  appId: "1:760128176165:web:d83a94f57468f1c91dffcc",
  measurementId: "G-SXT8ZBJHF2",
};

// Initialize Firebase
// export const FirebaseApp = initializeApp(firebaseConfig);

initializeApp(firebaseConfig);

// const analytics = getAnalytics(FirebaseDB);
