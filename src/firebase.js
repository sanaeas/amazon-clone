import { initializeApp } from 'firebase/app';
import {
  getFirestore
} from 'firebase/firestore';
import {
  getAuth
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCxdPR58BoSE9d4PI4iUGvRtUIG_dTddAQ",
  authDomain: "clone-8d036.firebaseapp.com",
  projectId: "clone-8d036",
  storageBucket: "clone-8d036.appspot.com",
  messagingSenderId: "341334910166",
  appId: "1:341334910166:web:a90ac4d29855a6bb449577",
};

initializeApp(firebaseConfig);

const db = getFirestore();
const auth = getAuth();

export { db, auth };