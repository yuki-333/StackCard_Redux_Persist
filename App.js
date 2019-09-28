import React, {Component} from 'react';
import { Container, View, Header, Left, Body, Right, Button, Title, Text, Thumbnail } from 'native-base';

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
       image: null,
    }
  }

  showPicker = () => {
    let ImagePicker = require('react-native-image-picker')

    let options = {
      title: '画像を選択',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    }

    ImagePicker.showImagePicker(options, (response)  => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        console.log(response.uri)
        this.setState({image: response.uri})
      }
    });
  }

  render() {
    return (
      <Container>
        <Header>
          <Left />
          <Body>
            <Title>メイン</Title>
          </Body>
          <Right />
        </Header>
        <View>
          <Button small iconRight  transparent primary onPress={this.showPicker}>
            <Text>画像の選択</Text>
          </Button>
          {this.state.image && <Thumbnail square large source={{uri: this.state.image}} />}
        </View>
      </Container>
    );
  }
}
