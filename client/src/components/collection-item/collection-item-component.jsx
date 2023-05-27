import React, { useState, useCallback } from 'react'

import { createStructuredSelector } from 'reselect'

import "./collection-item.styles.scss";
import CustomButton from '../custom-button/custom-button-component'

import {addItemToCart} from '../../redux/cart/cart-actions'

import { connect } from 'react-redux'

import { selectCurrentUser } from '../../redux/user/user-selectors'
import { selectCartItems } from '../../redux/cart/cart-selectors'

import SignInPopup from '../sign-in-popup/sign-in-popup-component'

const CollectionItem = ({ item, addItem, currentUser, cartItems }) => {
  const [signInStatus, toggleSignIn] = useState(true);
  const [ showPopup, togglePopup ] = useState(true);
  
  const { name, price, imageUrl } = item;
  const existingItem = cartItems.find(carItem => carItem.id === item.id)

  const openPopup = useCallback(() => {
    togglePopup(true);
    toggleSignIn(false)
  }, [])
  const closePopup = useCallback(() => togglePopup(false), []);

  return (
    <div className="collection-item">
      <div
        className='image'
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className="price">₹{price * 20}</span>
      </div>
      {
        existingItem ? (
          <CustomButton className='added-to-cart'>ADDED TO CART</CustomButton>
        ) : <CustomButton className='inverted' onClick={() => addItem(item)} >ADD TO CART</CustomButton>
      }
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  cartItems: selectCartItems
})

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItemToCart(item))
})


export default connect(mapStateToProps, mapDispatchToProps)(CollectionItem)
