import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
//import Header from './components/header';
//import Navigator from './routes/drawer';
import { AuthStack } from './routes/Stacks';
import { DrawerComponent_User, DrawerComponent_Member, DrawerComponent_Manager, DrawerComponent_Admin } from './routes/NavDrawer';
import { firebase } from './firebase/fire';

//CHECK userType inside firebase realitme database
firebase.auth().signOut();

export default function App() {

  const [logged, setLogged] = useState('');
  const [creds, setCreds] = useState('');


  //Check and retrieve if user is logged in
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      userCreds(user)
      setLogged(true);
      console.log('user logged')
    } else {
      setCreds('no user');
      setLogged(false);
      console.log('user logged out')
    }
  });

  //retrieve user type from database
  const userCreds = (data) => {
    //console.log(JSON.stringify(data))
    firebase.database()
      .ref('/Users/' + data.uid + '/type')
      .on('value', function (snapshot) {
        console.log('adentro: ' + creds);
        setCreds(snapshot.val());
      });
  }


  // Use creds to select Navigation options for (userLogged ?) and (userType on database)
  switch (creds) {
    case 'admin':
      console.log('switch admin');
      return (
        <NavigationContainer>
          {
            logged ? (
              <DrawerComponent_Admin />
            ) : (
              <AuthStack />
            )
          }
        </NavigationContainer>
      );
      break;

    case 'manager':
      return (
        <NavigationContainer>
          {
            logged ? (
              <DrawerComponent_Manager />
            ) : (
              <AuthStack />
            )
          }
        </NavigationContainer>
      );
      break;

    case 'member':
      return (
        <NavigationContainer>
          {
            logged ? (
              <DrawerComponent_Member />
            ) : (
              <AuthStack />
            )
          }
        </NavigationContainer>
      );
      break;

    case "user":
      console.log('switch user');
      return (
        <NavigationContainer>
          {
            logged ? (
              <DrawerComponent_User />
            ) : (
              <AuthStack />
            )
          }
        </NavigationContainer>
      );
      break;

    default:
      console.log('default, no user');
      return (
        <NavigationContainer>
          <AuthStack />
        </NavigationContainer>
      );


  }


}
