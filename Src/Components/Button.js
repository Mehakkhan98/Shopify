import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { Entypo } from '@expo/vector-icons'; 
import { StyleSheet, Text, View,TextInput ,TouchableOpacity} from 'react-native';
import { Feather } from '@expo/vector-icons'; 
import { Actions } from 'react-native-router-flux';

export default function App(props) {
  
    const Login=()=>{
        Actions.Home();
      }
      const Register=()=>{
        Actions.Home();
      }
  return (
   <View>
       <TouchableOpacity onPress={()=>{props.title}}
       style={{height:50,width:400,fontSize:20,alignItems:'center',
   // ,backgroundColor:'#0048B7',
       backgroundColor:'#FFFFFF',
    borderRadius:5}}>
          <Text style={{
          //  color:'#FFFFFF',
            color:'#0048B7',
          fontSize:20,marginTop:10,fontWeight:'bold'}}>{props.title}</Text> 
          </TouchableOpacity>
      
     
    
   

    

    </View>
  );
}


