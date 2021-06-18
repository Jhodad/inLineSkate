import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import S_SignUp from '../screens/S_SignUp';
import S_SignIn from '../screens/S_SignIn';
import Header from '../components/header';

const screens = {
    SignIn: {
        screen: S_SignIn,
        navigationOptions: {
            headerTitle: () => <Header />,
        }
    },
    SignUp: {
        screen: S_SignUp,
        navigationOptions: {
            headerTitle: () => <Header />,
        }
    },
}

const regStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#eee', height: 60 }
    }
});

export default createAppContainer(regStack);
