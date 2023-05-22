import {
  StyleSheet,
  Text,
  View,
  Modal,
  TextInput,
  StatusBar,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {abu, abuGelap, hijau, hijauTosca, putih, silver} from '../utils/colors';
import Icon from 'react-native-vector-icons/Fontisto';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const NoteInputModal = ({visible}: any, {onClose}: any) => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  const handleModalClose = () => {
    Keyboard.dismiss();
  };

  const handleOnChangeText = (text: any, valueFor: any) => {
    if (valueFor === 'title') setTitle(text);
    if (valueFor === 'desc') setDesc(text);
  };

  const handleSubmit = () => {
    if (!title.trim() && !desc.trim()) return onClose();
    // onSubmit(title, desc);
    // setTitle('');
    // setDesc('');
    // onClose()
  };

  return (
    <>
      <StatusBar
        translucent
        barStyle={'light-content'}
        backgroundColor={'transparent'}
      />

      <Modal visible={visible} animationType="fade">
        <LinearGradient colors={['#0a8270', '#08C792']} style={{flex: 1}}>
          {/* --------------------------------------------------------------- */}
          <TouchableWithoutFeedback onPress={handleModalClose}>
            <View style={[styles.modalBG, StyleSheet.absoluteFillObject]} />
          </TouchableWithoutFeedback>
          {/* -------------------------------------------------------------- */}
          <TouchableOpacity onPress={() => console.log('back-Space')}>
            <MCIcon
              name="keyboard-backspace"
              size={40}
              color={putih}
              style={{position: 'absolute', top: 20, left: 20}}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log('EL Ghifari')}>
            <MCIcon
              name="checkbox-marked-circle-outline"
              size={35}
              color={putih}
              style={{position: 'absolute', top: 25, right: 27}}
            />
          </TouchableOpacity>

          {/* ------------------------------------------------------------------- */}
          <View style={styles.BoxTextInput}>
            <TextInput
              value={title}
              cursorColor={'white'}
              placeholder="JUDUL"
              placeholderTextColor={putih}
              style={[styles.input, styles.title]}
              onChangeText={text => handleOnChangeText(text, 'title')}
            />
            <TextInput
              value={desc}
              multiline
              placeholderTextColor={putih}
              placeholder="CATATAN"
              cursorColor={'white'}
              style={[styles.input, styles.desc]}
              onChangeText={text => handleOnChangeText(text, 'desc')}
            />
            <View
              style={{
                position: 'absolute',
                bottom: 85,
                right: 30,
                borderRadius: 40,
              }}></View>
          </View>
        </LinearGradient>
      </Modal>
    </>
  );
};

export default NoteInputModal;

const styles = StyleSheet.create({
  BoxTextInput: {
    padding: 25,
    marginTop: 45,
  },
  input: {
    color: putih,
  },
  title: {
    borderBottomWidth: 1,
    borderColor: 'white',
    fontWeight: '700',
    fontSize: 20,
  },
  desc: {
    borderBottomWidth: 1,
    borderColor: 'white',
    maxHeight: 500,
  },
  modalBG: {
    flex: 1,
  },
});
