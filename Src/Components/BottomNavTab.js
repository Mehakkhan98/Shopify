import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { AntDesign ,Fontisto} from '@expo/vector-icons'; 
import TopBar from '../Components/TopTabNavigation';
function HomeScreen() {
  return (
   <TopBar/>
  );
}

function Hot_Offers() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Hot_Offers!</Text>
    </View>
  );
}
function Search() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Search!</Text>
    </View>
  );
}
function My_CART() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>My Cart</Text>
    </View>
  );
}
function My_Profile() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>My Profile</Text>
    </View>
  );
}
const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
      <Tab.Navigator
      initialRouteName="Home"
      activeColor="#03a9f4"
      inactiveColor="gray"
      barStyle={{ backgroundColor: 'black' }}
      tabStyle={{backgroundColor:'#03a9f4'}}
      >
        <Tab.Screen
         name="Home"
          component={HomeScreen}
         
          options={{
            animationEnabled: true,
            swipeEnabled: true,
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          
            tabBarOptions: {
              showIcon: true,
              showLabel: false,
              tabStyle: {
                  backgroundColor: '#614971'
              }
          }
          }} 
        />
        <Tab.Screen 
        name="Hot Offer"
         component={Hot_Offers}
         options={{
          tabBarLabel: 'Hot Offers',
          tabBarIcon: ({ color, size }) => (
            <Fontisto name="shopping-package" color={color} size={26} />
          ),
          tabBarOptions: {
            showIcon: true,
            showLabel: false,
            tabStyle: {
                backgroundColor: '#614971'
            }
        }}} />
        <Tab.Screen 
        name="My Cart"
         component={My_CART} 
         options={{
          tabBarLabel: 'My Cart',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="shoppingcart" size={26}  color={color}
            />
          ), tabBarOptions: {
            showIcon: true,
            showLabel: false,
            tabStyle: {
                backgroundColor: '#614971'
            }
        }
         
         
        }}
         />
        <Tab.Screen
         name="Search"
          component={Search}
          options={{
            tabBarLabel: 'Search',
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="search1" size={26}  color={color}/>
            
            ),
            tabBarOptions: {
              showIcon: true,
              showLabel: false,
              tabStyle: {
                  backgroundColor: '#614971'
              }
          }}} />
        <Tab.Screen
         name="Profile" 
         component={My_Profile} 
         options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ), tabBarOptions: {
            showIcon: true,
            showLabel: false,
            tabStyle: {
                backgroundColor: '#614971'
            }
        }}}/>
      </Tab.Navigator>
  
  );
}
