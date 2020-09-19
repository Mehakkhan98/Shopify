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
      marginVertical:10,
       borderBottomWidth:1,borderRadius:5,flexDirection:'row',padding:10}}>
      <Entypo name={props.name} size={32} 
      color="#03a9f4" />
    
        <TextInput  placeholder={props.data} 
        secureTextEntry={eye===false?true:false}
        placeholderColor='#666666' style={{marginLeft:10, color:"gray",fontSize:20,width:300}} />
        {eye===false?<Feather onPress={checkeye} name="eye-off" size={24} color="#03a9f4" />:<Feather name="eye"  onPress={checkeye} size={24} color="'#03a9f4" />}
      
     
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
