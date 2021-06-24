import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useWindowDimensions } from 'react-native';
import DrawerContent from '../components/DrawerContent';
//import S_SignIn from '../screens/S_SignIn';
import {NewsStack, SpotsStack, SpotUploaderStack} from './Stacks';

const Drawer = createDrawerNavigator();
  


export const DrawerComponent_Admin = () => {
    const dimensions = useWindowDimensions();
    const isLargeScreen = dimensions.width >= 768;
    return (
        <Drawer.Navigator
        
        //drawerType={isLargeScreen ? 'permanent' : 'back'}
        drawerStyle={isLargeScreen ? null : { width: '60%' }}
        overlayColor="transparent"
        drawerContent = {props => <DrawerContent {...props}/>}>
            <Drawer.Screen name = 'News' component = {NewsStack} options={{ title: 'News' }} />
            <Drawer.Screen name = 'Spots' component = {SpotsStack} options={{ title: 'Spots' }}/>
            <Drawer.Screen name = 'Spot Uploader' component = {SpotUploaderStack} options={{ title: 'SpotUploader' }}/>
            {/*<Drawer.Screen name = 'SignIn' component = {S_SignIn} />*/}
        </Drawer.Navigator>
    );
}

export const DrawerComponent_Manager = () => {
    const dimensions = useWindowDimensions();
    const isLargeScreen = dimensions.width >= 768;
    return (
        <Drawer.Navigator
        
        //drawerType={isLargeScreen ? 'permanent' : 'back'}
        drawerStyle={isLargeScreen ? null : { width: '60%' }}
        overlayColor="transparent"
        drawerContent = {props => <DrawerContent {...props}/>}>
            <Drawer.Screen name = 'News' component = {NewsStack} options={{ title: 'News' }} />
            <Drawer.Screen name = 'Spots' component = {SpotsStack} options={{ title: 'Spots' }}/>
            <Drawer.Screen name = 'Spot Uploader' component = {SpotUploaderStack} options={{ title: 'SpotUploader' }}/>
            {/*<Drawer.Screen name = 'SignIn' component = {S_SignIn} />*/}
        </Drawer.Navigator>
    );
}

export const DrawerComponent_Member = () => {
    const dimensions = useWindowDimensions();
    const isLargeScreen = dimensions.width >= 768;
    return (
        <Drawer.Navigator
        
        //drawerType={isLargeScreen ? 'permanent' : 'back'}
        drawerStyle={isLargeScreen ? null : { width: '60%' }}
        overlayColor="transparent"
        drawerContent = {props => <DrawerContent {...props}/>}>
            <Drawer.Screen name = 'News' component = {NewsStack} options={{ title: 'News' }} />
            <Drawer.Screen name = 'Spots' component = {SpotsStack} options={{ title: 'Spots' }}/>
            <Drawer.Screen name = 'Spot Uploader' component = {SpotUploaderStack} options={{ title: 'SpotUploader' }}/>
            {/*<Drawer.Screen name = 'SignIn' component = {S_SignIn} />*/}
        </Drawer.Navigator>
    );
}

export const DrawerComponent_User = () => {
    const dimensions = useWindowDimensions();
    const isLargeScreen = dimensions.width >= 768;
    return (
        <Drawer.Navigator
        
        //drawerType={isLargeScreen ? 'permanent' : 'back'}
        drawerStyle={isLargeScreen ? null : { width: '60%' }}
        overlayColor="transparent"
        drawerContent = {props => <DrawerContent {...props}/>}>
            <Drawer.Screen name = 'News' component = {NewsStack} options={{ title: 'News' }} />
            <Drawer.Screen name = 'Spots' component = {SpotsStack} options={{ title: 'Spots' }}/>
            {/*<Drawer.Screen name = 'SignIn' component = {S_SignIn} />*/}
        </Drawer.Navigator>
    );
}

