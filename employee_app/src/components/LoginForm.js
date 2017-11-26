import React from 'react';
import {
  Container,
  ContainerSection,
  Button,
  InputText
} from './common';

export default class LoginForm extends React.Component {
  render() {
    return (
      <Container>
        <ContainerSection>
          <InputText
            label="Email"
            placeholder="exemplo@gmail.com"
          />
        </ContainerSection>

        <ContainerSection>
          <InputText
            label="Senha"
            placeholder="passwd"
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
