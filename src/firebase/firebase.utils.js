import firebase from 'firebase/app';

import 'firebase/firestore';

import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAIAZJGOcM39zCUhXjhHpmhq1wSCIRTEwg",
  authDomain: "ilovemaskusa-db.firebaseapp.com",
  databaseURL: "https://ilovemaskusa-db.firebaseio.com",
  projectId: "ilovemaskusa-db",
  storageBucket: "ilovemaskusa-db.appspot.com",
  messagingSenderId: "731561139487",
  appId: "1:731561139487:web:b8731fae732f8c12b4a42a",
  measurementId: "G-D0V54MJ696"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get();

    if(!snapShot.exists){
      const {displayName, email } = userAuth;
      const createAt = new Date()

      try{
        await userRef.set({
          displayName,
          email,
          createAt,
          ...additionalData
        })
      } catch(error){
        console.log('error creating user', error.message);
      }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;