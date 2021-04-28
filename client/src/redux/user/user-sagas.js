import userActionTypes from './user-action.types'

import {
  takeLatest,
  all,
  call,
  put
} from 'redux-saga/effects'

import {
  getCartItemsFromFirestore
} from '../cart/cart-actions'

import {
  signInSuccess,
  signInFailure,
  signOutFailure,
  signOutSuccess,
  signUpFailure,
  signUpSuccess
} from './user-action'

import {
  auth,
  googleProvider,
  createUserProfileDocument,
  getCurrentUser
} from '../../firebase/firebase.utils'


function* getSnapshotFromUserAuth(userAuth) {
  const userRef = yield call(createUserProfileDocument, userAuth);
  const userSnapshot = yield userRef.get();
  try {
    yield put(signInSuccess({
      id: userSnapshot.id,
      ...userSnapshot.data()
    }))
    yield put(getCartItemsFromFirestore(
      userSnapshot.data().cartItems
    ))
  } catch (error) {
    yield put(signInFailure(error.message))
  }
}

function* googleSignInStartAsync() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);

    yield getSnapshotFromUserAuth(user)
  } catch (error) {
    yield put(signInFailure(error.message))
  }
}

function* onGoogleSignInStart() {
  yield takeLatest(
    userActionTypes.GOOGLE_SIGN_IN_START,
    googleSignInStartAsync)
}

function* emailSignInStartAsync({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password)
  
    yield getSnapshotFromUserAuth(user)
  } catch (error) {
    yield put(signInFailure(error.message))
  }  
}

function* onEmailSignInStart() {
  yield takeLatest(
    userActionTypes.EMAIL_SIGN_IN_START,
    emailSignInStartAsync
  )
}

function* isUserAuthenticated() {
  try {
    const user = yield getCurrentUser();
    
    if (!user) return
    
    yield getSnapshotFromUserAuth(user)
  } catch (error) {
    yield put(signInFailure(error.message))
  }
}

function* onCheckUserSession() {
  yield takeLatest(
    userActionTypes.CHECK_USER_SESSION,
    isUserAuthenticated
  )
}

function* signOutStartAsync() {
  try {
    yield auth.signOut()
    yield put(signOutSuccess())
  } catch (error) {
    yield put(signOutFailure(error.message))
  }
}

function* onSignOutStart() {
  yield takeLatest(
    userActionTypes.SIGN_OUT_START,
    signOutStartAsync
  )
}

function* signUpStartAsync({ payload: {email, password,displayName }}) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    yield createUserProfileDocument(user, { displayName })

    yield put(signUpSuccess({email, password}))
  } catch (error) {
    put(signUpFailure(error))
  }
}

function* onSignUpStart() {
  yield takeLatest(
    userActionTypes.SIGN_UP_START,
    signUpStartAsync
  )
}

function* signUpSuccessAsync(action) {
  try {
    yield emailSignInStartAsync(action)
  } catch (error) {
    put(signInFailure(error))
  }
}

function* onSignUpSuccess() {
  yield takeLatest(
    userActionTypes.SIGN_UP_SUCCESS,
    signUpSuccessAsync
  )
}

export default function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onCheckUserSession),
    call(onSignOutStart),
    call(onSignUpStart),
    call(onSignUpSuccess)
  ])
}