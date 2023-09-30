// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC69n7yq-SBFJkbW6f4pPIn-hdTdrK8fzs",
  authDomain: "auth-moha-milon-cc489.firebaseapp.com",
  projectId: "auth-moha-milon-cc489",
  storageBucket: "auth-moha-milon-cc489.appspot.com",
  messagingSenderId: "340734838479",
  appId: "1:340734838479:web:25d0f293dcd06dd1b419ba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;