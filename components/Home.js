import React from "react";
import {
    Text,
    View,
    Button,
    TextInput,
  } from 'react-native';
import styles from "../styles/style0";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          inputText: "",
          text: "",
        }
    }
    render() {
      return (
        <View style={styles.container}>
        <Text style={styles.text}>
            {this.props.title}
        </Text>
        <Text style={styles.text}>
            Redux + Persist {this.props.word}
        </Text>
            <TextInput
                placeholder="write here..." 
                value={this.state.inputText}
                onChangeText={(text) => this.setState({inputText: text})}
            />
            <Button
                 title="Button1"
                onPress={()=> this.props.onAddToDo(this.state.inputText)}
            />
        </View>
      );
    }
  }

export default Home;



