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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) {
        return;
    }

    // DocumentReference for CRUD
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    // DocumentSnapshot with actual DB data
    const snapShot = await userRef.get();

    // Create `users` entry in firebase if it does not exist
    if (!snapShot.exists) {
        const { displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log("error creating user", error.message);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// google auth util
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;