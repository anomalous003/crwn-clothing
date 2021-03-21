import './App.css';
import {
  Route,
  Switch
} from 'react-router-dom'

import React, {
  Component
} from 'react'
import HomePage from './pages/homepage/homepage-component.jsx'
import ShopPage from './pages/shop/shop-component'
import Header from './components/header/header-component'
import SignInPage from './pages/sign-in-sign-up/sign-in-sign-up-component'
import {
  auth,
  createUserProfileDocument
} from './firebase/firebase.utils'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentUser: null
    }
  }

  unsubscribe = null

  componentDidMount() {
    this.unsubscribe = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        await userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
        })
      } else {
        this.setState({
          currentUser: userAuth
        })
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  render() {
    return (
      <div>
        <Header currentUser={
            this.state.currentUser
        } />
       <Switch>
          <Route
            exact path="/"
            component={HomePage} />
          <Route
            exact path="/shop"
            component={ShopPage} />
          <SignInPage
            exact path="/sign-in"
            component={SignInPage}/> 
        </Switch> 
      </div>
    )
  }
}

export default App;