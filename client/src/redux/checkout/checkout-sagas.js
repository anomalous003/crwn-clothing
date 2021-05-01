import { takeLatest, all, call, put } from 'redux-saga/effects'
import actionTypes from './checkout.actions-types'
import { clearCart } from '../cart/cart-actions'

function* clearCartOnPayment() {
  try {
    yield put(clearCart())
  } catch (error) {
    
  }
}

function* onPaymentSuccess() {
  yield takeLatest(actionTypes.PAYMENT_SUCCESS,
    clearCartOnPayment
  )
}

function* checkoutSagas() {
  yield all([
    call(onPaymentSuccess)
  ])
}

export default checkoutSagas