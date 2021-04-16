import './cart-icon.styles.scss'

import React from 'react'
import {toggleCartDropdown} from '../../redux/cart/cart-actions'

import { ReactComponent as ShoppingBag } from '../../assets/shopping-bag.svg'
import { selectCartItemsCount } from '../../redux/cart/cart-selectors'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

const CartIcon = ({ toggleDropdown, itemCount }) => {
  return (
    <div className='cart-icon' onClick={toggleDropdown}>
      <ShoppingBag className='shopping-icon' />
      <span className="item-count">{itemCount}</span>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  toggleDropdown: () => dispatch(toggleCartDropdown())
})

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)
