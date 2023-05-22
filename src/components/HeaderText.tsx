import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Alert,
  StatusBar,
} from 'react-native';
import React, {Component} from 'react';
import {biru, hitam, oren, putih} from '../utils/colors';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParams} from '../App';
type Navigation = NativeStackScreenProps<RootStackParams>;
const HeaderText = ({navigation}: Navigation) => {
  return (
    <View style={styles.headerContainer}>
      <StatusBar barStyle={'dark-content'} backgroundColor={putih} />
      <Text style={{color: putih}}>Belum punya akun ? </Text>
      <TouchableOpacity
        style={styles.klikDaftar}
        onPress={() => navigation.navigate('MyRegister')}>
        <Text style={styles.textDaftar}> klik untuk Daftar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HeaderText;
const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 30,
  },
  klikDaftar: {},
  textDaftar: {
    color: '#163d49',
    fontWeight: 'bold',
  },
});
