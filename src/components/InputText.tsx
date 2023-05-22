import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import React, {Component} from 'react';
import {
  biru,
  hijauTosca,
  hitam,
  oren,
  orenMuda,
  putih,
  ungu,
} from '../utils/colors';
import LinearGradient from 'react-native-linear-gradient';

interface State {
  eye: boolean;
}
interface Props {}

export default class ContainerInputText extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      eye: true,
    };
  }
  render() {
    return (
      <View style={styles.inputContainer}>
        <View style={styles.emailContainer}>
          <LinearGradient
            style={styles.iconEmail}
            colors={['#0e7979', '#163d49']}>
            <Image
              style={{width: 25, height: 25}}
              source={require('../assets/icons/email.png')}
            />
          </LinearGradient>
          <TextInput style={styles.email} placeholder="Masukan email " />
        </View>
        <View style={styles.passwordContainer}>
          <LinearGradient
            style={styles.iconLock}
            colors={['#0e7979', '#163d49']}>
            <Image
              style={{width: 25, height: 25}}
              source={require('../assets/icons/lock.png')}
            />
          </LinearGradient>

          <TextInput
            style={styles.password}
            placeholder="Masukan password"
            secureTextEntry={this.state.eye}
          />
          <View style={styles.iconEye}>
            <TouchableOpacity
              onPress={() => this.setState({eye: !this.state.eye})}>
              <Image
                style={{width: 25, height: 25}}
                source={require('../assets/icons/eye.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {},
  emailContainer: {
    marginTop: 7,
    flexDirection: 'row',
    marginHorizontal: 30,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  passwordContainer: {
    marginTop: 5,
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
  iconLock: {
    justifyContent: 'center',
    height: 49.2,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
    elevation: 5,
  },
  iconEye: {
    backgroundColor: putih,
    justifyContent: 'center',
    height: 49.2,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    elevation: 5,
    paddingHorizontal: 20,
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
  password: {
    marginTop: 13,
    backgroundColor: putih,
    width: 320,
    paddingLeft: 25,
    flex: 1,
    elevation: 5,
  },
});
