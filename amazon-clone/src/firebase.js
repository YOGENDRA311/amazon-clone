import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA48NMl6h4agBK1_uITf3A_RBurFavz4lM",
  authDomain: "clone-d9d5c.firebaseapp.com",
  databaseURL: "https://clone-d9d5c.firebaseio.com",
  projectId: "clone-d9d5c",
  storageBucket: "clone-d9d5c.appspot.com",
  messagingSenderId: "767907463008",
  appId: "1:767907463008:web:b51daca9006e901638e805",
  measurementId: "G-QXDDZT0X2Z",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
