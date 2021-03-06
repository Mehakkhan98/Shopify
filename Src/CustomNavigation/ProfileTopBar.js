import * as React from 'react';
import { Text, View ,StyleSheet,StatusBar,TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 
import {Actions} from 'react-native-router-flux';
import Logo from '../Component/Logo'
import TouchableText from '../Component/TouchableText';
import { Entypo } from '@expo/vector-icons'; 
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Form from '../Component/Form'
import WishList from '../Component/WishList';
import RecievedOrders from '../Component/CollectedOrder';
import Locations from '../Component/AddLocation';
function Profile() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor:'#FFFFFF' }}>
    <Text>My Cart</Text>
  </View>
        
    
  );
}

function My_Order() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor:'#FFFFFF' }}>
      <RecievedOrders/>
    </View>
  );
}
function Wish_List() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor:'#FFFFFF' }}>
       <WishList/>
      </View>
    );
  }
  function locations() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor:'#FFFFFF' }}>
        <Locations/>
      </View>
    );
  }

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
      <Tab.Navigator>
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="Received" component={My_Order} />
        <Tab.Screen name="WishList" component={Wish_List} />
        <Tab.Screen name="Location" component={locations} />
      </Tab.Navigator>
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
  
  