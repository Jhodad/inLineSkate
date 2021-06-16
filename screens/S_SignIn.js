import React, { useState } from 'react';
import { Alert } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';
import { firebase } from '../firebase/fire.js';



const S_SignIn = ({ navigation }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSignIn = async () => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                navigation.navigate('Home')
            })
            .catch(error => {
                switch (error.code) {
                    case "auth/invalid-email":
                        showErrorAlert("Invalid eMail");
                        break;

                    case "auth/user-disabled":
                        showErrorAlert("User disabled");
                        break;

                    case "auth/user-not-found":
                        showErrorAlert("User has not been registered");
                        break;

                    case "auth/wrong-password":
                        showErrorAlert("Wrong Password");
                        break;

                    default:
                        showErrorAlert("Other error: ", JSON.stringify(error.message));
                }
            })
    }

    const showErrorAlert = (errorReceived) => {
        Alert.alert(
            "ERROR:",
            JSON.stringify(errorReceived),
            {
                cancelable: true,
                onDismiss: () =>
                    Alert.alert(
                        "This alert was dismissed by tapping outside of the alert dialog."
                    )
            }
        )
    };



    return <>
        <Input
            label="Email"
            value={email}
            onChangeText={setEmail}
        />

        <Input
            label="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
        />

        {
            error ?
                <Text style={{ color: 'red' }}> {error} </Text>
                : null
        }

        <Button title="Sign In" onPress={handleSignIn} />

        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text>Don't have an account? Sign Up</Text>
        </TouchableOpacity>

        {/*
        <Button
            title="Sign out"
            onPress={() => {
                console.log('--------------CRED------')
                console.log(firebase.auth().currentUser)
                firebase.auth().signOut()
            }}
        />
        
            <Button
            title="Check user"
            onPress={() => {
                console.log('--------------------')
                console.log(firebase.auth().currentUser)
                firebase.auth().signOut()
            }}
        />
        */}
    </>
};

export default S_SignIn;