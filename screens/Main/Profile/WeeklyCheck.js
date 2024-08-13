import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Slider from '@react-native-community/slider';
import {useNavigation} from '@react-navigation/native';
import {AppImages} from '../../../constants/images';
import {weeklyCheck} from '../../../constants/keywords';

const {width} = Dimensions.get('window');

const WeeklyCheck = () => {
  const navigation = useNavigation();
  const [sliderValues, setSliderValues] = useState({
    hours: 0,
    sleep: 0,
    energy: 0,
    stress: 0,
    muscle: 0,
    energy2: 0,
    mood: 0,
  });

  const handleSliderChange = (key, value) => {
    setSliderValues(prevState => ({
      ...prevState,
      [key]: value,
    }));
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={[styles.header, {gap: 27}]}>
        <View style={{alignItems: 'flex-start'}}>
          <Text style={[styles.headerText, {textAlign: 'center'}]}>
            Welcome
          </Text>
          <Text
            style={[
              styles.headerText,
              {fontSize: 20, fontWeight: '700', textAlign: 'center'},
            ]}>
            Mr. Steve,
          </Text>
        </View>
        <Image
          style={{marginTop: 8, borderRadius: 100}}
          source={AppImages.steve.img}
        />
      </View>
      <View
        style={{
          marginLeft: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Image
          resizeMode="center"
          style={{marginTop: 0}}
          source={AppImages.backicn}
        />
        <TouchableOpacity
          style={styles.trainingBtn}
          onPress={() => {
            navigation.navigate('Training');
          }}>
          <Text style={styles.trainingText}>Set training goals</Text>
        </TouchableOpacity>
      </View>

      <View style={{alignItems: 'center'}}>
        {Object.keys(sliderValues).map(key => (
          <View key={key}>
            <View style={styles.textBox}>
              <Text style={styles.checkText}>
                {weeklyCheck[key] ||
                  (key === 'energy2' ? weeklyCheck['energy'] : '')}
              </Text>
              <Text style={styles.checkText}>
                {Math.round(sliderValues[key] * 10)}/10
              </Text>
            </View>
            <Slider
              style={{width: 348, height: 10}}
              value={sliderValues[key]}
              onValueChange={value => handleSliderChange(key, value)}
              minimumValue={0}
              maximumValue={1}
              step={0.1}
              minimumTrackTintColor="rgba(255, 138, 31, 1)"
              maximumTrackTintColor="rgba(255, 138, 31, 1)"
              thumbTintColor="rgba(255, 102, 0, 1)"
            />
          </View>
        ))}
      </View>
    </View>
  );
};

export default WeeklyCheck;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 20,
    marginLeft: 25,
    width: width * 0.87,
  },
  headerText: {
    fontSize: 15,
    fontWeight: '600',
    color: 'rgba(0, 0, 0, 1)',
  },
  trainingBtn: {
    backgroundColor: 'rgba(255, 102, 0, 1)',
    borderRadius: 5,
    marginRight: 20,
    width: width * 0.4,
    height: width * 0.1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  trainingText: {
    fontSize: 15,
    fontWeight: '600',
    color: 'rgba(255, 255, 255, 1)',
  },
  textBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 20,
    marginLeft: 20,
    width: width * 0.87,
  },
  checkText: {
    fontSize: 14,
    fontWeight: '400',
    color: 'rgba(0, 0, 0, 1)',
    textShadowOffset: {width: 0.1, height: 0.6},
    textShadowRadius: 0.1,
    textShadowColor: 'black',
  },
});
