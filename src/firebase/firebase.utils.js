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

export const createUserProfileDocument = async (userAuth, additonalData) => {
  // check if if a user is already signed in or not
  if(!userAuth) return;

  // get user data using userAuth id
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  // get the user data
  const snapShot = await userRef.get();

  // if user does not exist in users db (collection), save name, email and createdAt and creating a user obj in db
  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    // try to create a new user 
    try { 
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additonalData
      })
    } catch (error) {
      console.log('error creating user ', error.message);
    }
  }

  return userRef;
};


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;