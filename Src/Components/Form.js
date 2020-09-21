import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Entypo } from '@expo/vector-icons'; 
import Input from '../Components/Input';
import Password from '../Components/Password';
import Button from '../Components/Button';
import { Actions } from 'react-native-router-flux';



export default function App(props) {
  const Login=()=>{
    Actions.Home();
  }
  return (
    
       <View>
     
    <Input data="User Name" name="mail" type="Entypo" />
    <Password data="New Password" name="lock" type="Entypo"/>
    {props.type==="UPDATE"?<Password data="Retype-Password" name="lock" type="Entypo"/>:null}
    <Button title={props.type} Method={Login}/>
   
  

    </View>
  );
}


