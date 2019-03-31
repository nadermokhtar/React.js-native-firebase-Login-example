import React from 'react';
import { StyleSheet, View } from 'react-native';
import firebase from 'firebase';
import {Header} from './src/components/Common';
import LogInForm from './src/components/LogInForm';

export default class App extends React.Component {
  componentWillMount() {
    firebase.initializeApp({
        apiKey: "AIzaSyA6TeV5rv3Gi2Il7CXDpnBTXZ-F6iBhbJ4",
        authDomain: "auth-7ae7e.firebaseapp.com",
        databaseURL: "https://auth-7ae7e.firebaseio.com",
        projectId: "auth-7ae7e",
        storageBucket: "auth-7ae7e.appspot.com",
        messagingSenderId: "146235045664"
    })

  }
  render() {
    return (
      <View style={styles.container}>
        <Header headerText={'Log In'}/>
        <LogInForm/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  },
});
