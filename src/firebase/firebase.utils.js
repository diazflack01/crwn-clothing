import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyCqe2lfXmpiysS-os7O83t-O1T2u9gcRdc",
    authDomain: "crwn-db-3ac5c.firebaseapp.com",
    projectId: "crwn-db-3ac5c",
    storageBucket: "crwn-db-3ac5c.appspot.com",
    messagingSenderId: "998675980236",
    appId: "1:998675980236:web:8c60380ee1517428d2c769",
    measurementId: "G-YZXXE1ZYP5"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// google auth util
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;