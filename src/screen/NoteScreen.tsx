import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LinearGradient from 'react-native-linear-gradient';
import {hijau, hitamMuda, merah, oren, putih} from '../utils/colors';
import MySearchhBar from '../components/MySearchBar';
import Icon from 'react-native-vector-icons/Fontisto';
import NoteInputModal from './NoteInputModal';

interface User {
  name: string;
}

const NoteScreen = ({user}: {user: User}) => {
  const [salam, setSalam] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const findSalam = () => {
    const hrs = new Date().getHours();
    if (hrs === 0 || hrs < 12)
      return setSalam(' Mau Catat apa  Pagi ini Tuan ');
    if (hrs === 1 || hrs < 17)
      return setSalam(' Mau Catat apa  Siang ini Tuan ');
    setSalam(' Mau Catat apa  Malam ini Tuan');
  };

  useEffect(() => {
    findSalam();
  }, []);

  const handleOnsubmit = ({title}: any, {desc}: any) => {
    console.log(title, desc);
  };
  return (
    <>
      <StatusBar
        translucent
        barStyle={'dark-content'}
        backgroundColor={'transparent'}
      />
      <LinearGradient
        colors={['#0a8270', '#08C792']}
        style={styles.LinearGradientContainer}>
        <View style={styles.GreetBox}>
          <Text style={styles.TextGreet}>{`${salam} ${user.name} `}</Text>
        </View>
        <MySearchhBar />
        <View style={styles.AddBox}>
          <Text style={styles.AddText}>ADD NOTES</Text>
        </View>
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          style={{
            position: 'absolute',
            bottom: 90,
            right: 30,
            borderRadius: 30,
            elevation: 5,
            backgroundColor: 'white',
          }}>
          <Icon name="plus-a" size={25} color={hijau} style={{padding: 15}} />
        </TouchableOpacity>
      </LinearGradient>
      <NoteInputModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
      />
    </>
  );
};

export default NoteScreen;

const styles = StyleSheet.create({
  LinearGradientContainer: {
    alignItems: 'center',
    flex: 1,
  },

  GreetBox: {
    marginTop: 45,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: 'white',
  },
  TextGreet: {
    fontSize: 15,
    fontWeight: '500',
    color: putih,
    padding: 10,
    fontFamily: 'Poppins-Medium',
  },
  AddBox: {flex: 1, justifyContent: 'center', position: 'relative'},
  AddText: {
    fontSize: 50,
    fontWeight: 'bold',
    opacity: 0.3,
  },
});
