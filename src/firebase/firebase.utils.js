import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBUlYdj0NGqQ_ut0ZhhKHL6Wk2C8CijxNc",
    authDomain: "crwn-db-80361.firebaseapp.com",
    projectId: "crwn-db-80361",
    storageBucket: "crwn-db-80361.appspot.com",
    messagingSenderId: "1058189246742",
    appId: "1:1058189246742:web:11b2aa45151e1bb3185037",
    measurementId: "G-N97H2P8G06"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase; 