import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyDF-6Gn01-t9VKMoH4O6ZNWeOBMoKOyglU",
  authDomain: "willy-9cc8a.firebaseapp.com",
  projectId: "willy-9cc8a",
  storageBucket: "willy-9cc8a.appspot.com",
  messagingSenderId: "848785903085",
  appId: "1:848785903085:web:306dbc3d74c110391d6be4"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase.firestore();
