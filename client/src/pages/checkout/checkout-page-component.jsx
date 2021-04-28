import React from 'react'
import './checkout.styles.scss'

import CheckoutItem from '../../components/checkout-item-component/checkout-item-component'
import StripButton from '../../components/stripe-button/stripe-button-component'
import PaymentSuccessful from '../../components/payment-successful/payment-successful-component'
import PaymentUnsuccessful from '../../components/payment-unsuccessful/payment-unsuccessful-component'

import { clearCart } from '../../redux/cart/cart-actions';

import { connect } from 'react-redux';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart-selectors'
import { selectIsPaymentSuccessful } from '../../redux/checkout/checkout.selectors'
import { createStructuredSelector } from 'reselect'

const CheckoutPage = ({ cartItems, total, clearCart, isPaymentSuccessful }) => {
  return (
    <div className='checkout-page'>
      <div className="checkout-header">
        <span className="header-block">Product</span>
        <span className="header-block">Description</span>
        <span className="header-block">Quantity</span>
        <span className="header-block">Price</span>
        <span className="header-block" onClick={clearCart}>Clear</span>
      </div>
      {
        cartItems.map(cartItem => <CheckoutItem key={cartItem.id} cartItem={cartItem} />)
      }
      <span className="total">TOTAL: ₹{total * 20}</span>
      <div className='test-warning'>
        *Please use the following for test credit card payments*
        <br/>
        VISA: 4242 4242 4242 4242
        <br />
        Exp: 01/24, CVV: 123
      </div>
      <StripButton price={total * 20} />
      {
        isPaymentSuccessful ? <PaymentSuccessful /> : (isPaymentSuccessful === false ? <PaymentUnsuccessful/> : null)
      }
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
  isPaymentSuccessful: selectIsPaymentSuccessful,
})

const mapDispatchToProps = dispatch => ({
  clearCart: () => dispatch(clearCart()),
})

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage)