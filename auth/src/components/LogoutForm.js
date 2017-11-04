import React from 'react'
import { View } from 'react-native'

import { Container, ContainerSection, Button } from './common'

export default class LogoutForm extends React.Component {

  render() {
    return (
      <ContainerSection>
        <Button text='Logout' onPress={this.props.onButtonPress} />
      </ContainerSection>
    );
  }
}
