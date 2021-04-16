import userActionTypes from '../user/user-action.types'

import { takeLatest, all, call, put } from 'redux-saga/effects'
import { clearCart } from './cart-actions'

function* clearCartOnSignOut() {
  yield put(clearCart())
}

function* onSignOutSuccess() {
  yield takeLatest(userActionTypes.SIGN_OUT_SUCCESS,
    clearCartOnSignOut
  )
}

function* cartSagas() {
  yield all([
    call(onSignOutSuccess)
  ])
}

export default cartSagas