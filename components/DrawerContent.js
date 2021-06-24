import React from 'react';
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import { View, Text } from "react-native";
import { Button, Input } from 'react-native-elements';

import { firebase } from '../firebase/fire.js';
import { DrawerComponent_Admin } from '../routes/NavDrawer.js';

const DrawerContent = (props) => {
    return (

        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
       
            <View>
                <Text>This is a test</Text>
                <Button
                    title="Sign out"
                    onPress={() => {
                        console.log('--------------CRED------')
                        console.log(firebase.auth().currentUser)
                        firebase.auth().signOut()
                    }}
                />

            </View>
        </DrawerContentScrollView>


    );
}

export default DrawerContent;