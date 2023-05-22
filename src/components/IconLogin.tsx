import {Text, StyleSheet, View, TouchableOpacity, Image} from 'react-native';
import React, {Component} from 'react';
import {biru, hitam, oren, orenMuda, ungu} from '../utils/colors';
import LinearGradient from 'react-native-linear-gradient';

export default class IconLogin extends Component {
  render() {
    return (
      <View style={styles.iconsContainer}>
        <TouchableOpacity>
          <LinearGradient style={styles.icons} colors={['#0e7979', '#163d49']}>
            <Image
              style={{width: 30, height: 30}}
              source={require('../assets/icons/googlee.png')}
            />
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity>
          <LinearGradient style={styles.icons} colors={['#0e7979', '#163d49']}>
            <Image
              style={{width: 30, height: 30}}
              source={require('../assets/icons/fb.png')}
            />
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity>
          <LinearGradient style={styles.icons} colors={['#0e7979', '#163d49']}>
            <Image
              style={{width: 30, height: 30}}
              source={require('../assets/icons/githubb.png')}
            />
          </LinearGradient>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
    display: 'flex',
    gap: 50,
  },
  icons: {
    backgroundColor: '#6842EF',
    height: 50,
    width: 55,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    elevation: 5,
  },
});
