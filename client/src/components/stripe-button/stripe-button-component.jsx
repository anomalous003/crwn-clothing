import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios'

const StripButton = ({ price }) => {
  const priceForStripe = price * 100,
    publishableKey = 'pk_test_51Ic7g0SHtgDZBOhuTLT6OOtFcEwQyjYvCqVCImWPE3z7atqL9MgcQ7UZuZHZ1ahgQtyYwIF6p55We4Mg5dwaGWzN00hWaEdhE7'
  
  const onToken = token => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token
      }
    }).then(response => {
      alert('Payment was Successful')
    }).catch(error => {
      alert('Payment was unsuccessful')
    })
  }


  return (
    <StripeCheckout
      name='Clothing House Ltd.'
      description={`Your total is ₹${price}`}
      label='Pay Now'
      image='https://svgshare.com/i/CUz.svg'
      shippingAddress
      billingAddress 
      amount={priceForStripe}
      currency='INR'
      token={onToken}
      panelLabel={`Pay Now`}
      stripeKey={publishableKey}
    />

  )
}

export default StripButton
