import {Text, StyleSheet, View} from 'react-native';
import React, {Component, useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import InputName from './screen/InputName';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MyRegister from './screen/MyRegister';
import MyLogin from './screen/MyLogin';
import MyHome from './screen/MyHome';
import MySplash from './screen/MySplash';
import MyDetail from './screen/MyDetail';

export type RootStackParams = {
  MyLogin: undefined;
  MySplash: undefined;
  MyHome: undefined;
  MyDetail: {no_id: number};
  MyRegister: undefined;
};
const Stack = createNativeStackNavigator<RootStackParams>();
const App = () => {
  const [user, setUser] = useState({name: ''});
  const findUser = async () => {
    const result = await AsyncStorage.getItem('user');
    if (result !== null) {
      setUser(JSON.parse(result));
    } else {
      setUser({name: ''});
    }
  };

  useEffect(() => {
    findUser();
  }, []);

  if (!user.name) return <InputName onFinish={findUser} />;

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MySplash"
          component={MySplash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MyRegister"
          component={MyRegister}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MyLogin"
          component={MyLogin}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MyHome"
          component={MyHome}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MyDetail"
          component={MyDetail}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
const styles = StyleSheet.create({
  navigatorLogin: {},
});
