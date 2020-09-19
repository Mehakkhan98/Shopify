import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { Entypo } from '@expo/vector-icons'; 
import { StyleSheet, Text, View,TextInput } from 'react-native';
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
      <View style={{height:50,width:400,
    
     borderBottomColor:'#03a9f4',
      marginVertical:15,
       borderBottomWidth:1,borderRadius:5,flexDirection:'row',padding:10}}>
         {props.type==="Entypo"? <Entypo name={props.name} size={32}  color="#03a9f4"/> : <Feather name={props.name}  color="#03a9f4" size={28} />}
      
      {/* //color="#0048B7"
      color="#FFFFFF" /> */}
      
       
        <TextInput  placeholder={props.data} 
        secureTextEntry={false}
        placeholderColor='#666666' style={{marginLeft:10, color:"gray",fontSize:20,width:300}} />
        
      
     
      </View>
   

    

    </View>
  );
}


