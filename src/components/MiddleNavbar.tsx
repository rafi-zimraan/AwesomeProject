import {Text, StyleSheet, View, TouchableOpacity, Image} from 'react-native';
import React, {Component} from 'react';
import {putih} from '../utils/colors';

export default class MiddleNavbar extends Component {
  render() {
    return (
      <View style={styles.bottomBar}>
        <TouchableOpacity>
          <Image
            style={{width: 30, height: 30}}
            source={require('../assets/icons/grid.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={{width: 30, height: 30}}
            source={require('../assets/icons/film.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={{width: 30, height: 30}}
            source={require('../assets/icons/igtv.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={{width: 30, height: 30}}
            source={require('../assets/icons/label.png')}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image
            style={{width: 30, height: 30}}
            source={require('../assets/icons/photo.png')}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bottomBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    backgroundColor: putih,
    height: 50,
    elevation: 2,
    marginBottom: 10,
  },
});
