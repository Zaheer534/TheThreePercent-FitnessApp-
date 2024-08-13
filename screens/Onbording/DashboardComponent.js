import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {BlurView} from '@react-native-community/blur';
import {AppImages} from '../../constants/images';
import LinearGradient from 'react-native-linear-gradient';
import RadialGradient from 'react-native-radial-gradient';

const {width, height} = Dimensions.get('window');
const DashboardComponent = () => {
  return (
    <View>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Check &{'\n'}Go</Text>
      </View>
      <View style={styles.imgContainer}>
        <Image source={AppImages.dashboard.img} />
      </View>

      <View style={styles.textContainer}>
        <View style={styles.eclipseContainer}>
          <RadialGradient
            style={{width: 400, height: 200, opacity: 0.7}}
            colors={['white', 'white', 'white', 'white']}
            stops={[0.3, 0.4, 0.3, 0.75]}
            center={[150, 100]}
            radius={300}>
            <BlurView
              style={styles.blurView}
              blurType="light"
              blurAmount={15}
            />
          </RadialGradient>
        </View>
        <Text
          style={{
            fontSize: 20,
            fontWeight: '700',
            color: 'rgba(31, 147, 255, 1)',
          }}>
          Hello
        </Text>

        <Text
          style={{
            fontSize: 15,
            fontWeight: '600',
            color: 'rgba(0, 0, 0, 1)',
          }}>
          Mr.Steve Lawrence
        </Text>
      </View>
    </View>
  );
};

export default DashboardComponent;

const styles = StyleSheet.create({
  titleContainer: {
    alignItems: 'center',
    margin: 25,
  },
  titleText: {
    fontSize: 40,
    fontWeight: '700',
    color: 'rgba(0, 0, 0, 1)',
  },
  imgContainer: {
    // position: 'absolute',
    // marginTop: 150,
  },
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 220,
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'white',
    gap: 25,
  },

  eclipseContainer: {
    position: 'absolute',
    width: width * 1.1,
    height: width * 0.36,
    bottom: 145,
    borderRadius: 140,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  blurView: {
    width: '100%',
    height: '100%',
    borderRadius: (width * 0.9) / 2,
  },
  linearGradient: {
    // flex: 1,
    position: 'absolute',
    height: 110,
    width: 380,
    borderRadius: 110,
    opacity: 0.7,
  },
});
