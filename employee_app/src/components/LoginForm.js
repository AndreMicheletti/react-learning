import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import {
  Container,
  ContainerSection,
  Button,
  InputText,
  Spinner
} from './common';

import { authFormChanged, authLoginRequest } from '../actions';

class LoginForm extends React.Component {
  onButtonPress() {
    const { email, passwd } = this.props;
    this.props.authLoginRequest({ email, passwd });
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner />;
    } else {
      return (
        <Button onPress={this.onButtonPress.bind(this)}>
          Entrar
        </Button>
      );
    }
  }

  render() {
    const { email, passwd, authFormChanged } = this.props;
    const { errorViewStyle, errorTextStyle } = styles;

    return (
      <Container>
        <ContainerSection>
          <InputText
            label="Email"
            placeholder="exemplo@gmail.com"
            onChangeText={(value) => authFormChanged({ prop: 'email', value })}
            value={email}
          />
        </ContainerSection>

        <ContainerSection>
          <InputText
            label="Senha"
            placeholder="passwd"
            onChangeText={(value) => authFormChanged({ prop: 'passwd', value })}
            value={passwd}
            secureTextEntry
          />
        </ContainerSection>

        <View style={errorViewStyle}>
          <Text style={errorTextStyle}>
            {this.props.error}
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
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 5, paddingBottom: 5
  },
  errorTextStyle: {
    color: 'red',
    fontSize: 16
  }
}

const mapStateToProps = state => {
  return { ...state.auth };
}

export default connect(mapStateToProps, { authFormChanged, authLoginRequest })(LoginForm);
