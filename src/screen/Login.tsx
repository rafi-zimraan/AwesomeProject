import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
  ImageBackground,
  StatusBar,
} from 'react-native';
import React, {Component} from 'react';
import {
  biru,
  hijauTosca,
  hitam,
  putih,
  biruGelap,
  ungu,
  oren,
  orenMuda,
} from '../utils/colors';

import HeaderText from '../components/HeaderText';
import IconLogin from '../components/IconLogin';
import ContainerInputText from '../components/InputText';
import Logo from '../components/Logo';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
// import {RootStackParams} from '../App';
import LinearGradient from 'react-native-linear-gradient';

const Login = () => {
  // const navigation =
  //   useNavigation<NativeStackNavigationProp<RootStackParams>>();
  return (
    <View style={styles.mainContainer}>
      <LinearGradient colors={['#0a8270', '#08C792']} style={{flex: 1}}>
        <StatusBar
          hidden
          // backgroundColor="transparent"
          // translucent={true}
          // barStyle="light-content"
        />
        {/* <ImageBackground
        style={styles.imageBackground}
        source={require('../assets/images/kotakhitam.png')}> */}
        <Logo />
        <Text style={styles.textLogin}>Login</Text>
        <Text style={styles.text}>
          Masukan data login anda untuk masuk ke EL Note
        </Text>
        <ContainerInputText />
        <IconLogin />
        {/* ----------------------------------------------------------------------------------------------- */}
        <TouchableOpacity>
          <LinearGradient
            colors={['#0e7979', '#163d49']}
            style={styles.klikMasuk}>
            <Text style={styles.textMasuk}> Sign in</Text>
          </LinearGradient>
        </TouchableOpacity>
        {/* ----------------------------------------------------------------------------------------------- */}
        <HeaderText />
        {/* </ImageBackground> */}
      </LinearGradient>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  imageBackground: {
    width: '100%',
    height: '100%',
  },
  mainContainer: {
    flex: 1,
  },

  textLogin: {
    marginTop: 10,
    fontSize: 35,
    fontWeight: 'bold',
    color: putih,
    alignSelf: 'center',
  },
  text: {
    alignSelf: 'center',
    color: putih,
    marginTop: 10,

    fontSize: 17,
  },
  klikMasuk: {
    backgroundColor: '#6842EF',
    width: '82%',
    height: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 30,
    borderRadius: 15,
    elevation: 3,
  },
  textMasuk: {
    color: putih,
    fontSize: 20,
    fontWeight: 'bold',
  },
});
