import React from 'react'
import './cart-item.styles.scss'

const CartItem = ({ item: { name, imageUrl, price, quantity } }) => {
  return (
    <div className='cart-item'>
      <img src={imageUrl} alt="item" />
      <div className="item-details">
        <span className="name">{name}</span>
        <span>{quantity} x ₹{price * 20}</span>
      </div>
    </div>
  )
}

export default React.memo(CartItem)
