import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View,TextInput,Text,Button,TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons'; 
import Input from '../Components/Input';
import Password from '../Components/Password';
import { Actions } from 'react-native-router-flux';


export default function App() {
  const Login=()=>{
    Actions.Home();
  }
  return (
    
       <View>
     
    <Input data="User Name" name="user" />
    <Password data="Password" name="lock"/>
    <TouchableOpacity onPress={Login} style={{height:50,width:400,fontSize:20,alignItems:'center',
   // ,backgroundColor:'#0048B7',
       backgroundColor:'#FFFFFF',
    borderRadius:5}}>
          <Text style={{
          //  color:'#FFFFFF',
            color:'#0048B7',
            fontSize:20,marginTop:10,fontWeight:'bold'}}>Login</Text> 
          </TouchableOpacity>

    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#004B87',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   text:{
//     color:'#ffff',
//     fontSize:24,
//     fontWeight:'bold'
//   }
// });
