import { createSelector } from 'reselect'

const selectCheckoutState = state => state.checkout

export const selectIsPaymentSuccessful = createSelector(
    [selectCheckoutState],
    checkout => checkout.isPaymentSuccessful
)