import React from 'react'
import CartIcon from '../cart-icon/cart-icon-component'
import CartDropdown from '../cart-dropdown/cart-dropdown-component'

import { ReactComponent as Logo } from '../../assets/crown.svg'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCurrentUser } from '../../redux/user/user-selectors'
import { selectCartHidden } from '../../redux/cart/cart-selectors'
import { signOutStart } from '../../redux/user/user-action'
import { Link } from 'react-router-dom';

import './header.styles.scss'

const Header = ({ currentUser, hidden, signOutStart }) => {
  return (
    <div className='header'>
      <Link className='logo-container' to='/'>
        <Logo />
      </Link>
      <div className='options'>
        <Link className='option' to='/shop'>
          SHOP
        </Link>
        <Link className='option' to='/contact'>
          CONTACT
        </Link>
        {currentUser ?
          (<Link to='/' className='option' as='div' onClick={signOutStart}>
            SIGN OUT
          </Link>)
          : (<Link className='option' to='/sign-in'>
            SIGN IN
          </Link>)}
          <CartIcon/>
      </div>
      {hidden ? null : (<CartDropdown />)}
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
})

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)