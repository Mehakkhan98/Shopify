import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Login from '../Pages/LoginCustomer';
import Home from '../Pages/Home';
import About from '../Pages/About';
import  Register from '../Pages/RegisterCustomer';

const Routes = () => (
   <Router>
      <Scene key = "root">
         <Scene key = "login" component = {Login} title = "Shopify" initial = {true} />
         <Scene key = "register" component = {Register} title = "Register" />
         <Scene key = "Home" component = {Home} title = "Home" />
         <Scene key = "About" component = {About} title = "About Us" />
      </Scene>
   </Router>
)
export default Routes