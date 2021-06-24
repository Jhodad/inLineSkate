import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import S_SignUp from '../screens/S_SignUp';
import S_SignIn from '../screens/S_SignIn';
import S_News from '../screens/S_News';
import S_Spots from '../screens/S_Spots';
import S_SpotUploader from '../screens/S_SpotUploader';


const Stack = createStackNavigator();

export const AuthStack = () => {
    return (
        <Stack.Navigator>

            <Stack.Screen
                name="SignIn"
                component={S_SignIn}
                options={{ title: 'SignIn Screen' }}
            />

            <Stack.Screen
                name="SignUp"
                component={S_SignUp}
                options={{ title: 'SignUp Screen' }}
            />

            <Stack.Screen
                name="News"
                component={S_News}
                options={{ title: 'News Screen' }}
            />
        </Stack.Navigator>
    );
}

export const NewsStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="News" 
            component = {S_News}
            options={{ title: 'News Screen' }}/>
        </Stack.Navigator>
    );
}

export const SpotUploaderStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="SpotUploader" 
            component = {S_SpotUploader}
            options={{ title: 'Spot Uploader Screen' }}/>
        </Stack.Navigator>
    );
}

export const SpotsStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Spots" 
            component = {S_Spots}
            options={{ title: 'Spots Screen' }}/>
        </Stack.Navigator>
    );
}
