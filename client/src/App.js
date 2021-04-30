import './App.css';

import React, { useEffect, lazy, Suspense } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import { selectCurrentUser } from './redux/user/user-selectors'
import { checkUserSession } from './redux/user/user-action'
import { updateFirestoreCartItems } from './redux/cart/cart-actions'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import {selectCartItems} from './redux/cart/cart-selectors'

import Header from './components/header/header-component'
import Spinner from './components/spinner/spinner'
import ErrorBoundary from './components/error-boundaries/boundaries'

const HomePage = lazy(() => import('./pages/homepage/homepage-component.jsx')) 
const ShopPage = lazy(() => import('./pages/shop/shop-component')) 
const SignInPage = lazy(() => import('./pages/sign-in-sign-up/sign-in-sign-up-component')) 
const CheckoutPage = lazy(() => import('./pages/checkout/checkout-page-component')) 
const ContactPage = lazy(() => import('./pages/contact/contact-page-component')) 


const App = ({ checkUserSession, currentUser, cartItems, updateFirestoreCartItems }) => {
  
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
        < ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route exact path="/" component={HomePage} /> 
            <Route path="/shop" component={ShopPage} />
            <Route path="/sign-in" render={() => currentUser ? <Redirect to='/' /> : <SignInPage />} />
            <Route exact path='/checkout' component={ CheckoutPage }/>
            <Route exact path='/contact' component={ ContactPage }/>
          </Suspense>
        </ErrorBoundary>
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