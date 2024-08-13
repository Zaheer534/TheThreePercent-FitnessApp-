import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {AppImages} from '../../constants/images';

const Home = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        imageStyle={{
          flex: 1,
          //   height: 500,
          justifyContent: 'center',
        }}
        style={{flex: 1}}
        resizeMode="cover"
        source={AppImages.back.background}>
        <View style={styles.innerContainer}>
          <ImageBackground
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              height: 260,
            }}
            resizeMode="cover"
            source={AppImages.circle.img}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                navigation.navigate('Login');
              }}>
              <Text style={styles.buttonText}>Get Started</Text>
            </TouchableOpacity>
          </ImageBackground>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  innerContainer: {
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    height: 260,
    width: '100%',

    // backgroundColor: 'green',
  },
  button: {
    backgroundColor: 'rgba(255, 138, 31, 1)',
    width: '40%',
    top: 20,
    alignItems: 'center',
    padding: 10,
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 12,
    fontWeight: '600',
    color: 'rgba(255, 255, 255, 1)',
  },
});
