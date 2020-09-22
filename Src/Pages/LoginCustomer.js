import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Image,View,Text,StyleSheet,TouchableOpacity,KeyboardAvoidingView,ScrollView,Platform} from 'react-native' ;
import Form from '../Component/Form';
import { Ionicons } from '@expo/vector-icons'; 
import TouchableText from '../Component/TouchableText';
import { Entypo } from '@expo/vector-icons'; 
import {Actions} from 'react-native-router-flux';
import { FontAwesome5 } from '@expo/vector-icons'; 
import Logo from '../Component/Logo'

export default function App() {
  const About_Us=()=>{
Actions.About()
  }
  const MovetoRegister=()=>{
    Actions.register()
      }
      const MovetoForgetPassword=()=>{
        Actions.Forgetpass();
      }
  return (
    <View style={styles.container}>
       <StatusBar theme="dark" color="blue"/>
     
       
      <TouchableOpacity  onPress={About_Us}style={{position:'absolute',top:15,right:18}}>
      <Ionicons name="ios-help-circle-outline" size={28} 
      color="#03a9f4" />
      </TouchableOpacity>
      <View style={{position:'absolute',top:50}}>
       <Logo />
      </View>
     
     
     {/* <View style={{flexDirection:'row'}}>
       <Text style={{fontSize:24,color:'black'}}>Sign In</Text>
     </View> */}
 
  
    
     
     <Form type="LOGIN"/>
    
  
<View>
<TouchableText
      style={{right:Platform.OS==="ios"?10:0,color:'gray',fontSize:18}}
      title="Forget Password? "
      parentstyle={{marginLeft:230}}
      Move={MovetoForgetPassword}
      />
     
</View>
     
      
     
      <TouchableOpacity onPress={MovetoRegister} style={{position:'absolute',bottom:40,flexDirection:'row'}}>
        <Text style={{color:'gray',fontSize:20}}>Don't have an account yet? </Text>
        <FontAwesome5 name="surprise" size={24} color="gray" />
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

