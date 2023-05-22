import {Alert, Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {RootStackParams} from '../App';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

type Navigation = NativeStackScreenProps<RootStackParams, 'MyDetail'>;

interface ListData {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  photo: string;
}

const MyDetail = ({navigation, route}: Navigation) => {
  const [data, setData] = useState<ListData[]>([]);

  useEffect(() => {
    console.log(route.params.no_id);
    AsyncStorage.getItem('token').then(value => {
      var requestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers: {
          Authorization: `Bearer ${value}`,
        },
      };

      fetch(
        `https://frontendreq.pondokprogrammer.com/api/show/${route.params.no_id}`,
        requestOptions,
      )
        .then(response => response.json())
        .then(result => {
          console.log(result);
          setData(result.data);
        })
        .catch(error => console.log('error', error));
    });
  }, []);

  return (
    <View style={{flex: 1}}>
      {data.map((value, index) => (
        <View key={index}>
          <Image
            source={{uri: value.photo}}
            style={{width: 300, height: 300}}
          />
          <Text>{value.name}</Text>
          <Text>{value.city}</Text>
          <Text>{value.address}</Text>
          <Text>{value.email}</Text>
        </View>
      ))}
    </View>
  );
};

export default MyDetail;
const styles = StyleSheet.create({});
function setData(data: any) {
  throw new Error('Function not implemented.');
}
