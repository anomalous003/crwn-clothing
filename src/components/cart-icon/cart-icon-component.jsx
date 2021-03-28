import React from 'react'
import './cart-icon.styles.scss'

import { ReactComponent as ShoppingBag } from '../../assets/shopping-bag.svg'
import { connect } from 'react-redux'
import toggleCartDropdown from '../../redux/cart/cart-dropdown-action'

const CartIcon = ({ toggleDropdown }) => {
  return (
    <div className='cart-icon' onClick={toggleDropdown}>
      <ShoppingBag className='shopping-icon' />
      <span className="item-count">0</span>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  toggleDropdown: () => dispatch(toggleCartDropdown())
})

export default connect(null, mapDispatchToProps)(CartIcon)
