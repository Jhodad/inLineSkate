import React from "react";
import { View, StyleSheet } from "react-native";
import { DrawerItems } from "react-navigation-drawer";
import { TouchableOpacity } from 'react-native';
import { Button, Text } from 'react-native-elements';
import { firebase } from '../firebase/fire.js';
import { useNavigation } from '@react-navigation/native';

const navigation = useNavigation();

export const drawerContent = (props) => (
  
  <View style={[styles.container]}>
    <DrawerItems
      activeBackgroundColor={"black"}
      activeTintColor={"white"}
      iconContainerStyle={styles.icons}
      {...props}
    />
    <Button
            title="Sign out"
            onPress={() => {
                console.log('--------------CRED------')
                console.log(firebase.auth().currentUser)
                firebase.auth().signOut()
                navigation.navigate('SignIn')
                
            }}
        />
  </View>

);

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  icons: {
    width: 30
  }
});

export default drawerContent;