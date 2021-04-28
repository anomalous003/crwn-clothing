import userActionTypes from '../user/user-action.types'
import cartActionTypes from './cart-action.types'

import { takeLatest, all, call, put } from 'redux-saga/effects'
import { clearCart } from './cart-actions';
import { getCurrentUser } from '../../firebase/firebase.utils'
import { firestore } from '../../firebase/firebase.utils'

function* clearCartOnSignOut() {
  yield put(clearCart())
}

function* onSignOutSuccess() {
  yield takeLatest(userActionTypes.SIGN_OUT_SUCCESS,
    clearCartOnSignOut
  )
}

function* updateFirestoreCartItemsStart({ payload }) {
  try {
    const { uid } = yield getCurrentUser()
    const userRef = yield firestore.doc(`users/${uid}`)
    userRef.update({
      cartItems:payload
    })

  } catch (error) {
    console.log(error.message);
  }
}

function* onUpdateFirestoreCartItems() {
  yield takeLatest(cartActionTypes.UPDATE_FIRESTORE_CART_ITEMS,
    updateFirestoreCartItemsStart
  )
}

function* cartSagas() {
  yield all([
    call(onSignOutSuccess),
    call(onUpdateFirestoreCartItems)
  ])
}

export default cartSagas