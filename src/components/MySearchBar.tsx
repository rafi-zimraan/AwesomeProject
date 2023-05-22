import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';

const MySearchhBar = () => {
  return (
    <View style={{}}>
      <TextInput
        placeholderTextColor={'white'}
        placeholder={` Cari catatan Tuan disini `}
        style={{
          margin: 10,
          marginBottom: -0,
          width: 370,
          borderRadius: 10,
          color: 'white',
          fontFamily: 'Poppins-Medium',
          paddingLeft: 110,
          borderWidth: 1,
          borderColor: 'white',
        }}
      />
      <Feather
        name="search"
        size={25}
        color={'white'}
        style={{position: 'absolute', left: 70, bottom: 11}}
      />
    </View>
  );
};

export default MySearchhBar;

const styles = StyleSheet.create({});
