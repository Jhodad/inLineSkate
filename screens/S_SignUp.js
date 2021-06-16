import React, { useState } from 'react';
import { Alert } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';
import { firebase } from '../firebase/fire.js';



const S_SignUp = ({ navigation }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [userName, setUserName] = useState();
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();

    const handleSignUp = async () => {

        if (!userName && !firstName && !lastName) {
            console.log('one of them is empty');
        } else {
            console.log("they're all filled")
            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then((data) => {
                    registerToDB(data);
                    navigation.navigate('SignIn');
                })
                .catch(error => {
                    switch (error.code) {
                        case "auth/email-already-in-use":
                            showErrorAlert("Email already exists");
                            break;

                        case "auth/invalid-email":
                            showErrorAlert("Invalid eMail");
                            break;

                        case "auth/operation-not-allowed":
                            showErrorAlert("Email/Password not enabled");
                            break;

                        case "auth/weak-password":
                            showErrorAlert("Weak password");
                            break;

                        default:
                            showErrorAlert(error.message);
                    }
                })
        }


    }




    const showErrorAlert = (errorReceived) => {
        Alert.alert(
            "ERROR:",
            JSON.stringify(errorReceived),
            [
                {
                    text: "Cancel",
                    onPress: () => Alert.alert("Cancel Pressed"),
                    style: "cancel",
                },
            ],
            {
                cancelable: true,
                onDismiss: () =>
                    Alert.alert(
                        "This alert was dismissed by tapping outside of the alert dialog."
                    )
            }
        )
    };

    const registerToDB = (capturedUser) => {
        console.log("=========== AQUI:", capturedUser.user);
        if (capturedUser.user) {
            if (capturedUser.user.uid) {
                console.log('userID yeppp', JSON.stringify(capturedUser.user.uid));
                // Add to Database
                firebase.database().ref('/Users/' + capturedUser.user.uid).set({
                    userID: capturedUser.user.uid,
                    displayName: userName,
                    email: email,
                    firstName: firstName,
                    lastName: lastName,
                }).then((capturedUser) => {
                    console.log('data ', JSON.stringify(capturedUser))
                }).catch((error) => {
                    console.log('error ', JSON.stringify(error))
                })
                //Update user in Authentication
                capturedUser.user.updateProfile({
                    displayName: userName
                })
                console.log('creation in users succesfull')
            } else {
                console.log('userID empty!', JSON.stringify(capturedUser.user.uid))
            }
        } else {
            console.log('USER is empty!')
        }

    };

    return <>

        <Input
            label="Display name"
            onChangeText={setUserName}
        />

        <Input
            label="First name"
            onChangeText={setFirstName}
        />

        <Input
            label="Last name"
            onChangeText={setLastName}
        />

        <Input
            label="Email"
            onChangeText={setEmail}
        />

        <Input
            label="Password"
            onChangeText={setPassword}
            secureTextEntry
        />

        {
            error ?
                <Text style={{ color: 'red' }}> {error} </Text>
                : null
        }

        <Button title="Sign Up" onPress={handleSignUp} />

        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
            <Text>Already have an account? Sign In</Text>
        </TouchableOpacity>

    </>
};

export default S_SignUp;