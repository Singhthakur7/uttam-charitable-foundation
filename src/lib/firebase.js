import { initializeApp, getApps, getApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  getRedirectResult,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut as firebaseSignOut,
  onAuthStateChanged,
  updateProfile as firebaseUpdateProfile,
} from "firebase/auth";
import {
  getDatabase,
  ref,
  set,
  get,
  update,
  push,
  remove,
  onValue,
  off,
  query,
  orderByChild,
  equalTo,
  serverTimestamp,
} from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyD1ALXTuFnD9CuZWJmqW8VN3IFwl5KKuDM",
  authDomain: "login-416ce.firebaseapp.com",
  databaseURL: "https://login-416ce-default-rtdb.firebaseio.com",
  projectId: "login-416ce",
  storageBucket: "login-416ce.firebasestorage.app",
  messagingSenderId: "668988371049",
  appId: "1:668988371049:web:8e62a795b8392cb52fb2f8",
  measurementId: "G-64QKKRB5SP",
};

// Initialize Firebase App
export const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
export const db = getDatabase(app);
export const rtdb = db;

export {
  signInWithPopup,
  signInWithRedirect,
  getRedirectResult,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  firebaseSignOut,
  onAuthStateChanged,
  firebaseUpdateProfile,
  ref,
  set,
  get,
  update,
  push,
  remove,
  onValue,
  off,
  query,
  orderByChild,
  equalTo,
  serverTimestamp,
};

export default {
  app,
  auth,
  db,
  rtdb,
  googleProvider,
};
