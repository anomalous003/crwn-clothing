import './App.css';
import { Route, Switch } from 'react-router-dom'

import React, { Component } from 'react'
import HomePage from './pages/homepage/homepage-component.jsx'
import ShopPage from './pages/shop/shop-component'
import Header from './components/header/header-component'
import SignInPage from './pages/sign-in-sign-up/sign-in-sign-up-component'
import { auth } from './firebase/firebase.utils'

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      currentUser: null
    }
  }

  unsubscribe = null

  componentDidMount() {
    this.unsubscribe = auth.onAuthStateChanged(user => {
      this.setState({
        currentUser: user
      })
    })
    
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser }/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <SignInPage exact path="/sign-in" component={SignInPage} />
        </Switch>
    </div>
    )
  }
}

export default App;