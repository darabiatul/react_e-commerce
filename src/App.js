import React, { Component } from 'react';

import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import Cart from './components/Cart';
import Default from './components/Default';
import Details from './components/Details';
import ProductList from './components/ProductList';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route path="/" component={ProductList} />
          <Route path="/Details" component={Details} />
          <Route path="/Cart" component={Cart} />
          <Route component={Default} />
        </Switch>
      </React.Fragment>
    );
  }
}
export default App;
