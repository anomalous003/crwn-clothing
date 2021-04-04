import React from 'react'
import StripeCheckout from 'react-stripe-checkout';

const StripButton = ({ price }) => {
  const onToken = token => {
    console.log(token);
    alert("Your Payment was Successful")
  }

  const priceForStripe = price * 100,
    publishableKey = 'pk_test_51Ic7g0SHtgDZBOhuTLT6OOtFcEwQyjYvCqVCImWPE3z7atqL9MgcQ7UZuZHZ1ahgQtyYwIF6p55We4Mg5dwaGWzN00hWaEdhE7'

  return (
    <StripeCheckout
      name='Clothing House Ltd.'
      description={`Your total is $${price}`}
      label='Pay Now'
      image='https://svgshare.com/i/CUz.svg'
      shippingAddress
      billingAddress
      amount={priceForStripe}
      token={onToken}
      panelLabel={`Pay Now`}
      stripeKey={publishableKey}
    />

  )
}

export default StripButton
