import React, { Component } from "react"
import {Switch, Route} from 'react-router-dom'
//import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./components/Navbar"
import Landing from "./components/Landing"
import Home from "./components/Home"
import ProductList from "./components/ProductList"
import Mission from "./components/Mission"
import Details from "./components/Details"
import Cart from "./components/Cart/"
import Default from "./components/Default"
import Modal from './components/Modal'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar /> 
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/details" component={Details} />
          <Route exact path="/cart" component={Cart} />
          {/* <Route path="/home" component={Home} /> */}
          <Route path="/mission" component={Mission} />
          <Route path="/books" component={ProductList} />
          <Route component={Default} />
        </Switch>
        <Modal />
      </React.Fragment>
    );
  }
}

export default App;
