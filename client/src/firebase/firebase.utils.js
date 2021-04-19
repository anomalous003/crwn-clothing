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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  const userRef = firestore.doc(`users/${userAuth.uid}`),
    snapshot = await userRef.get()

  if (!snapshot.exists) {
    const { displayName, email } = userAuth,
      createdAt = new Date();
    
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })      
    } catch (error) {
      console.log('error creating user :', error.message );
    }
  }
  return userRef;
}

export const convertCollectionSnapshotToMap = snapshot => {
  const transformedArray = snapshot.docs.map(collection => {
    const { title, items } = collection.data();
    
    return ({
      title,
      id: collection.id,
      routeName: encodeURI(title.toLowerCase()),
      items
    })
  })

  return transformedArray.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection
    return accumulator
  }, {}) 
}

export const addCollectionsAndDocuments = async (collectionName, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionName),
    batch = firestore.batch()
  
  objectsToAdd.forEach(obj => {
    const docRef = collectionRef.doc()

    batch.set(docRef, obj)
  });

  return await batch.commit();
}

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth)
    }, reject)
  })
}

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: 'select_account'
});
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;