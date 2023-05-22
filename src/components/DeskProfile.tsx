import {Text, StyleSheet, View, Image} from 'react-native';
import React, {Component} from 'react';
import {biru, hitam} from '../utils/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
export default class DeskProfile extends Component {
  render() {
    return (
      <View style={styles.deskProfile}>
        <Text style={styles.textDesk1}>
          Muhammad Ubaidillah ELGhifari{' '}
          <Icon name="check-decagram" size={20} color={biru} />
        </Text>
        <Text style={styles.textDesk}>
          {'  '}
          <Icon name="check-decagram" size={15} color={biru} />
          {'  '}
          Developer - Professioanal
        </Text>
        <Text style={styles.textDesk}>
          {'  '}
          <Icon name="check-decagram" size={15} color={biru} />
          {'  '}
          Developer - Professioanal
        </Text>
        <Text style={styles.textDesk}>
          {'  '}
          <Icon name="check-decagram" size={15} color={biru} />
          {'  '}
          Developer - Professioanal
        </Text>
        <Text style={styles.textDesk}>
          {'  '}
          <Icon name="check-decagram" size={15} color={biru} />
          {'  '}
          Developer - Professioanal
        </Text>
        <Text style={styles.textDesk}>
          {'  '}
          <Icon name="check-decagram" size={15} color={biru} />
          {'  '}
          Developer - Professioanal
        </Text>
        <Text style={styles.textDesk}>
          {'  '}
          <Icon name="check-decagram" size={15} color={biru} />
          {'  '}
          Developer - Professioanal
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  deskProfile: {
    marginHorizontal: 30,
  },
  textDesk: {
    fontWeight: 'bold',
    color: hitam,
  },
  textDesk1: {
    fontWeight: 'bold',
    color: hitam,
    fontSize: 15,
    marginBottom: 5,
  },
});
