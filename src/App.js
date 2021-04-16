import './App.css';

import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import { selectCurrentUser } from './redux/user/user-selectors'
import { checkUserSession } from './redux/user/user-action'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import HomePage from './pages/homepage/homepage-component.jsx'
import ShopPage from './pages/shop/shop-component'
import Header from './components/header/header-component'
import SignInPage from './pages/sign-in-sign-up/sign-in-sign-up-component'
import CheckoutPage from './pages/checkout/checkout-page-component'

class App extends Component {
  componentDidMount() {
    const { checkUserSession } = this.props;
    checkUserSession()
  }
  
  render() {
    const { currentUser } = this.props;
    
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
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);