import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyB44yAoYk-4mMlvIjpGTALywU0Y4qY7ako",
  authDomain: "nick-shop-db.firebaseapp.com",
  projectId: "nick-shop-db",
  storageBucket: "nick-shop-db.appspot.com",
  messagingSenderId: "1051272219205",
  appId: "1:1051272219205:web:e19eb1116c6e9c1aba712c",
  measurementId: "G-VKL1R2GE30"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;