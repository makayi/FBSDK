import React, { Component } from 'react';
import { TouchableOpacity, View, Image, Text, StyleSheet, Dimensions } from 'react-native';
import storage from '../Model/PosterificStorage';

//set the default dimension
let { height, width } = Dimensions.get("window");

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Image
        resizeMode="cover"
        source={require('./../assets/images/login-splash-bg.jpg')}
        style={styles.splashContainer}
      >
        <Text style={styles.mainTitle}>Posterific!</Text>
        <Text style={styles.subTitle}>Poster making made easy.</Text>
        <TouchableOpacity
          onPress={() => { this.props.navigator.push({name: 'PosterList'}) }}
        >
          <View style={styles.btnGetStarted}>
            <Text style={styles.lblGetStarted}>Get Started</Text>
          </View>
        </TouchableOpacity>
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    height: height,
    width: width,
  },
  mainTitle: {
    fontSize: 72,
    color: 'white'
  },
  subTitle: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    fontSize: 18,
    color: 'white',
    marginBottom: 50
  },
  btnGetStarted: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: 180,
    height: 28,
    backgroundColor: '#4167ae',
    borderRadius: 3,
    margin: 20
  },
  lblGetStarted: {
    margin: 3,
    color: 'white',
    fontWeight: 'bold'
  }
});
