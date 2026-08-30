import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import CustomButton from './src/components/CustomButton';
import React, { useState } from 'react';
import CustomInput from './src/components/CustomInput';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/navigations/StackNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}

