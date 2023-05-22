import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParams} from '../App';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

type Navigation = NativeStackScreenProps<RootStackParams>;

interface ListData {
  id: number;
  name: string;
  photo: string;
  address: string;
}

const MyHome = ({navigation}: Navigation) => {
  const [data, setData] = useState<ListData[]>([]);

  useEffect(() => {
    AsyncStorage.getItem('token').then(value => {
      console.log('Ini tokannya : ', value);

      var requestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers: {
          Authorization: `Bearer ${value}`,
        },
      };

      fetch(
        'https://frontendreq.pondokprogrammer.com/api/index',
        requestOptions,
      )
        .then(response => response.json())
        .then(result => {
          console.log(result.data);
          setData(result.data);
        })
        .catch(error => console.log('error', error));
    });
  }, []);

  const Warning = () => {
    Alert.alert('Perhatian', 'Apakah anda ingin keluar?', [
      {
        text: 'Batal',
        style: 'cancel',
      },
      {
        text: 'Ok',
        onPress: () => logout(),
      },
    ]);
  };

  const logout = () => {
    AsyncStorage.getItem('token').then(value => {
      var requestOptions = {
        method: 'POST',
        redirect: 'follow',
        headers: {
          Authorization: `Bearer ${value}`,
        },
      };

      fetch(
        `https://frontendreq.pondokprogrammer.com/api/logout`,
        requestOptions,
      )
        .then(response => response.json())
        .then(result => {
          console.log(result);
          AsyncStorage.removeItem('token');
          navigation.replace('MyLogin');
        })
        .catch(error => console.log('error', error));
    });
  };

  return (
    <View style={styles.container}>
      <Icon name="logout" size={50} color={'black'} onPress={() => Warning()} />
      <View style={styles.content1}>
        {data.map((value, index) => (
          <TouchableOpacity
            key={index}
            style={styles.content2}
            onPress={() => navigation.navigate('MyDetail', {no_id: value.id})}>
            <Image
              source={{uri: value.photo}}
              style={{width: 100, height: 100}}
            />
            <Text>{value.name}</Text>
            <Text>{value.address}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default MyHome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content1: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginVertical: 50,
  },
  content2: {
    backgroundColor: 'white',
    alignItems: 'center',
    width: '45%',
    elevation: 8,
    margin: 5,
  },
});
