import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import Input from '../Components/Input';
import Password from '../Components/Password';
import Button from '../Components/Button';
import { Actions } from 'react-native-router-flux';
import Logo from '../Components/Logo'
import { Entypo } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
export default function App() {
  const MovetoLogin=()=>{
    Actions.login();
  }
  
  return (
    <View style={styles.container}>
     <View style={{position:'absolute',top:50}}>
       <Logo />
      </View>
     <Input data="User Name" name="user" type="Entypo"/>
     <Input  data="Phone #" name="phone-call" type="Feather"/>
     <Input  data="E-mail" name="mail" type="Feather"/>
     <Password data="Password" name="lock" type="Entypo"/>
     <Button title="REGISTER"  Method={MovetoLogin}/>
     <View style={{position:'absolute',bottom:40,flexDirection:'row',left:22}}>
       
       <Text style={{color:'gray',fontSize:20,marginTop:3}}>or Sign In With</Text>
       
 
    <TouchableOpacity style={{marginLeft:50,marginRight:15}}>
     <Entypo name="facebook" size={32} color="#03a9f4" />
     </TouchableOpacity>
    <TouchableOpacity style={{marginHorizontal:20}}>
    <Entypo name="twitter" size={32} color="#03a9f4" />
    </TouchableOpacity>
    <TouchableOpacity style={{marginHorizontal:20}}>
    <AntDesign name="google" size={32} color="red" />
    </TouchableOpacity>
    </View>
    
    
   
     
     
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color:'#ffff',
    fontSize:24,
    fontWeight:'bold'
  }
});
