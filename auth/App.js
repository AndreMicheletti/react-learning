import React from 'react';
import { View } from 'react-native';

import LoginForm from './src/components/LoginForm'
import LogoutForm from './src/components/LogoutForm'
import { Header } from './src/components/common'

import firebase from 'firebase'

export default class App extends React.Component {

  state = { user: null }

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyAYCz9Zebe5sPf3axQcuE1VYMXFysZvOE4",
      authDomain: "auth-app-a8eb8.firebaseapp.com",
      databaseURL: "https://auth-app-a8eb8.firebaseio.com",
      projectId: "auth-app-a8eb8",
      storageBucket: "auth-app-a8eb8.appspot.com",
      messagingSenderId: "544808949659"
    });

    firebase.auth().onAuthStateChanged(user => this.setState({ user }));
  }

  renderMain() {
    console.log(this.state.user)
    if (this.state.user) {
      return (
        <LogoutForm onButtonPress={() => this.setState({ user: null })}/>
      );
    }

    return (
      <LoginForm />
    );
  }

  render() {
    return (
      <View >
        <Header text='Authentication' />
        {this.renderMain()}
      </View>
    );
  }
}
