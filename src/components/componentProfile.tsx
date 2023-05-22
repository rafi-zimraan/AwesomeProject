import {Text, StyleSheet, View, Image} from 'react-native';
import React, {Component} from 'react';
import {
  abu,
  abuGelap,
  biru,
  biruGelap,
  hijau,
  hitam,
  oren,
  orenMuda,
  putih,
  ungu,
} from '../utils/colors';

interface Props {
  textLogo: string;
}

export default class ComponentProfile extends Component<Props> {
  render() {
    const {textLogo} = this.props;

    return (
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/images/GLogo.png')}
          style={styles.Logo}
          resizeMode="cover"
        />
        <Text style={styles.textLogo}>{textLogo}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  logoContainer: {
    alignItems: 'center',
    padding: 1,
    marginTop: 25,
    borderRadius: 30,
    height: 150,
    marginLeft: 20,
    marginRight: 10,
  },
  Logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: biru,
  },
  textLogo: {
    color: hitam,
    fontWeight: 'bold',
    fontSize: 15,
    marginTop: 8,
  },
});
