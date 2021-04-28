import actionTypes from './checkout.actions-types'

export const paymentSuccessful = payload => ({
    type: actionTypes.PAYMENT_SUCCESS,
    payload
})

export const paymentUnsuccessful = payload => ({
    type: actionTypes.PAYMENT_FAILURE,
    payload
})