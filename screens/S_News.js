import { Button, Input, Text, View } from 'react-native-elements';
import { firebase } from '../firebase/fire.js';
import React, { useState } from 'react';
import { Alert } from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';


const S_News = ({ navigation }) => {
    
    const resetHandler = () => {
        navigation.dispatch(StackActions.reset({
            index: 0,
            key: null,
            actions: [NavigationActions.navigate({ routeName: 'SignIn' })]
        }))
    };  

    return <>

        <Text>
            WELCOME TO InLINE Skate!
        </Text>

        


    </>



};



export default S_News;