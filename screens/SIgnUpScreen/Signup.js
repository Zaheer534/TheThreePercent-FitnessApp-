import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {AppImages} from '../../constants/images';

const Signup = ({navigation}) => {
  return (
    <View>
      <View style={styles.signUpContainer}>
        <Text style={styles.signUpText}>Sign up</Text>
      </View>
      <View style={{}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <View style={styles.nameContainer}>
            <Text style={styles.titleText}>First Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter first name"
              placeholderTextColor={'rgba(241, 105, 34, 1)'}
              // underlineColorAndroid={'black'}
            />
          </View>
          <View style={styles.nameContainer}>
            <Text style={styles.titleText}>Last Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter last name"
              placeholderTextColor={'rgba(241, 105, 34, 1)'}
              // underlineColorAndroid={'black'}
              textAlign={'left'}
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            margin: 25,
            //   backgroundColor: 'green',
          }}>
          <View style={styles.nameContainer}>
            <Text style={styles.titleText}>Date of Birth</Text>
            <View style={{flexDirection: 'row', marginTop: 10}}>
              <TextInput
                style={[
                  styles.input,
                  {
                    width: '30%',
                    borderRightWidth: 0.5,
                    paddingTop: 1,
                    height: 30,
                  },
                ]}
                placeholder="Day"
                placeholderTextColor={'rgba(241, 105, 34, 1)'}
                // underlineColorAndroid={'black'}
              />
              <TextInput
                style={[
                  styles.input,
                  {
                    width: '50%',
                    borderRightWidth: 0.5,
                    paddingLeft: 10,
                    paddingTop: 1,
                    height: 30,
                  },
                ]}
                placeholder="Month"
                placeholderTextColor={'rgba(241, 105, 34, 1)'}
                // underlineColorAndroid={'black'}
              />
              <TextInput
                style={[
                  styles.input,
                  {width: '165%', paddingLeft: 10, paddingTop: 1, height: 30},
                ]}
                placeholder="Year"
                placeholderTextColor={'rgba(241, 105, 34, 1)'}
                // underlineColorAndroid={'black'}
              />
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            marginLeft: 25,
            //   backgroundColor: 'green',
          }}>
          <View style={styles.nameContainer}>
            <Text style={styles.titleText}>Your Email</Text>
            <View style={{flexDirection: 'row', marginTop: 10}}>
              <TextInput
                style={[
                  styles.input,
                  {width: '215%', paddingTop: 1, height: 30},
                ]}
                placeholder="Enter email"
                placeholderTextColor={'rgba(241, 105, 34, 1)'}
                // underlineColorAndroid={'black'}
              />
              <View style={{borderBottomWidth: 0.5}}>
                <Image source={AppImages.check.img} />
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            marginLeft: 25,

            //   backgroundColor: 'green',
          }}>
          <View style={{flexDirection: 'row', marginTop: 20}}>
            <TextInput
              style={[styles.input, {width: '96%', paddingTop: 1, height: 30}]}
              placeholder="Password"
              placeholderTextColor={'rgba(0, 0, 0, 0.5)'}
              // underlineColorAndroid={'black'}
            />
          </View>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button]}
          onPress={() => {
            navigation.navigate('Onboard');
          }}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
        <Text
          style={{
            color: 'black',
            fontSize: 10,
            fontWeight: '300',
            textAlign: 'center',
          }}>
          By signing up you agree to our Terms of{'\n'}Use and Privacy Policy
        </Text>
      </View>
      <View>
        <ImageBackground
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: 190,
          }}
          resizeMode="cover"
          source={AppImages.orange.img}>
          <TouchableOpacity>
            <Text
              style={[styles.buttonText, {textDecorationLine: 'underline'}]}>
              Our Terms and Conditions
            </Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  signUpContainer: {
    margin: 45,
    alignItems: 'center',
    // backgroundColor: 'green',
  },
  signUpText: {
    fontSize: 40,
    fontWeight: '700',
    color: 'rgba(0, 0, 0, 1)',
  },
  nameContainer: {
    width: '40%',
    // backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  titleText: {
    fontSize: 15,
    fontWeight: '400',
    color: 'rgba(0, 0, 0, 1)',
  },
  input: {
    width: '95%',
    paddingLeft: -5,
    borderBottomWidth: 0.5,
    height: 40,
  },
  buttonContainer: {
    alignItems: 'center',
    width: '100%',
    // top: 30,
    marginVertical: 30,
    // backgroundColor: 'black',
  },
  button: {
    flexDirection: 'row',
    backgroundColor: 'rgba(241, 105, 34, 1)',
    justifyContent: 'center',
    gap: 20,
    width: '50%',
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
});
