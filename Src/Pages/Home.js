import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navbar from '../Components/BottomNavTab';

import Drawer from '../Components/Drawer';
export default function App() {
  return (
  
    <Drawer independent={true}/>
  
  );
}


