import {Text, StyleSheet, View, TouchableOpacity, Image} from 'react-native';
import React, {Component} from 'react';
import {abu, biru, hitam, putih} from '../utils/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {DrawerLayoutAndroid} from 'react-native/Libraries/Components/DrawerAndroid/DrawerLayoutAndroid';

export default class TopNavbar extends Component {
  render() {
    return (
      <View style={styles.TopBar}>
        <Icon name="cog" size={30} color={hitam} />

        <Text style={{fontWeight: 'bold', color: hitam, fontSize: 20}}>
          M.U EL GHIFARI <Icon name="check-decagram" size={20} color={biru} />
        </Text>
        <TouchableOpacity>
          <Image
            style={{width: 30, height: 30}}
            source={require('../assets/icons/add-friend.png')}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  TopBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    backgroundColor: putih,
    height: 50,
    elevation: 10,
  },
});
