import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Image,View,Text,StyleSheet,TouchableOpacity} from 'react-native' ;
import Form from '../Components/Form';
import { Ionicons } from '@expo/vector-icons'; 
import TouchableText from '../Components/TouchableOpacity';
import {Actions} from 'react-native-router-flux';
textstyle={position:'absolute',right:10}
export default function App() {
  const About_Us=()=>{
Actions.About()
  }
  const MovetoLogin=()=>{
    Actions.login()
      }
  return (
    
   <View style={styles.container}>
     <StatusBar theme="dark" color="blue"/>
      <TouchableOpacity  onPress={About_Us}style={{position:'absolute',top:15,right:18}}>
      <Ionicons name="ios-help-circle-outline" size={28} 
      color="#FFFFFF" />
      </TouchableOpacity>
     
     <Form type="UPDATE"/>
     
      
     
     
      <TouchableOpacity onPress={MovetoLogin} style={{position:'absolute',bottom:40}}>
        <Text style={{color:'gray',fontSize:20}}>Sign In!?</Text>
      </TouchableOpacity>


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

