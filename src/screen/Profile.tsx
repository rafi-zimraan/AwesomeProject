import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  Image,
  StatusBar,
  ScrollViewComponent,
  DrawerLayoutAndroid,
} from 'react-native';
import React, {Component, useState} from 'react';
import ComponentProfile from '../components/componentProfile';
import {abu, biru, hijau, hitam, merah, putih, ungu} from '../utils/colors';
import ComponentFotoProfile from '../components/componentFotoProfile';
import TopNavbar from '../components/TopNavbar';
import BottomNavbar from '../components/BottomNavbar';
import MiddleNavbar from '../components/MiddleNavbar';
import CountFollow from '../components/CountFollow';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import DeskProfile from '../components/DeskProfile';

interface State {
  Hover0: boolean;
  Hover1: boolean;
  Hover2: boolean;
  Hover3: boolean;
  Hover4: boolean;
  Hover5: boolean;
  Hover6: boolean;
  Hover7: boolean;
  Hover8: boolean;
}
interface Props {}

export default class Profile extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      Hover0: false,
      Hover1: false,
      Hover2: false,
      Hover3: false,
      Hover4: false,
      Hover5: false,
      Hover6: false,
      Hover7: false,
      Hover8: false,
    };
  }
  private drawerRef = React.createRef<DrawerLayoutAndroid>();
  render() {
    const DrawerView = (
      <View style={styles.drawerBox}>
        <Image
          style={styles.ImageDrawer}
          source={require('../assets/images/purple.jpg')}
        />
        <TouchableOpacity
          style={{position: 'absolute', top: 20, right: 40}}
          onPress={() => this.drawerRef.current?.closeDrawer()}>
          <Icon name="keyboard-backspace" size={40} color={putih} />
        </TouchableOpacity>
        {/* ---------------------------------------------------------------- */}
        <View style={styles.drawerProfile}>
          <Image
            style={styles.ImageLogo}
            source={require('../assets/images/GLogo.png')}
          />
          <Text style={styles.namaProfile}>
            EL Ghifari
            {'  '}
            <Icon name="check-decagram" size={20} color={biru} />
          </Text>
          <Text style={styles.namaProfile2}>
            5M+ Followers {'  '}
            <Icon name="account-multiple" size={17} color={putih} />
          </Text>
        </View>
        {/* --------------------------------------------------------------------- */}

        <View style={styles.ListBox}>
          {/* --------- LIST 1 ----------  PROFILE ----------  HOVER 0 ------------------------  */}

          <TouchableOpacity
            style={{
              backgroundColor: this.state.Hover0
                ? 'rgba(190, 46, 221,0.2)'
                : putih,
              justifyContent: 'flex-start',
              alignItems: 'center',
              flexDirection: 'row',
              height: 55,
              paddingHorizontal: 10,
              marginTop: 5,
              marginHorizontal: 20,
              borderRadius: 5,
            }}
            activeOpacity={0.9}
            onPressIn={() => this.setState({Hover0: !this.state.Hover0})}
            onPressOut={() => this.setState({Hover0: !this.state.Hover0})}>
            <Icon
              name="account-outline"
              size={30}
              color={this.state.Hover0 ? '#6900FF' : abu}
            />
            <Text
              style={{
                fontWeight: 'bold',
                marginLeft: 30,
                fontSize: 17,
                color: this.state.Hover0 ? '#6900FF' : hitam,
              }}>
              Profile
            </Text>
          </TouchableOpacity>

          {/* --------- LIST 2 ----------  MESSAGES ----------  HOVER 1 ------------------------  */}

          <TouchableOpacity
            style={{
              backgroundColor: this.state.Hover1
                ? 'rgba(190, 46, 221,0.2)'
                : putih,
              justifyContent: 'flex-start',
              alignItems: 'center',
              flexDirection: 'row',
              height: 55,
              paddingHorizontal: 10,
              marginTop: 5,
              marginHorizontal: 20,
              borderRadius: 5,
            }}
            activeOpacity={0.9}
            onPressIn={() => this.setState({Hover1: !this.state.Hover1})}
            onPressOut={() => this.setState({Hover1: !this.state.Hover1})}>
            <Icon
              name="message-text-outline"
              size={30}
              color={this.state.Hover1 ? '#6900FF' : abu}
            />
            <Text
              style={{
                fontWeight: 'bold',
                marginLeft: 30,
                fontSize: 17,
                color: this.state.Hover1 ? '#6900FF' : hitam,
              }}>
              Messages
            </Text>
          </TouchableOpacity>

          {/* --------- LIST 3 ----------  ACTIVITTY ----------  HOVER 2 ------------------------  */}

          <TouchableOpacity
            style={{
              backgroundColor: this.state.Hover2
                ? 'rgba(190, 46, 221,0.2)'
                : putih,
              justifyContent: 'flex-start',
              alignItems: 'center',
              flexDirection: 'row',
              height: 55,
              paddingHorizontal: 10,
              marginTop: 5,
              marginHorizontal: 20,
              borderRadius: 5,
            }}
            activeOpacity={0.9}
            onPressIn={() => this.setState({Hover2: !this.state.Hover2})}
            onPressOut={() => this.setState({Hover2: !this.state.Hover2})}>
            <Icon
              name="chart-timeline-variant-shimmer"
              size={30}
              color={this.state.Hover2 ? '#6900FF' : abu}
            />
            <Text
              style={{
                fontWeight: 'bold',
                marginLeft: 30,
                fontSize: 17,
                color: this.state.Hover2 ? '#6900FF' : hitam,
              }}>
              Activity
            </Text>
          </TouchableOpacity>
          {/* --------- LIST 4 ----------  LIST ----------  HOVER 3 ------------------------  */}

          <TouchableOpacity
            style={{
              backgroundColor: this.state.Hover3
                ? 'rgba(190, 46, 221,0.2)'
                : putih,
              justifyContent: 'flex-start',
              alignItems: 'center',
              flexDirection: 'row',
              height: 55,
              paddingHorizontal: 10,
              marginTop: 5,
              marginHorizontal: 20,
              borderRadius: 5,
            }}
            activeOpacity={0.9}
            onPressIn={() => this.setState({Hover3: !this.state.Hover3})}
            onPressOut={() => this.setState({Hover3: !this.state.Hover3})}>
            <Icon
              name="format-list-bulleted"
              size={30}
              color={this.state.Hover3 ? '#6900FF' : abu}
            />
            <Text
              style={{
                fontWeight: 'bold',
                marginLeft: 30,
                fontSize: 17,
                color: this.state.Hover3 ? '#6900FF' : hitam,
              }}>
              List
            </Text>
          </TouchableOpacity>
          {/* --------- LIST 5 ----------  REPORTS ----------  HOVER 4 ------------------------  */}

          <TouchableOpacity
            style={{
              backgroundColor: this.state.Hover4
                ? 'rgba(190, 46, 221,0.2)'
                : putih,
              justifyContent: 'flex-start',
              alignItems: 'center',
              flexDirection: 'row',
              height: 55,
              paddingHorizontal: 10,
              marginTop: 5,
              marginHorizontal: 20,
              borderRadius: 5,
            }}
            activeOpacity={0.9}
            onPressIn={() => this.setState({Hover4: !this.state.Hover4})}
            onPressOut={() => this.setState({Hover4: !this.state.Hover4})}>
            <Icon
              name="chart-box-outline"
              size={30}
              color={this.state.Hover4 ? '#6900FF' : abu}
            />
            <Text
              style={{
                fontWeight: 'bold',
                marginLeft: 30,
                fontSize: 17,
                color: this.state.Hover4 ? '#6900FF' : hitam,
              }}>
              Reports
            </Text>
          </TouchableOpacity>
          {/* --------- LIST 6 ----------  Statistic ----------  HOVER 5 ------------------------  */}

          <TouchableOpacity
            style={{
              backgroundColor: this.state.Hover5
                ? 'rgba(190, 46, 221,0.2)'
                : putih,
              justifyContent: 'flex-start',
              alignItems: 'center',
              flexDirection: 'row',
              height: 55,
              paddingHorizontal: 10,
              marginTop: 5,
              marginHorizontal: 20,
              borderRadius: 5,
            }}
            activeOpacity={0.9}
            onPressIn={() => this.setState({Hover5: !this.state.Hover5})}
            onPressOut={() => this.setState({Hover5: !this.state.Hover5})}>
            <Icon
              name="finance"
              size={30}
              color={this.state.Hover5 ? '#6900FF' : abu}
            />
            <Text
              style={{
                fontWeight: 'bold',
                marginLeft: 30,
                fontSize: 17,
                color: this.state.Hover5 ? '#6900FF' : hitam,
              }}>
              Statistic
            </Text>
          </TouchableOpacity>

          {/* --------- LIST 7 ----------  Sign Out ----------  HOVER 6 ------------------------  */}

          <TouchableOpacity
            style={{
              backgroundColor: this.state.Hover6
                ? 'rgba(190, 46, 221,0.2)'
                : putih,
              justifyContent: 'flex-start',
              alignItems: 'center',
              flexDirection: 'row',
              height: 55,
              paddingHorizontal: 10,
              marginTop: 5,
              marginHorizontal: 20,
              borderRadius: 5,
            }}
            activeOpacity={0.9}
            onPressIn={() => this.setState({Hover6: !this.state.Hover6})}
            onPressOut={() => this.setState({Hover6: !this.state.Hover6})}>
            <Icon
              name="logout-variant"
              size={30}
              color={this.state.Hover6 ? '#6900FF' : abu}
            />
            <Text
              style={{
                fontWeight: 'bold',
                marginLeft: 30,
                fontSize: 17,
                color: this.state.Hover6 ? '#6900FF' : hitam,
              }}>
              Sign Out
            </Text>
          </TouchableOpacity>
          {/*     LINE                               LINE                          LINE                            */}

          <View style={styles.LineBox}></View>

          {/*           LINE                             LINE                    LINE                              */}

          {/* --------- LIST 8 ---------- Tell a Friend ----------  HOVER 7 ------------------------  */}

          <TouchableOpacity
            style={{
              backgroundColor: this.state.Hover7
                ? 'rgba(190, 46, 221,0.2)'
                : putih,
              justifyContent: 'flex-start',
              alignItems: 'center',
              flexDirection: 'row',
              height: 55,
              paddingHorizontal: 10,
              marginTop: 18,
              marginHorizontal: 20,
              borderRadius: 5,
            }}
            activeOpacity={0.9}
            onPressIn={() => this.setState({Hover7: !this.state.Hover7})}
            onPressOut={() => this.setState({Hover7: !this.state.Hover7})}>
            <Icon
              name="share-variant-outline"
              size={30}
              color={this.state.Hover7 ? '#6900FF' : abu}
            />
            <Text
              style={{
                fontWeight: 'bold',
                marginLeft: 30,
                fontSize: 17,
                color: this.state.Hover7 ? '#6900FF' : hitam,
              }}>
              Tell a Friend
            </Text>
          </TouchableOpacity>

          {/* --------- LIST 9 ----------  Help and Feedback ----------  HOVER 8 ------------------------  */}

          <TouchableOpacity
            style={{
              backgroundColor: this.state.Hover8
                ? 'rgba(190, 46, 221,0.2)'
                : putih,
              justifyContent: 'flex-start',
              alignItems: 'center',
              flexDirection: 'row',
              height: 55,
              paddingHorizontal: 10,
              marginTop: 5,
              marginHorizontal: 20,
              borderRadius: 5,
            }}
            activeOpacity={0.9}
            onPressIn={() => this.setState({Hover8: !this.state.Hover8})}
            onPressOut={() => this.setState({Hover8: !this.state.Hover8})}>
            <Icon
              name="help-circle-outline"
              size={30}
              color={this.state.Hover8 ? '#6900FF' : abu}
            />
            <Text
              style={{
                fontWeight: 'bold',
                marginLeft: 30,
                fontSize: 17,
                color: this.state.Hover8 ? '#6900FF' : hitam,
              }}>
              Help and Feedback
            </Text>
          </TouchableOpacity>
          {/* ------------------------      CLOSE List     ^^^^^^^^^^^^^^    Close List        ----------------------------- */}
        </View>
        {/* ------------------------      CLOSE Box     ^^^^^^^^^^^^^^    Close  Box       ----------------------------- */}
      </View>
    );
    return (
      <DrawerLayoutAndroid
        ref={this.drawerRef}
        drawerWidth={360}
        drawerPosition={'left'}
        renderNavigationView={() => DrawerView}>
        <View style={styles.mainContainer}>
          <StatusBar backgroundColor={putih} barStyle={'dark-content'} />

          {/* ---------------------------------------------------------------------------- */}

          <View style={styles.TopBar}>
            <TouchableOpacity
              onPress={() => this.drawerRef.current?.openDrawer()}>
              <Icon name="cog" size={30} color={hitam} />
            </TouchableOpacity>

            <Text style={{fontWeight: 'bold', color: hitam, fontSize: 20}}>
              M.U EL GHIFARI{' '}
              <Icon name="check-decagram" size={20} color={biru} />
            </Text>
            <TouchableOpacity>
              <Icon name="account-plus-outline" size={35} color={hitam} />
            </TouchableOpacity>
          </View>

          {/* ---------------------------------------------------------------------------- */}

          <ScrollView
            showsHorizontalScrollIndicator={false}
            style={styles.scrool}>
            <ComponentFotoProfile />
            <DeskProfile />

            {/* ---------------------------------------------------------------------------- */}

            <ScrollView
              showsHorizontalScrollIndicator={false}
              horizontal
              style={styles.scrool}>
              <ComponentProfile textLogo="Profil 1" />
              <ComponentProfile textLogo="Profil 2" />
              <ComponentProfile textLogo="Profil 3" />
              <ComponentProfile textLogo="Profil 4" />
              <ComponentProfile textLogo="Profil 5" />
              <ComponentProfile textLogo="Profil 6" />
            </ScrollView>

            {/* ---------------------------------------------------------------------------- */}

            <CountFollow />

            <MiddleNavbar />

            {/* ---------------------------------------------------------------------------- */}

            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 5,
                backgroundColor: putih,
                elevation: 1,
                height: 35,
              }}>
              <TouchableOpacity>
                <Text style={{fontWeight: 'bold', color: biru, fontSize: 17}}>
                  Gunakan Aplikasi ini
                </Text>
              </TouchableOpacity>
            </View>

            {/* ---------------------------------------------------------------------------- */}

            <View style={{flexDirection: 'row'}}>
              <View style={{flexDirection: 'column'}}>
                <Image
                  style={styles.ImagePost}
                  source={require('../assets/images/GLogo.png')}
                />
                <Image
                  style={styles.ImagePost}
                  source={require('../assets/images/GLogo.png')}
                />
                <Image
                  style={styles.ImagePost}
                  source={require('../assets/images/GLogo.png')}
                />
              </View>
              <View style={{flexDirection: 'column'}}>
                <Image
                  style={styles.ImagePost}
                  source={require('../assets/images/GLogo.png')}
                />
                <Image
                  style={styles.ImagePost}
                  source={require('../assets/images/GLogo.png')}
                />
                <Image
                  style={styles.ImagePost}
                  source={require('../assets/images/GLogo.png')}
                />
              </View>
              <View style={{flexDirection: 'column'}}>
                <Image
                  style={styles.ImagePost}
                  source={require('../assets/images/GLogo.png')}
                />
                <Image
                  style={styles.ImagePost}
                  source={require('../assets/images/GLogo.png')}
                />
                <Image
                  style={styles.ImagePost}
                  source={require('../assets/images/GLogo.png')}
                />
              </View>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View style={{flexDirection: 'column'}}>
                <Image
                  style={styles.ImagePost}
                  source={require('../assets/images/GLogo.png')}
                />
                <Image
                  style={styles.ImagePost}
                  source={require('../assets/images/GLogo.png')}
                />
                <Image
                  style={styles.ImagePost}
                  source={require('../assets/images/GLogo.png')}
                />
              </View>
              <View style={{flexDirection: 'column'}}>
                <Image
                  style={styles.ImagePost}
                  source={require('../assets/images/GLogo.png')}
                />
                <Image
                  style={styles.ImagePost}
                  source={require('../assets/images/GLogo.png')}
                />
                <Image
                  style={styles.ImagePost}
                  source={require('../assets/images/GLogo.png')}
                />
              </View>
              <View style={{flexDirection: 'column'}}>
                <Image
                  style={styles.ImagePost}
                  source={require('../assets/images/GLogo.png')}
                />
                <Image
                  style={styles.ImagePost}
                  source={require('../assets/images/GLogo.png')}
                />
                <Image
                  style={styles.ImagePost}
                  source={require('../assets/images/GLogo.png')}
                />
              </View>
            </View>

            {/* ---------------------------------------------------------------------------- */}
          </ScrollView>

          <BottomNavbar />
        </View>
      </DrawerLayoutAndroid>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  TopBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    backgroundColor: putih,
    height: 50,
    elevation: 10,
  },
  ImagePost: {
    width: 130,
    height: 144,
    marginHorizontal: 3,
    marginVertical: 3,
  },

  scrool: {},
  ImageBackground: {
    width: '100%',
    height: '100%',
  },
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
    flexDirection: 'row',
    height: 55,
    paddingHorizontal: 30,
    marginTop: 50,
  },
  textIcon: {fontWeight: 'bold', marginLeft: 30, fontSize: 17, color: hitam},
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
