import {Text, StyleSheet, View, Image} from 'react-native';
import React, {Component} from 'react';

export default class Logo extends Component {
  render() {
    return (
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/images/GLogo.png')}
          style={styles.Logo}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  logoContainer: {
    alignItems: 'center',
    marginTop: 140,
  },
  Logo: {
    width: 100,
    height: 100,
    borderRadius: 30,
  },
});
