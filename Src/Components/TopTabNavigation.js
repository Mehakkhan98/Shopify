import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

function Bags() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Bags Collection</Text>
    </View>
  );
}

function Western_Wear() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Western Wear Collection</Text>
    </View>
  );
}
function Jewellary() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Jewellary Collection </Text>
      </View>
    );
  }
  function Accessories() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Accessories</Text>
      </View>
    );
  }

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
   
      <Tab.Navigator
      activeTintColor="#03a9f4">
        <Tab.Screen name="Bags" component={Bags} />
        <Tab.Screen name="Western Wear" component={Western_Wear} />
        <Tab.Screen name="Jewellary" component={Jewellary} />
        <Tab.Screen name="Accessories" component={Accessories} />
      </Tab.Navigator>
   
  );
}
