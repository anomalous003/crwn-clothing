import React from 'react'
import './checkout.styles.scss'

import CheckoutItem from '../../components/checkout-item-component/checkout-item-component'

import { connect } from 'react-redux'
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart-selectors'
import { createStructuredSelector } from 'reselect'

const CheckoutPage = ({ cartItems, total }) => {
return (
    <div className='checkout-page'>
      <div className="checkout-header">
        <span className="header-block">Product</span>
        <span className="header-block">Description</span>
        <span className="header-block">Quantity</span>
        <span className="header-block">Price</span>
        <span className="header-block"></span>
      </div>
        {
          cartItems.map(cartItem => <CheckoutItem key={cartItem.id} cartItem={cartItem}/>)
        }
      <span className="total">TOTAL: ${total}</span>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage)