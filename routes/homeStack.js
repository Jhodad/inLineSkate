import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import S_SignUp from '../screens/S_SignUp';
import S_SignIn from '../screens/S_SignIn';
import S_News from '../screens/S_News';
import S_Spots from '../screens/S_Spots';
import S_Events from '../screens/S_Events';
import Header from '../components/header';
import { firebase } from '../firebase/fire.js';


const isSignedIn = () => {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            console.log('user logged');
            return true;
        } else {
            console.log('user NOT logged')
            return false;
        }
    });
}

const screenSelector = () => {
    if (isSignedIn) {
        return screensHome;
    } else {
        return screensAuthentication;
    }
}

const screensAuthentication = {
    SignIn: {
        screen: S_SignIn,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} title='Sign In' />,
            }
        }
    },
    SignUp: {
        screen: S_SignUp,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} title='Sign Up' />,
            }
        }
    },
}

const screensHome = {
    News: {
        screen: S_News,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} title='News' />,
            }
        }
    },
    Spots: {
        screen: S_Spots,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} title='Spots' />,
            }
        }
    },
    Events: {
        screen: S_Events,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} title='Events' />,
            }
        }
    },
}


const HomeStack = createStackNavigator(screenSelector(), {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#eee', height: 60 }
    }
});





export default createAppContainer(HomeStack);
