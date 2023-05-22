import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {RootStackParams} from '../App';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {oren, orenMuda, putih} from '../utils/colors';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';

type Navigation = NativeStackScreenProps<RootStackParams>;
const Splash = ({navigation}: Navigation) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      AsyncStorage.getItem('token').then(value => {
        if (value !== null) {
          navigation.replace('HomeNote');
        } else {
          navigation.replace('MyLogin');
        }
      });
    }, 1000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View
      style={{
        flex: 1,

        backgroundColor: orenMuda,
      }}>
      <LinearGradient
        colors={['#0a8270', '#08C792']}
        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <StatusBar
          barStyle={'light-content'}
          backgroundColor={'transparent'}
          translucent
        />
        <Icon name="notebook-edit-outline" size={150} color={putih} />
        <Text
          style={{
            color: putih,
            fontWeight: '600',
            fontSize: 30,
            marginTop: 10,
          }}>
          EL Note
        </Text>
        <View style={{position: 'absolute', bottom: 100}}>
          <ActivityIndicator size={'large'} color={'white'} />
        </View>
      </LinearGradient>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({});
