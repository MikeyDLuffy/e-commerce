import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDbsHT9KR4YVFTtlQhCirVkhbhv1vQH-Qs",
    authDomain: "ecommerce-db-14be3.firebaseapp.com",
    databaseURL: "https://ecommerce-db-14be3.firebaseio.com",
    projectId: "ecommerce-db-14be3",
    storageBucket: "ecommerce-db-14be3.appspot.com",
    messagingSenderId: "876207930365",
    appId: "1:876207930365:web:650d1de46ec865eaa0f794",
    measurementId: "G-JPE5YNZYQM"
  };

  firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;