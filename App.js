import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Header from './components/header';
import Navigator from './routes/drawer';



export default function App(){
  return (
    <NavigationContainer>
    <Navigator />
    </NavigationContainer>
  );
};
