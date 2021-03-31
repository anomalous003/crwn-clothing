import React from 'react'
import './checkout-item.styles.scss'
import removeItemFromCart from '../../redux/cart/remove-item-action'

import { connect } from 'react-redux'

const CheckoutItem = ({ cartItem, clearItem }) => {
  const { name, quantity, price, imageUrl } = cartItem;
  return (
    <div className='checkout-item'>
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <span className="arrow">&#10094;</span>
        <span className="value">{quantity}</span>
        <span className="arrow">&#10095;</span>
      </span>
      <span className="price">${price}</span>
      <span className="remove-button" onClick={() => clearItem(cartItem)}>&#10006;</span>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  clearItem: cartItem => dispatch(removeItemFromCart(cartItem))
})

export default connect(null, mapDispatchToProps)(CheckoutItem)