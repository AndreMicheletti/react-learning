import React from 'react';
import { View } from 'react-native';

import LoginForm from './src/components/LoginForm'
import { Header } from './src/components/common'

import firebase from 'firebase'

export default class App extends React.Component {

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyAYCz9Zebe5sPf3axQcuE1VYMXFysZvOE4",
      authDomain: "auth-app-a8eb8.firebaseapp.com",
      databaseURL: "https://auth-app-a8eb8.firebaseio.com",
      projectId: "auth-app-a8eb8",
      storageBucket: "auth-app-a8eb8.appspot.com",
      messagingSenderId: "544808949659"
    });
  }

  render() {
    return (
      <View >
        <Header text='Authentication' />
        <LoginForm />
      </View>
    );
  }
}
