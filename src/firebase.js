import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCEKcwBiVpqRmVLNPU8vvOcIk5P-iwqgOE",
  authDomain: "instagram-clone-2ba75.firebaseapp.com",
  projectId: "instagram-clone-2ba75",
  storageBucket: "instagram-clone-2ba75.appspot.com",
  messagingSenderId: "511177590659",
  appId: "1:511177590659:web:22696d0fc720c8d63398b6",
  measurementId: "G-XR0S74H8YS"
});
// Initialize Firebase

//firebase.analytics();

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();

  export { db, auth, storage };