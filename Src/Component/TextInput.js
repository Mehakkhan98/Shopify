import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { Entypo ,MaterialIcons} from '@expo/vector-icons'; 
import { StyleSheet, Text, View,TextInput ,Platform} from 'react-native';
import { Feather } from '@expo/vector-icons'; 

export default function App(props) {
  const [eye, seteye] = useState(false);
  const checkeye=()=>{
if(eye===false)
{
  seteye(true)
}
else{
  seteye(false)
}
  }
  return (
   <View>
      <View 
      style={props.CustomStyle}
       >
         {props.type==="Entypo"? <Entypo name={props.name} size={32}  color="#0faf9a"/> 
         : <Feather name={props.name}  color="#0faf9a" size={28} />}
      
  
        <TextInput onChangeText={(e)=>props.getval(e)}
         placeholder={props.data} 
         clearButtonMode={props.mode}
         minLength={props.min}
         maxLength={props.max}
         value={props.value}
         keyboardType={props.ktype}
        secureTextEntry={false}
        placeholderColor='#666666'
         style={props.textstyle} />
        
      
     
      </View>
   

    

    </View>
  );
}


