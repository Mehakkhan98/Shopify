import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import Input from '../Components/Input';
import Password from '../Components/Password';
import Button from '../Components/Button';
import { Actions } from 'react-native-router-flux';
export default function App() {
  const Register=()=>{
    Actions.login();
  }
  
  return (
    <View style={styles.container}>
    
     <Input data="User Name" name="user" type="Entypo"/>
     <Input  data="Phone #" name="phone-call" type="Feather"/>
     <Input  data="E-mail" name="mail" type="Feather"/>
     <Input data="Address" name="home" type="Entypo"/>
     <Password data="Password" name="lock" type="Entypo"/>
     <Password data="Re-Password" name="lock" type="Entypo"/>
     {/* <Button title="Register" Method="Register"/> */}
     <Button title="Register" />
     <TouchableOpacity onPress={Register} style={{position:'absolute',alignItems:'center',bottom:40}}>
       <Text style={{
        // color:'#0048B7',
        color:'#FFFFFF',
         fontSize:18,fontWeight:'bold'}}>Sign In</Text>

</TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#004B87',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color:'#ffff',
    fontSize:24,
    fontWeight:'bold'
  }
});
