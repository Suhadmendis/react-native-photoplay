import React from 'react';
import { View } from 'react-native';
import LoginScreen from './src/Screens/LoginScreen';
import { StatusBar } from 'expo-status-bar';

const App = () => {

  return (
    <>
    <StatusBar hidden />
    <LoginScreen />
    </>

  );
};

export default App;
