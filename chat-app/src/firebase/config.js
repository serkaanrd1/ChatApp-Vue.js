import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA1l0os_sPuyCBdMTrfyj5qlseOApQClsI",
  authDomain: "vue-chat-b4094.firebaseapp.com",
  projectId: "vue-chat-b4094",
  storageBucket: "vue-chat-b4094.appspot.com",
  messagingSenderId: "288130889751",
  appId: "1:288130889751:web:aee97e4d48c94e841b0452",
  measurementId: "G-N6CGT4WL5Q"
};

firebase.initializeApp(firebaseConfig);

const projectAuth = firebase.auth();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectAuth, projectFirestore, timestamp };



