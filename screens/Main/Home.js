import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {AppImages} from '../../constants/images';
import {exercise} from '../../constants/keywords';
import {useNavigation} from '@react-navigation/native';

const {width, height} = Dimensions.get('window');

const HomeScreen = () => {
  const navigation = useNavigation();
  const renderExercise = ({item, index}) => {
    return (
      <View style={styles.exerciseContainer}>
        <View style={styles.imgContainer}>
          <Image
            resizeMode="contain"
            style={[
              styles.image,
              {
                marginLeft: index == 1 || index == 2 ? 11 : 0,
                // height: index == 2 && height * 0.18,
              },
            ]}
            source={item.img}
          />
        </View>

        <Text
          style={
            (styles.text,
            {
              fontSize: 15,
              fontWeight: '700',
              color: 'rgba(255, 138, 31, 1)',
              marginLeft: 10,
            })
          }>
          {item.text}
        </Text>
        <Text
          style={
            (styles.text,
            {
              fontSize: 12,
              fontWeight: '600',
              color: 'rgba(0, 0, 0, 1)',
              marginLeft: 10,
            })
          }>
          {item.workout}
        </Text>
        <View style={styles.timeContainer}>
          <Image resizeMode="center" source={item.time} />
          <Text
            style={[
              styles.text,
              {fontSize: 12, fontWeight: '600', color: 'rgba(0, 0, 0, 0.5)'},
            ]}>
            {item.duration}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      <View style={styles.header}>
        <Image source={AppImages.leftArrow.img} />
        <Text style={styles.headerText}>Home</Text>
        <Image style={{borderRadius: 100}} source={AppImages.steve.img} />
      </View>
      <View style={styles.instruction}>
        <Text style={styles.text}>Hi Steve,</Text>
        <Text
          style={[
            styles.text,
            {
              fontSize: 30,
              fontWeight: '700',
              color: 'rgba(0, 0, 0, 1)',
            },
          ]}>
          Get In Shape
        </Text>
      </View>
      <View style={styles.card}>
        <View
          style={{
            marginHorizontal: 22,
            // backgroundColor: 'green',
            // width: '40%',
          }}>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>Entry Lavel</Text>
          </TouchableOpacity>
          <Text
            style={[
              styles.text,
              {
                fontSize: 30,
                fontWeight: '700',
                color: 'rgba(255, 255, 255, 1)',
                marginVertical: 20,
                top: 10,
              },
            ]}>
            Frontal{'\n'}Squats
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 7,
              marginTop: 15,
              // marginBottom: 0,
            }}>
            <TouchableOpacity>
              <Image
                style={{width: width * 0.06, height: height * 0.05}}
                resizeMode="contain"
                source={AppImages.playButton.img}
              />
            </TouchableOpacity>
            <Text
              style={[
                styles.text,
                {
                  fontSize: 12,
                  color: 'rgba(255, 255, 255, 1)',
                },
              ]}>
              30 minutes
            </Text>
          </View>
        </View>
        <View
          style={{
            position: 'absolute',
            alignSelf: 'flex-end',
            // backgroundColor: 'yellow',
          }}>
          <Image
            style={{
              width: width * 0.57,
              height: height * 0.43,
              bottom: 75,
              left: 15,
            }}
            resizeMode="cover"
            source={AppImages.person.img}
          />
        </View>
      </View>
      <View style={styles.instruction}>
        <Text
          style={[
            styles.text,
            {
              fontSize: 30,
              fontWeight: '700',
              color: 'rgba(0, 0, 0, 1)',
            },
          ]}>
          Popular Exercises{' '}
        </Text>
      </View>
      {/* <View style={{flex: 1}}> */}
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={exercise}
        renderItem={renderExercise}
      />
      {/* </View> */}

      <TouchableOpacity
        style={styles.activityBtn}
        onPress={() => {
          navigation.navigate('Main');
        }}>
        <Text style={styles.buttonText}>Check Activity</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 20,
  },
  headerText: {
    fontSize: 30,
    fontWeight: '700',
    color: 'rgba(0, 0, 0, 1)',
  },
  instruction: {
    margin: 10,
    alignItems: 'flex-start',
    marginHorizontal: 35,
  },
  text: {
    fontSize: 15,
    fontWeight: '600',
    lineHeight: 35,
    color: 'rgba(0, 0, 0, 0.5)',
    // paddingLeft: 15,
  },
  card: {
    // flexDirection: 'row',
    margin: 15,
    height: 200,
    backgroundColor: 'rgba(255, 138, 31, 1)',
    borderRadius: 10,
  },
  btn: {
    backgroundColor: 'rgba(31, 147, 255, 1)',
    alignItems: 'center',
    // alignSelf: 'center',
    borderRadius: 30,
    top: 20,
    width: '25%',
  },
  btnText: {
    fontSize: 12,
    fontWeight: '600',
    color: 'white',
    padding: 5,
  },
  playBtn: {
    backgroundColor: 'rgba(31, 147, 255, 1)',
    alignItems: 'center',
    borderRadius: 30,
    width: '8%',
    height: 24,
  },
  exerciseContainer: {
    backgroundColor: 'white',
    elevation: 5,
    // paddingBottom: 0,
    width: width * 0.36,
    height: height * 0.2,
    alignItems: 'flex-start',
    borderRadius: 10,
    marginLeft: 15,
  },
  timeContainer: {
    width: width * 0.3,
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
    // backgroundColor: 'yellow',
    justifyContent: 'space-evenly',
  },
  imgContainer: {
    width: width * 0.33,
    height: height * 0.09,
    marginTop: 5,
    // alignItems: 'center',

    // backgroundColor: 'yellow',
  },
  image: {
    // marginRight: 20,

    width: width * 0.2,
    height: height * 0.085,
  },
  activityBtn: {
    backgroundColor: 'rgba(255, 138, 31, 1)',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    bottom: 30,
    width: '60%',
  },
  buttonText: {
    fontSize: 15,
    fontWeight: '700',
    color: 'white',
    padding: 10,
  },
});
