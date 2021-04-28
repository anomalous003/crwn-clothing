import './App.css';

import React, { useEffect } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import { selectCurrentUser } from './redux/user/user-selectors'
import { checkUserSession } from './redux/user/user-action'
import { updateFirestoreCartItems } from './redux/cart/cart-actions'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import {selectCartItems} from './redux/cart/cart-selectors'

import HomePage from './pages/homepage/homepage-component.jsx'
import ShopPage from './pages/shop/shop-component'
import Header from './components/header/header-component'
import SignInPage from './pages/sign-in-sign-up/sign-in-sign-up-component'
import CheckoutPage from './pages/checkout/checkout-page-component'

const App = ({ checkUserSession, currentUser, cartItems,updateFirestoreCartItems }) => {
  
  useEffect(() => {
    checkUserSession()   
  }, [checkUserSession])

  useEffect(() => {
    if (currentUser) return updateFirestoreCartItems(cartItems)
  }, [cartItems, currentUser, updateFirestoreCartItems])

  
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} /> 
        <Route path="/shop" component={ShopPage} />
        <Route path="/sign-in" render={() => currentUser ? <Redirect to='/' /> : <SignInPage />} />
        <Route exact path='/checkout' component={ CheckoutPage }/>
      </Switch>
    </div>
  )   
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  cartItems: selectCartItems
})

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession()),
    updateFirestoreCartItems: cartItems => dispatch(updateFirestoreCartItems(cartItems))

})

export default connect(mapStateToProps, mapDispatchToProps)(App);