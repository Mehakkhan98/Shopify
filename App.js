import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Route from './Src/Routing/Route'
export default function App() {
  return (
   <Route/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#004B87',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color:'#ffff',
    fontSize:24,
    fontWeight:'bold'
  }
});
