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
     // borderColor:'#0048B7',
     borderColor:'#FFFFFF',
      marginVertical:10,
       borderWidth:1,borderRadius:5,flexDirection:'row',padding:10}}>
      <Entypo name={props.name} size={28} 
      //color="#0048B7"
      color="#FFFFFF" />
      
       
        <TextInput  placeholder={props.data} 
        secureTextEntry={false}
        placeholderColor='#666666' style={{marginLeft:10, color:"#FFFFFF",fontSize:20,width:300}} />
        
      
     
      </View>
   

    

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
