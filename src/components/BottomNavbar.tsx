import {Text, StyleSheet, View, TouchableOpacity, Image} from 'react-native';
import React, {Component} from 'react';
import {biru, putih} from '../utils/colors';

export default class BottomNavbar extends Component {
  render() {
    return (
      <View style={styles.bottomBar}>
        <TouchableOpacity>
          <Image
            style={{width: 30, height: 30}}
            source={require('../assets/icons/home.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={{width: 30, height: 30}}
            source={require('../assets/icons/search.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={{width: 30, height: 30}}
            source={require('../assets/icons/plus.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={{width: 30, height: 30}}
            source={require('../assets/icons/like.png')}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image
            style={{
              width: 30,
              height: 30,
              borderRadius: 40,
              borderColor: biru,
              borderWidth: 2,
            }}
            source={require('../assets/images/GLogo.png')}
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
    width: '100%',
    elevation: 10,
    position: 'absolute',
    bottom: 0,
  },
});
