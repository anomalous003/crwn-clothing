import './App.css';

import { Route, Switch, Redirect } from 'react-router-dom'
import React, { Component } from 'react'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import { connect } from 'react-redux'

import HomePage from './pages/homepage/homepage-component.jsx'
import ShopPage from './pages/shop/shop-component'
import Header from './components/header/header-component'
import SignInPage from './pages/sign-in-sign-up/sign-in-sign-up-component'
import setCurrentUser from './redux/user/user-action'

class App extends Component {
  unsubscribe = null

  componentDidMount() {
    const { setCurrentUser } = this.props;
    
    this.unsubscribe = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          })
        })
      } else {
        setCurrentUser(userAuth)
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribe()
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
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);