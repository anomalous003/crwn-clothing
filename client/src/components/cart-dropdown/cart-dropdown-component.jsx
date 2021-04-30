import React from 'react'
import './cart-dropdown.styles.scss'

import CustomButton from '../custom-button/custom-button-component'
import CartItem from '../cart-item/cart-item-component'

import {toggleCartDropdown} from '../../redux/cart/cart-actions'

import { connect } from 'react-redux'
import { selectCartItems } from '../../redux/cart/cart-selectors'
import { createStructuredSelector } from 'reselect'
import { useHistory } from "react-router-dom";

const CartDropdown = ({ cartItems, dispatch }) => {
  const history = useHistory();

  return (
    <div className='cart-dropdown'>
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map(item => <CartItem key={item.id} item={item} />)
        ) : <span className="empty-cart">Your Cart is Empty</span>}
      </div>
      <CustomButton onClick={() => {
        history.push('/checkout')
        dispatch(toggleCartDropdown())
      }}>GO TO CHECKOUT</CustomButton>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
})


export default connect(mapStateToProps)(CartDropdown)
