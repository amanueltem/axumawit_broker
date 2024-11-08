// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAamNlyBNgcbEkvDLUl5ILXWuN1Dr0aCO8",
  authDomain: "eshop-ff20f.firebaseapp.com",
  databaseURL: "https://eshop-ff20f-default-rtdb.firebaseio.com",
  projectId: "eshop-ff20f",
  storageBucket: "eshop-ff20f.appspot.com",
  messagingSenderId: "479476520660",
  appId: "1:479476520660:web:a78eb5d212c13a61770d41"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const auth=getAuth(app);
 export const db=getFirestore(app);
 export const storage=getStorage(app);
 export default app;