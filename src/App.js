import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.scss';
import Header from './component/Header/Header';
import Shop from './component/Shop/Shop';
import Review from './component/Review/Review';
import Inventory from './component/Inventory/Inventory';
import NotFound from './component/404/NotFound';
import ProductDetails from './component/ProductDetails/ProductDetails';

function App() {
  return (
    <div id="main">
    <Header></Header>
    <Router>
      <Switch>
        <Route path="/shop">
            <Shop></Shop>
        </Route>
        <Route path="/review">
          <Review></Review>
        </Route>
          <Route path="/Inventory">
          <Inventory></Inventory>
        </Route>
        <Route exact path="/">
          <Shop></Shop>
        </Route>
        <Route path="/product/:productKey">
          <ProductDetails></ProductDetails>
        </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
