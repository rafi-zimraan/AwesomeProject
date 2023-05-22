import {Text, StyleSheet, View, TouchableOpacity, Image} from 'react-native';
import React, {Component} from 'react';
import {hitam, putih} from '../utils/colors';
import ComponentProfile from '../components/componentProfile';

export default class ComponentFotoProfile extends Component {
  render() {
    return (
      <View style={styles.containerProfile}>
        <ComponentProfile textLogo="EL Ghifari" />
        <View style={styles.containerProfileText}>
          <View style={{flexDirection: 'row'}}>
            <Text style={{color: hitam, fontSize: 25, fontWeight: 'bold'}}>
              M.U EL GHIFARI
            </Text>
            <Image
              style={{width: 30, height: 30, marginLeft: 10}}
              source={require('../assets/icons/verified.png')}
            />
          </View>
          <TouchableOpacity style={styles.buttomEditProfile}>
            <Text style={{color: hitam, fontWeight: 'bold'}}>Edit Profile</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerProfile: {
    flexDirection: 'row',
  },
  containerProfileText: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginLeft: 10,
  },

  buttomEditProfile: {
    width: 260,
    height: 30,
    marginVertical: 10,
    backgroundColor: putih,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
});
