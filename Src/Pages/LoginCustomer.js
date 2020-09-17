import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Image,View,Dimensions,ImageBackground,Text,StyleSheet,TouchableOpacity} from 'react-native' ;
import Form from '../Components/Form';
import { Ionicons } from '@expo/vector-icons'; 
import {Actions} from 'react-native-router-flux';
export default function App() {
  const About_Us=()=>{
Actions.About()
  }
  const Register=()=>{
    Actions.register()
      }
  return (
    
   <View style={styles.container}>
     <StatusBar theme="dark" color="blue"/>
      <TouchableOpacity  onPress={About_Us}style={{position:'absolute',top:15,right:18}}>
      <Ionicons name="ios-help-circle-outline" size={28} 
      //color="#0048B7"
      color="#FFFFFF" />
      </TouchableOpacity>
     
     <Form/>
     <TouchableOpacity onPress={Register}style={{position:'absolute',alignItems:'center',bottom:40}}>
       <Text style={{
        // color:'#0048B7',
        color:'#FFFFFF',
         fontSize:18,fontWeight:'bold'}}>Don't have an account yet?</Text>

</TouchableOpacity>
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   // backgroundColor: '#FFFFFF',
    backgroundColor: '#0048B7',

    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color:'#ffff',
    fontSize:24,
    fontWeight:'bold'
  }
});

