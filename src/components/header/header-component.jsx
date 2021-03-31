import './header.styles.scss'

import CartIcon from '../cart-icon/cart-icon-component'
import CartDropdown from '../cart-dropdown/cart-dropdown-component'

import { ReactComponent as Logo } from '../../assets/crown.svg'
import { Link } from 'react-router-dom'
import { auth } from '../../firebase/firebase.utils'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCurrentUser } from '../../redux/user/user-selectors'
import { selectCartHidden } from '../../redux/cart/cart-selectors'

const Header = ({ currentUser, hidden }) => {
  return (
    <div className='header'>
      <Link className="logo-container" to='/'>
        <Logo />
      </Link>
      <div className="options">
        <Link className="option" to='/shop'>SHOP</Link>
        <Link className="option" to='/contact'>CONTACT</Link>
        {currentUser ?
          (<div
            className="option"
            onClick={() => auth.signOut()}
          >SIGN OUT</div>)
          : (<Link className="option" to='/sign-in'>SIGN IN</Link>)}
          <CartIcon/>
      </div>
      {hidden ? null : (
        <CartDropdown />
      )}
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header)
