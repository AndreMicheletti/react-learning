import React from 'react'
import { View, Text } from 'react-native'

import { Button, Container, ContainerSection, InputText, Spinner } from './common'
import firebase from 'firebase'

export default class LoginForm extends React.Component {

  state = this.getInitialState()

  getInitialState() {
    return ({
      email: '', pass: '', error: '', loading: false
    });
  }

  onButtonPress() {
    const { email, pass } = this.state;
    this.setState({ error: '', loading: true })

    firebase.auth().signInWithEmailAndPassword(email, pass)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, pass)
          .then(this.onLoginSuccess.bind(this))
          .catch(this.onLoginFail.bind(this));
      });
  }

  onLoginFail() {
    this.setState({ error: 'Authentication Failed.', loading: false })
  }

  onLoginSuccess() {
    this.setState(this.getInitialState())
  }

  renderButton() {
    if (this.state.loading) {
      return (
        <Spinner />
      );
    }

    return (
      <Button text="Login" onPress={this.onButtonPress.bind(this)} />
    );
  }

  render() {
    return (
      <Container>
        <ContainerSection>
          <InputText
            value={this.state.email}
            onChangeText={text => this.setState({ email: text })}
            placeholder='example@gmail.com'
            label="Email"
          />
        </ContainerSection>

        <ContainerSection>
          <InputText
            value={this.state.pass}
            onChangeText={text => this.setState({ pass: text })}
            placeholder='yourSecretPassword'
            secureTextEntry
            label="Password"
          />
        </ContainerSection>

        <View style={styles.errorViewStyle}>
          <Text style={styles.errorTextStyle}>
            {this.state.error}
          </Text>
        </View>

        <ContainerSection>
          {this.renderButton()}
        </ContainerSection>
      </Container>
    );
  }
}

const styles = {
  errorViewStyle: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  errorTextStyle: {
    paddingTop: 3,
    paddingBottom: 3,
    fontSize: 16,
    color: 'red',
    alignSelf: 'center',
    justifyContent: 'center'
  }
};
