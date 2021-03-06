import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  Button
} from 'react-native';

import CardStack, { Card } from 'react-native-card-stack-swiper';
import { scale, verticalScale, } from 'react-native-size-matters';


export default class CardScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reads0: '',
            reads1: '',
            reads2: '',
            text: '',
            input: '',
        }
    }

    doAction0 = () => {
        this.setState({reads0: 'AAA'})
    }
    doDelete0 = () => {
        this.setState({reads0: ''})
    }
    doAction0 = () => {
        this.setState({reads1: 'BBB'})
    }
    doDelete0 = () => {
        this.setState({reads1: ''})
    }
    doAction0 = () => {
        this.setState({reads2: 'CCC'})
    }
    doDelete0 = () => {
        this.setState({reads2: ''})
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <CardStack
                    style={styles.content}
                    renderNoMoreCards={() => <Text style={{fontWeight:'700', fontSize:18, color:'gray'}}>No more cards :(</Text>}
                    ref={swiper => {
                    this.swiper = swiper
                    }}
                    onSwiped={() => console.log('onSwiped')}
                    onSwipedLeft={() => console.log('onSwipedLeft')}
                    loop={true}
                    >
                    <Card style={[styles.card, styles.card1]}>
                        <View style={[styles.cardBase, styles.cbbc0]}>
                            <View style={styles.read}>
                            <Text style={styles.readText}>{this.state.reads0}</Text>
                            </View>
                            <View style={styles.photoFlame}>
                            <Text　style={{fontSize: 70}}>{this.props.word}</Text>
                            </View>
                            <View style={[styles.cardButtonBase]}>
                            <TextInput
                              placeholder="write here..." 
                              value={this.state.text}
                              onChangeText={(text) => this.setState({text: text})}
                             />
                            <Button
                                title="Button1"
                                // onPress={()=> this.props.onAddToDo(this.state.inputText)}
                                // onPress={() => this.setState({text: ""})}
                                onPress={this.doAction.bind(this)}
                            />
                            </View>
                        </View>
                     </Card>
                     <Card style={[styles.card, styles.card1]}>
                        <View style={[styles.cardBase, styles.cbbc0]}>
                            <View style={styles.read}>
                            <Text style={styles.readText}>{this.state.reads0}</Text>
                            </View>
                            <View style={styles.photoFlame}>
                            {/* <Image source={require("../assets/images/Cars/Bus.jpg")}/> */}
                            </View>
                            <View style={[styles.cardButtonBase]}>
                            <TouchableOpacity style={styles.cardButton} onPress={this.doAction0} >
                                <Text style={styles.cardText} >読み</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.cardButton} onPress={this.doDelete0} >
                                <Text style={styles.cardText} >隠す</Text>
                            </TouchableOpacity>
                            </View>
                        </View>
                     </Card>
                     <Card style={[styles.card, styles.card1]}>
                        <View style={[styles.cardBase, styles.cbbc0]}>
                            <View style={styles.read}>
                            <Text style={styles.readText}>{this.state.reads0}</Text>
                            </View>
                            <View style={styles.photoFlame}>
                            {/* <Image source={require("../assets/images/Cars/Bus.jpg")}/> */}
                            </View>
                            <View style={[styles.cardButtonBase]}>
                            <TouchableOpacity style={styles.cardButton} onPress={this.doAction0} >
                                <Text style={styles.cardText} >読み</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.cardButton} onPress={this.doDelete0} >
                                <Text style={styles.cardText} >隠す</Text>
                            </TouchableOpacity>
                            </View>
                        </View>
                     </Card>
                </CardStack>
                <View style={styles.footer}>
                <View style={styles.buttonContainer}>
                <TouchableOpacity style={[styles.button,styles.red]} onPress={()=>{
                this.swiper.swipeLeft();
                }}>
                {/* <Image source={require('./assets/red.png')} resizeMode={'contain'} style={{ height: 62, width: 62 }} /> */}
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button,styles.orange]} onPress={() => {
                this.swiper.goBackFromLeft();
                }}>
                {/* <Image source={require('./assets/back.png')} resizeMode={'contain'} style={{ height: 32, width: 32, borderRadius: 5 }} /> */}
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button,styles.green]} onPress={()=>{
                this.swiper.swipeRight();
                }}>
                {/* <Image source={require('./assets/green.png')} resizeMode={'contain'} style={{ height: 62, width: 62 }} /> */}
                </TouchableOpacity>
                </View>
                </View>
            </View>
        )
    }

    doAction = () => {
      this.setState({text: ''});
      this.props.onAddToDo(this.state.text)
    }
}


const styles = StyleSheet.create({
    base: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
      },
    content: {
        flex: 6,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardBase: {
        width: scale(320),
        height: verticalScale(520),
        padding: scale(5),
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        borderWidth: 5,
        borderRadius: 10,
        borderColor: 'lightskyblue',
      },
      read: {
        flexDirection: 'row',
        flex: 1,
        margin: 7,
        width: scale(270),
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
      },
      readText: {
        fontSize: scale(30),
      },
      photoFlame: {
        flex: 6,
        backgroundColor: 'white',
        width: scale(280),
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 5,
        borderRadius: 10,
        borderColor: 'white',
        marginTop: 15,
      },
      cardButtonBase: {
        flexDirection: 'row',
        flex: 1,
        width: scale(280),
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: 10,
        backgroundColor: 'skyblue'
      },
      cbbc0: {
        backgroundColor: 'skyblue',
      },
      cbbc1: {
        backgroundColor: 'skyblue',
      },
      cardButton: {
        height: scale(35),
        width: scale(90),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'skyblue',
        borderWidth: 2,
        borderRadius: 30,
        borderColor: 'white',
        flexDirection: 'row',
        
      },
      cardText: {
        fontSize: scale(20),
        color: 'white',
      },
  
     footer: {
         flex: 1,
         justifyContent: 'center',
         alignItems: 'center',
         backgroundColor: null,
    },
    buttonContainer: {
        width: 220,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    button: {
        shadowColor: 'rgba(0,0,0,0.20)',
        shadowOffset: {
          width: 0,
          height: 1
        },
        shadowOpacity:0.5,
        backgroundColor: 'skyblue',
        alignItems:'center',
        justifyContent:'center',
        zIndex: 0,
    },
    orange:{
        width:55,
        height:55,
        borderWidth:6,
        borderColor:'lightskyblue',
        borderWidth:4,
        borderRadius: 30,
        marginTop: 0,
      },
      green:{
        width:75,
        height:75,
        backgroundColor:'#fff',
        borderRadius:75,
        borderWidth:6,
        borderColor:'lightskyblue',
      },
      red:{
        width:75,
        height:75,
        backgroundColor:'#fff',
        borderRadius:75,
        borderWidth:6,
        borderColor:'lightskyblue',
      },
      footerText: {
        fontSize: scale(14),
        color: 'black',
      },
      lastCard: {
        fontSize: scale(50),
        color: 'skyblue',
      }
  });
  