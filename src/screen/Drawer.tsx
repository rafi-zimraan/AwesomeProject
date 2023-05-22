import {Text, StyleSheet, View, DrawerLayoutAndroid, Image} from 'react-native';
import React, {Component} from 'react';
import {abu, biru, hitam, merah, oren, putih, ungu} from '../utils/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class Drawer extends Component {
  private drawerRef = React.createRef<DrawerLayoutAndroid>();
  render() {
    const DrawerView = (
      <View style={styles.drawerBox}>
        <Image
          style={styles.ImageDrawer}
          source={require('../assets/images/purple.jpg')}
        />
        <Icon
          name="keyboard-backspace"
          size={40}
          color={putih}
          style={{position: 'absolute', top: 20, right: 40}}
          onPress={() => this.drawerRef.current?.closeDrawer()}
        />
        {/* ---------------------------------------------------------------- */}
        <View style={styles.drawerProfile}>
          <Image
            style={styles.ImageLogo}
            source={require('../assets/images/Developer.jpg')}
          />
          <Text style={styles.namaProfile}>
            EL GHIFARI {'  '}
            <Icon name="check-decagram" size={20} color={biru} />
          </Text>
          <Text style={styles.namaProfile2}>
            5M+ Followers{'  '}
            <Icon name="account-multiple" size={17} color={putih} />
          </Text>
        </View>
        {/* --------------------------------------------------------------------- */}
        <View style={styles.ListBox}>
          <View style={styles.ListIcon1}>
            <Icon name="account-outline" size={30} color={abu} />
            <Text style={styles.textIcon}>Profile</Text>
          </View>
          <View style={styles.ListIcon}>
            <Icon name="message-text-outline" size={30} color={abu} />
            <Text style={styles.textIcon}>Messages</Text>
          </View>
          <View style={styles.ListIcon}>
            <Icon name="chart-timeline-variant-shimmer" size={30} color={abu} />
            <Text style={styles.textIcon}>Activity</Text>
          </View>
          <View style={styles.ListIcon}>
            <Icon name="format-list-bulleted" size={30} color={abu} />
            <Text style={styles.textIcon}>List</Text>
          </View>
          <View style={styles.ListIcon}>
            <Icon name="chart-box-outline" size={30} color={abu} />
            <Text style={styles.textIcon}>Reports</Text>
          </View>
          <View style={styles.ListIcon}>
            <Icon name="finance" size={30} color={abu} />
            <Text style={styles.textIcon}>Statistic</Text>
          </View>
          <View style={styles.ListIcon}>
            <Icon name="logout-variant" size={30} color={abu} />
            <Text style={styles.textIcon}>Sign Out</Text>
          </View>
          <View style={styles.ListIcon2}>
            <Icon name="share-variant-outline" size={30} color={abu} />
            <Text style={styles.textIcon}>Tell a Friend</Text>
          </View>
          <View style={styles.ListIcon}>
            <Icon name="help-circle-outline" size={30} color={abu} />
            <Text style={styles.textIcon}>Help and Feedback</Text>
          </View>
        </View>
        {/* --------------------------------------------------------------------- */}
        <View style={styles.LineBox}></View>
      </View>
    );
    return (
      <DrawerLayoutAndroid
        ref={this.drawerRef}
        drawerWidth={360}
        drawerPosition={'left'}
        renderNavigationView={() => DrawerView}>
        <View style={styles.boxContent}>
          <Icon
            name="menu"
            size={40}
            color={oren}
            onPress={() => this.drawerRef.current?.openDrawer()}
          />
        </View>
      </DrawerLayoutAndroid>
    );
  }
}

const styles = StyleSheet.create({
  boxContent: {},
  ImageDrawer: {
    width: '100%',
    height: '100%',
  },
  drawerBox: {
    flex: 1,
    backgroundColor: putih,
  },
  drawerProfile: {
    justifyContent: 'flex-end',
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
  },
  ImageLogo: {
    width: 90,
    height: 90,
    borderRadius: 50,
    marginTop: 25,
  },
  namaProfile: {
    color: putih,
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 20,
    marginLeft: 30,
  },
  namaProfile2: {
    color: putih,
    fontSize: 15,
    marginTop: 5,
    marginLeft: 17,
  },
  ListBox: {
    backgroundColor: putih,
    position: 'absolute',
    width: 360,
    height: 570,
    bottom: 0,
    left: 0,
    flexDirection: 'column',
  },
  ListIcon1: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: putih,
    flexDirection: 'row',
    height: 55,
    paddingHorizontal: 30,
    marginTop: 10,
  },
  ListIcon: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: putih,
    flexDirection: 'row',
    height: 55,
    paddingHorizontal: 30,
  },
  ListIcon2: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: putih,
    flexDirection: 'row',
    height: 55,
    paddingHorizontal: 30,
    marginTop: 50,
  },
  textIcon: {
    fontWeight: 'bold',
    marginLeft: 30,
    fontSize: 17,
    color: hitam,
  },
  LineBox: {
    position: 'absolute',
    width: 300,
    height: 1,
    bottom: 140,
    left: 0,
    marginLeft: 25,
    borderColor: abu,
    borderWidth: 0.2,
  },
});
