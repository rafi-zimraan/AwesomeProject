import {Text, StyleSheet, View} from 'react-native';
import React, {Component} from 'react';
import {hitam, putih} from '../utils/colors';

export default class CountFollow extends Component {
  render() {
    return (
      <View style={styles.CountFollow}>
        <View style={{flexDirection: 'column'}}>
          <Text style={{fontWeight: 'bold', fontSize: 15, color: hitam}}>
            9999M+
          </Text>
          <Text>Kiriman</Text>
        </View>
        <View style={{flexDirection: 'column'}}>
          <Text style={{fontWeight: 'bold', fontSize: 15, color: hitam}}>
            9999M+
          </Text>
          <Text>Pengikut</Text>
        </View>
        <View style={{flexDirection: 'column'}}>
          <Text style={{fontWeight: 'bold', fontSize: 15, color: hitam}}>
            9999M+
          </Text>
          <Text>Diikuti</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  CountFollow: {
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: putih,
    elevation: 7,
    height: 70,
    marginTop: 20,
    marginBottom: 1,
  },
});
