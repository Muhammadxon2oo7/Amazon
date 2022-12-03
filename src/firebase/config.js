import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDlNpBOznlEOzZsP9kt7dOOZryWvS0y2n8",
  authDomain: "fir-d2c56.firebaseapp.com",
  projectId: "fir-d2c56",
  storageBucket: "fir-d2c56.appspot.com",
  messagingSenderId: "527134336908",
  appId: "1:527134336908:web:976448ac0025a8236e58a9",
  measurementId: "G-0D5YCM1RW6"
};

const backend = firebase.initializeApp(firebaseConfig);
const auth = backend.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export { auth, provider, backend  }

