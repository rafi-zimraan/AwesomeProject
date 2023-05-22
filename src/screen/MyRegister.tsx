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

const MyRegister = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [password_Confirmation, setPassword_Confirmation] =
    useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const reg = () => {
    if (name === '') {
      Alert.alert('Ups!', 'Nama wajib di isi ya.', [
        {
          text: 'ok',
        },
      ]);
    } else if (email === '') {
      Alert.alert('Ups!', 'Email wajib di isi ya.', [
        {
          text: 'ok',
        },
      ]);
    } else if (
      email.split('@')[1] !== 'gmail.com' &&
      email.split('@')[1] !== 'email.com'
    ) {
      Alert.alert('Ups!', 'Email yang anda masukan salah', [
        {
          text: 'ok',
        },
      ]);
    } else if (password === '') {
      Alert.alert('Ups!', 'Password wajib di isi ya.', [
        {
          text: 'ok',
        },
      ]);
    } else if (password.length < 8) {
      Alert.alert('Ups!', 'Password minimal 8 karakter.', [
        {
          text: 'ok',
        },
      ]);
    } else if (password_Confirmation === '') {
      Alert.alert('Ups!', 'Password confirmaton wajib di isi ya.', [
        {
          text: 'ok',
        },
      ]);
    } else if (password_Confirmation !== password) {
      Alert.alert(
        'Ups!',
        'Password confirmaton yang kamu masukan tidak sama.',
        [
          {
            text: 'ok',
          },
        ],
      );
    } else {
      setLoading(true);
      var formdata = new FormData();
      formdata.append('name', name);
      formdata.append('email', email);
      formdata.append('password', password);
      formdata.append('password_confirmation', password_Confirmation);

      var requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow',
      };

      fetch(
        'https://frontendreq.pondokprogrammer.com/api/register',
        requestOptions,
      )
        .then(response => response.json())
        .then(result => {
          console.log(result);
          ToastAndroid.show('akun terdaftar', ToastAndroid.SHORT);
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
            Register
          </Text>
        </View>
        {/* ============================================================== */}
        <View>
          <View style={styles.emailContainer}>
            <LinearGradient
              style={styles.iconEmail}
              colors={['#0e7979', '#163d49']}>
              <IonIcon name="person" size={25} color={'white'} />
            </LinearGradient>
            <TextInput
              style={styles.email}
              placeholder="Masukan Nama "
              onChangeText={(nm: string) => setName(nm)}
            />
          </View>
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
              placeholder="Ulangi password "
              onChangeText={(ps2: string) => setPassword_Confirmation(ps2)}
            />
          </View>
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
              <Text style={{color: 'white', fontSize: 20}}>REGISTER</Text>
            )}
          </LinearGradient>
        </TouchableOpacity>
      </LinearGradient>
    </>
  );
};

export default MyRegister;

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
    marginTop: 70,
    marginHorizontal: 30,
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
  },
});
