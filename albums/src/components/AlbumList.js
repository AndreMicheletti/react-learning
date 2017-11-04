import React from 'react'
import { ScrollView, Text } from 'react-native'
import axios from 'axios'

import {Container} from './Container'
import {ContainerSection} from './ContainerSection'
import {Button} from './Button'

export default class AlbumList extends React.Component {

  state = { albums: [
    {
      title: "Album number 1",
      artist: 'My Artist'
    },
    {
      title: "Animals",
      artist: 'Pink Floyd'
    },
  ]};

  componentWillMount() {
    // axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    //   .then(response => this.setState({ albums: response.data }));
  }

  renderAlbums() {
    return this.state.albums.map((album) => {
      return (
        <Container key={album.title}>
          <ContainerSection>
            <Text>Hello World!</Text>
          </ContainerSection>
          <ContainerSection>
            <Button text='Click Me!' />
          </ContainerSection>
        </Container>
      );
    });
  }

  render() {
    console.log(this.state.albums);
    return (
      <ScrollView style={styles.containerStyle}>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

const styles = {
  containerStyle: {
    paddingTop: 10
  }
}
