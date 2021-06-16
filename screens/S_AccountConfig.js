import { Button, Input, Text, View } from 'react-native-elements';
import { firebase } from '../firebase/fire.js';
import React, { useState } from 'react';
import { Alert } from 'react-native';

const S_Home = ({ navigation }) => {

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [emailVerified, setEmailVerified] = useState('');
    const [uid, setUid] = useState('');

    const user = firebase.auth().currentUser;

    const [newUserName, setNewUserName] = useState();


/*
    const retrieveUser = () => {
        if (user != null) {
            setName(user.displayName);
            setEmail(user.email);
            //photoUrl = user.photoURL;
            setEmailVerified(user.emailVerified);
            setUid(user.uid);
        } else {
            Alert.alert('Retrieved user error')
        }

    }
*/
    const updateName = () => {

        if (user != null) {
            user.updateProfile({
                displayName: JSON.stringify(newUserName)
            }).then(function () {
                Alert.alert('Name changed succesfully!')
            }).catch(function (error) {
                console.log({ error });
                Alert.alert('Error occurred!' + JSON.stringify(error))
            })
        } else {
            Alert.alert("User is not logged in")
        }

    }


    signOutUser = async () => {
        try {
            await firebase.auth().signOut();
            Alert.alert('User signed out');
            navigation.navigate('SignIn');
        } catch (e) {
            console.log(e);
        }
    }


    return <>

        <Text>
            WELCOME TO InLINE Skate!
        </Text>

        <Text>
            Spots!
        </Text>

       <Input
            label="Change Display Name to:"
            onChangeText={setNewUserName}
        />

        <Button
            title="Update"
            onPress={() => updateName()}
        />

        <Button
            title="Sign out"
            onPress={() => {
                signOutUser()
                navigation.navigate('SignIn')
            }}
        />

    </>
};



export default S_Home;