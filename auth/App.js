import React from 'react';
import { View } from 'react-native';

import LoginForm from './src/components/LoginForm'
import LogoutForm from './src/components/LogoutForm'
import { Header, Spinner } from './src/components/common'

import firebase from 'firebase'

export default class App extends React.Component {

  state = { loggedIn: null }

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyAYCz9Zebe5sPf3axQcuE1VYMXFysZvOE4",
      authDomain: "auth-app-a8eb8.firebaseapp.com",
      databaseURL: "https://auth-app-a8eb8.firebaseio.com",
      projectId: "auth-app-a8eb8",
      storageBucket: "auth-app-a8eb8.appspot.com",
      messagingSenderId: "544808949659"
    });

    firebase.auth().onAuthStateChanged(user => this.authStateChanged(user));
  }

  authStateChanged(user) {
    if (user) {
      this.setState({ loggedIn: true });
    } else {
      this.setState({ loggedIn: false });
    }
  }

  renderMain() {
    if (this.state.loggedIn == true) {
      return (
        <LogoutForm onButtonPress={() => firebase.auth().signOut()}/>
      );
    } else if (this.state.loggedIn == null) {
      return (
        <View style={{ marginTop: 20 }}>
          <Spinner size='large' />
        </View>
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
