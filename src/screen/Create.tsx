import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {create} from 'react-test-renderer';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface Item {
  email: string;
}

const Create = () => {
  const [text, setText] = useState<string>('');
  const [data, setData] = useState<Item[]>([]);

  useEffect(() => {
    getData();
  }, []);

  const inputData = (text: string) => {
    setData(prevData => {
      const newData = [...prevData, {email: text}];
      console.log(newData);
      saveData(newData);
      return newData;
    });
  };

  const saveData = async (value: Array<{email: string}>) => {
    try {
      await AsyncStorage.setItem('database', JSON.stringify(value));
    } catch (e) {
      console.log('save data error', e);
    }
  };

  const getData = async () => {
    try {
      let value = await AsyncStorage.getItem('database');
      if (value !== null) {
        const parseValue = JSON.parse(value);
        console.log(parseValue);
        setData(parseValue);
      }
    } catch (error) {
      console.log('get data error', error);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
      }}>
      {data.map((value, index) => (
        <View
          key={index}
          style={{justifyContent: 'center', alignItems: 'center'}}>
          <View
            style={{
              backgroundColor: 'black',

              top: 100,
              width: 400,
              height: 30,
              justifyContent: 'center',
              marginTop: 10,
            }}>
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                paddingLeft: 20,
                fontSize: 20,
              }}>
              Nama santri : {value.email}
            </Text>
          </View>
        </View>
      ))}

      <View
        style={{
          backgroundColor: 'white',
          flexDirection: 'row',
          position: 'absolute',
          bottom: 30,
        }}>
        <TextInput
          placeholder="Create data"
          style={{
            fontSize: 20,
            color: 'black',
            width: 250,
            borderWidth: 0.5,
          }}
          onChangeText={t => setText(t)}
        />
        <TouchableOpacity
          style={{
            marginLeft: 50,
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 10,
            backgroundColor: 'blue',
            borderRadius: 10,
          }}
          onPress={() => inputData(text)}>
          <Text style={{color: 'white', fontSize: 20}}>Tambah</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Create;

const styles = StyleSheet.create({});
