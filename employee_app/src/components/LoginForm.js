import React from 'react';
import { connect } from 'react-redux';
import {
  Container,
  ContainerSection,
  Button,
  InputText
} from './common';

import { formChanged } from '../actions';

class LoginForm extends React.Component {
  render() {
    const { email, password, formChanged } = this.props;
    return (
      <Container>
        <ContainerSection>
          <InputText
            label="Email"
            placeholder="exemplo@gmail.com"
            onChangeText={(value) => formChanged({ prop: 'email', value })}
            value={email}
          />
        </ContainerSection>

        <ContainerSection>
          <InputText
            label="Senha"
            placeholder="passwd"
            onChangeText={(value) => formChanged({ prop: 'passwd', value })}
            value={password}
            secureTextEntry
          />
        </ContainerSection>

        <ContainerSection>
          <Button>Entrar</Button>
        </ContainerSection>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return { ...state.auth };
}

export default connect(mapStateToProps, { formChanged })(LoginForm);
