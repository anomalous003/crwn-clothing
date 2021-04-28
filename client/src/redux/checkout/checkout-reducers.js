import actionTypes from './checkout.actions-types'

const initialState = {
    isPaymentSuccessful: null
}

const checkoutReducer= (state = initialState, { type, payload }) => {
    switch (type) {
    case actionTypes.PAYMENT_SUCCESS:
        case actionTypes.PAYMENT_FAILURE:
            return {
                ...state,
                isPaymentSuccessful: payload
            }
    default:
        return state
    }
}

export default checkoutReducer;