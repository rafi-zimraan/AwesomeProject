import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
  ToastAndroid,
} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {putih} from '../utils/colors';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {transformer} from '../../metro.config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParams} from '../App';
import HeaderText from '../components/HeaderText';
type Navigation = NativeStackScreenProps<RootStackParams>;

const MyLogin = ({navigation}: Navigation) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const reg = () => {
    if (email === '') {
      Alert.alert('Ups!', 'Anda belum memasukan email', [
        {
          text: 'ok',
        },
      ]);
    } else if (
      email.split('@')[1] !== 'gmail.com' &&
      email.split('@')[1] !== 'email.com'
    ) {
      Alert.alert('Ups!', 'Email yang anda masukan tidak sesuai', [
        {
          text: 'ok',
        },
      ]);
    } else if (password === '') {
      Alert.alert('Ups!', 'Anda belum memasukan password', [
        {
          text: 'ok',
        },
      ]);
    } else if (password.length < 8) {
      Alert.alert('Ups!', 'Password minimal 8 karakter', [
        {
          text: 'ok',
        },
      ]);
    } else {
      setLoading(true);
      var formdata = new FormData();

      formdata.append('email', email);
      formdata.append('password', password);

      var requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow',
      };

      fetch(
        'https://frontendreq.pondokprogrammer.com/api/login',
        requestOptions,
      )
        .then(response => response.json())
        .then(result => {
          if (result.error_message) {
            Alert.alert('Ups!', 'Email atau password salah', [
              {
                text: 'ok',
              },
            ]);
          } else {
            ToastAndroid.show('Login berhasil', ToastAndroid.SHORT);
            console.log(result.token);
            AsyncStorage.setItem('token', result.token);
            navigation.navigate('MyHome');
          }
        })
        .catch(error => console.log('error', error))
        .finally(() => setLoading(false));
    }
  };
  return (
    <>
      <LinearGradient colors={['#0a8270', '#08C792']} style={{flex: 1}}>
        <View style={{alignItems: 'center', marginTop: 70, marginBottom: 50}}>
          <Text style={{fontSize: 30, color: 'white', fontWeight: 'bold'}}>
            Login
          </Text>
        </View>
        {/* ============================================================== */}
        <View>
          {/*  */}
          <View style={styles.emailContainer}>
            <LinearGradient
              style={styles.iconEmail}
              colors={['#0e7979', '#163d49']}>
              <Image
                style={{width: 25, height: 25}}
                source={require('../assets/icons/email.png')}
              />
            </LinearGradient>
            <TextInput
              style={styles.email}
              placeholder="Masukan email "
              onChangeText={(em: string) => setEmail(em)}
            />
          </View>
          {/*  */}
          <View style={styles.emailContainer}>
            <LinearGradient
              style={styles.iconEmail}
              colors={['#0e7979', '#163d49']}>
              <Image
                style={{width: 25, height: 25}}
                source={require('../assets/icons/lock.png')}
              />
            </LinearGradient>
            <TextInput
              style={styles.email}
              placeholder="Masukan password "
              onChangeText={(ps: string) => setPassword(ps)}
            />
          </View>
          {/*  */}

          {/*  */}
        </View>
        {/* ===================================================================== */}

        <TouchableOpacity onPress={() => reg()}>
          <LinearGradient
            colors={['#0e7979', '#163d49']}
            style={styles.registerGradient}>
            {loading ? (
              <ActivityIndicator size={'small'} color={'white'} />
            ) : (
              <Text style={{color: 'white', fontSize: 20}}>LOGIN</Text>
            )}
          </LinearGradient>
        </TouchableOpacity>
        <View style={styles.headerContainer}>
          <Text style={{color: putih}}>Belum punya akun ? </Text>
          <TouchableOpacity
            style={styles.klikDaftar}
            onPress={() => navigation.navigate('MyRegister')}>
            <Text style={styles.textDaftar}> klik untuk Daftar</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </>
  );
};

export default MyLogin;

const styles = StyleSheet.create({
  emailContainer: {
    marginTop: 7,
    flexDirection: 'row',
    marginHorizontal: 30,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  iconEmail: {
    justifyContent: 'center',
    height: 49.2,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
    elevation: 5,
  },
  email: {
    marginTop: 23,
    backgroundColor: putih,
    width: 320,
    paddingLeft: 25,
    flex: 1,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    elevation: 5,
  },
  registerGradient: {
    marginTop: 50,
    marginHorizontal: 30,
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
  },
  klikDaftar: {},
  textDaftar: {
    color: '#163d49',
    fontWeight: 'bold',
  },
  headerContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 30,
  },
});
