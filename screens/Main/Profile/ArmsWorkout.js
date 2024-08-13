import React from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {AppImages} from '../../../constants/images';
import {armsWorkout} from '../../../constants/keywords';

const {width} = Dimensions.get('window');

const ArmsWorkout = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={[styles.header, styles.headerGap]}>
        <View style={styles.headerTextContainer}>
          <Text style={[styles.text, styles.headerText]}>Welcome</Text>
          <Text style={[styles.text, styles.headerNameText]}>Mr. Steve,</Text>
        </View>
        <Image style={styles.headerImage} source={AppImages.steve.img} />
      </View>
      <View style={styles.box}>
        <Text style={[styles.text, styles.titleText]}>ARMS WORKOUT</Text>
      </View>
      <View style={[styles.box, styles.todayBox]}>
        <Text style={[styles.text, styles.todayText]}>TODAY</Text>
      </View>

      <View style={[styles.box, styles.exercisesBox]}>
        <Text style={[styles.text, styles.exercisesText]}>EXERCISES</Text>
        <Text style={[styles.text, styles.completeText]}>MARK AS COMPLETE</Text>
      </View>
      <FlatList
        data={armsWorkout}
        contentContainerStyle={styles.flatListContainer}
        renderItem={({item, index}) => (
          <TouchableOpacity
            style={styles.listBox}
            onPress={() => {
              if (index === 1) {
                navigation.navigate('Arms');
              }
            }}>
            <Image style={styles.img} resizeMode="contain" source={item.img} />
            <View>
              <Text style={[styles.text, styles.listItemText]}>
                {item.text}
              </Text>
              <Text style={[styles.text, styles.listItemSubText]}>
                {item.task}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default ArmsWorkout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 20,
    marginLeft: 25,
    width: width * 0.87,
  },
  headerGap: {
    gap: 27,
  },
  headerTextContainer: {
    alignItems: 'flex-start',
  },
  headerText: {
    textAlign: 'center',
  },
  headerNameText: {
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
  },
  headerImage: {
    marginTop: 8,
    borderRadius: 100,
  },
  text: {
    fontSize: 15,
    fontWeight: '600',
    color: 'rgba(0, 0, 0, 1)',
  },
  box: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 20,
    fontWeight: '700',
    color: 'rgba(31, 147, 255, 1)',
  },
  todayBox: {
    backgroundColor: 'white',
    margin: 15,
    elevation: 10,
    borderRadius: 5,
  },
  todayText: {
    fontSize: 14,
    fontWeight: '400',
    color: 'rgba(0, 0, 0, 1)',
    padding: 20,
  },
  exercisesBox: {
    width: width * 0.83,
    justifyContent: 'space-between',
    marginLeft: 28,
  },
  exercisesText: {
    fontSize: 14,
    fontWeight: '400',
    color: 'rgba(0, 0, 0, 1)',
  },
  completeText: {
    fontSize: 12,
    fontWeight: '600',
    color: 'rgba(255, 111, 15, 1)',
  },
  flatListContainer: {
    margin: 10,
    paddingBottom: 25,
  },
  listBox: {
    flexDirection: 'row',
    width: width * 0.93,
    height: width * 0.17,
    borderRadius: 5,
    elevation: 5,
    marginTop: 5,
    marginLeft: 0,
    alignSelf: 'center',
    backgroundColor: 'white',
    alignItems: 'center',
    paddingLeft: 15,
  },
  img: {
    width: width * 0.29,
    height: width * 0.3,
    right: 14,
  },
  listItemText: {
    fontSize: 14,
    fontWeight: '400',
    color: 'rgba(17, 17, 17, 1)',
    marginLeft: 10,
  },
  listItemSubText: {
    fontSize: 10,
    fontWeight: '400',
    color: 'rgba(133, 132, 132, 1)',
    marginLeft: 10,
  },
});
