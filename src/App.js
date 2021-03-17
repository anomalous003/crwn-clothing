import './App.css';
import HomePage from './pages/homepage/homepage-component.jsx'
import { Route, Switch } from 'react-router-dom'
import ShopPage from './pages/shop/shop-comoponent'


function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;