import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { Entypo } from '@expo/vector-icons'; 
import { StyleSheet, Text, View,TextInput ,TouchableOpacity} from 'react-native';
import { Feather } from '@expo/vector-icons'; 
import { Actions } from 'react-native-router-flux';

export default function App(props) {
  
   
  return (
   <View>
       <TouchableOpacity onPress={()=>{props.Method()}}
       style={{height:60,width:400,fontSize:20,alignItems:'center',
       backgroundColor:'#03a9f4',marginVertical:5,
    borderRadius:5}}>
          <Text style={{
           color:'#FFFFFF',
          fontSize:20,marginTop:15,fontWeight:'bold'}}>{props.title}</Text> 
          </TouchableOpacity>
      
     
    
   

    

    </View>
  );
}


