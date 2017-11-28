import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from './src/components/common';
import LoginForm from './src/components/LoginForm';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import firebase from 'firebase';
import reducers from './src/reducers';

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
    const { containerStyle } = styles;
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <View style={containerStyle}>
          <Header text="Entrar no App" />
          <LoginForm />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor: '#fff',
  }
});
