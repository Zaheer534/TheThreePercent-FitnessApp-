import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {AppImages} from '../../constants/images';

const Login = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        imageStyle={{
          //   height: 500,
          justifyContent: 'center',
        }}
        style={{flex: 1, justifyContent: 'center'}}
        resizeMode="cover"
        source={AppImages.back.background}>
        <View style={styles.container}>
          <View style={styles.innerContainer}>
            <Text
              style={{
                fontSize: 50,
                fontWeight: '700',
                color: 'rgba(255, 255, 255, 1)',
                fontFamily: 'Aileron',
                top: 35,
                //   lineHeight: 60,
              }}>
              Make
            </Text>
            <Text
              style={{
                fontSize: 50,
                fontWeight: '700',
                color: 'rgba(255, 255, 255, 1)',
                //   lineHeight: 50,
                top: 15,
              }}>
              Yourself
            </Text>
            <Text
              style={{
                fontSize: 80,
                fontWeight: '700',
                color: 'rgba(255, 255, 255, 1)',
                //   lineHeight: 50,
                bottom: 12,
              }}>
              Perfect!
            </Text>
          </View>
          <View style={styles.loginContainer}>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button}>
                <Image style={{right: 15}} source={AppImages.email.img} />
                <Text style={[styles.buttonText, {right: 11}]}>EMAIL</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Image style={{right: 4}} source={AppImages.facebook.img} />
                <Text style={[styles.buttonText, {left: 5}]}>FACEBOOK</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, {backgroundColor: 'white'}]}>
                <Image style={{right: 10}} source={AppImages.google.img} />
                <Text style={[styles.buttonText, {color: 'black', right: 5}]}>
                  GOOGLE
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.accountContainer}>
              <TouchableOpacity
                style={[
                  styles.button,
                  {backgroundColor: 'rgba(31, 147, 255, 1)'},
                ]}
                onPress={() => {
                  navigation.navigate('Signup');
                }}>
                <Text style={styles.buttonText}>CREATE NEW ACCOUNT</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.buttonText}>
                  {' '}
                  Start Your Free 30-Day Trial.{' '}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'flex-start',
    // height: 260,
    width: '100%',
    // backgroundColor: 'orange',
  },
  innerContainer: {
    // alignSelf: 'center',
    // justifyContent: 'center',
    // alignItems: 'flex-start',
    // height: 260,
    left: 20,
    width: '100%',
    // backgroundColor: 'blue',
  },
  loginContainer: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    height: 260,
    width: '100%',
    // backgroundColor: 'yellow',
  },
  buttonContainer: {
    // alignSelf: 'center',
    // justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    top: 40,
    // backgroundColor: 'green',
  },
  button: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255, 138, 31, 1)',
    justifyContent: 'center',
    gap: 20,
    width: '75%',
    alignItems: 'center',
    padding: 10,
    marginVertical: 5,
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 12,
    fontWeight: '600',
    color: 'rgba(255, 255, 255, 1)',
  },
  accountContainer: {
    alignItems: 'center',
    width: '100%',
    top: 80,
    // backgroundColor: 'black',
  },
});
