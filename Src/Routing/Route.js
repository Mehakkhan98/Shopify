import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Login from '../Pages/LoginCustomer';
import Home from '../Pages/Home';
import About from '../Pages/About';
import  Register from '../Pages/RegisterCustomer';
import ForgetPassword from '../Pages/ForgetPassword';

const Routes = () => (
   <Router>
      <Scene key = "root">
         <Scene key = "login" component = {Login} title = "Login" initial = {true} />
         <Scene key = "register" component = {Register} title = "Register" />
         <Scene key = "Home" component = {Home} title = "Home" />
         <Scene key = "About" component = {About} title = "About Us" />
         <Scene key = "Forgetpass" component = {ForgetPassword} title = "Forget Password" />
      </Scene>
   </Router>
)
export default Routes