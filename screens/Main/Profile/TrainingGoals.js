import React from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {ScrollView} from 'react-native-virtualized-view';
import {useNavigation} from '@react-navigation/native';
import {AppImages} from '../../../constants/images';
import {chest, fatLoss} from '../../../constants/keywords';
import {Divider} from '@rneui/themed';

const {width} = Dimensions.get('window');

const TrainingGoals = () => {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={[styles.header, styles.headerGap]}>
          <View style={styles.alignStart}>
            <Text style={[styles.text, styles.centerText]}>Welcome</Text>
            <Text style={[styles.text, styles.nameText]}>Mr. Steve,</Text>
          </View>
          <Image style={styles.headerImage} source={AppImages.steve.img} />
        </View>
        <View style={styles.imageContainer}>
          <Image
            resizeMode="center"
            style={styles.backImage}
            source={AppImages.backicn}
          />
          <TouchableOpacity
            style={[styles.btnBox, {height: width * 0.1, marginRight: 10}]}
            onPress={() => navigation.navigate('Details')}>
            <Text style={[styles.text, styles.btnText]}>Details</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.trainingStatusContainer}>
          <Text style={[styles.text, styles.statusText]}>Training Status</Text>
          <TextInput
            placeholder="Enter status"
            placeholderTextColor="rgba(17, 17, 17, 1)"
            style={styles.textInput}
          />
        </View>

        <View style={styles.goalsTitleContainer}>
          <Text style={[styles.text, styles.goalsTitleText]}>
            SET GOALS FOR NEXT 6 MONTHS
          </Text>
        </View>

        <View style={styles.goalSectionContainer}>
          <View style={styles.workoutBox}>
            <Text style={[styles.text, styles.workoutBoxText]}>Fat Loss</Text>
          </View>
          <View style={styles.flatListContainer}>
            <FlatList
              data={fatLoss}
              renderItem={({item}) => (
                <View style={styles.listBox}>
                  <Image
                    style={styles.img}
                    resizeMode="center"
                    source={item.img}
                  />
                  <Text style={[styles.text, styles.listText]}>
                    {item.text}
                  </Text>
                </View>
              )}
            />
          </View>
          <Divider
            color="rgba(255, 102, 0, 1)"
            orientation="horizontal"
            width={1}
            height={34}
          />
        </View>

        <View style={styles.primaryFocusContainer}>
          <Text style={[styles.text, styles.primaryFocusText]}>
            PRIMARY FOCUS
          </Text>
        </View>

        <View style={styles.goalSectionContainer}>
          <View style={styles.workoutBox}>
            <Text style={[styles.text, styles.workoutBoxText]}>Chest</Text>
          </View>
          <View style={styles.flatListContainer}>
            <FlatList
              data={chest}
              renderItem={({item}) => (
                <View style={styles.listBox}>
                  <Image
                    style={styles.img}
                    resizeMode="center"
                    source={item.img}
                  />
                  <Text style={[styles.text, styles.listText]}>
                    {item.text}
                  </Text>
                </View>
              )}
            />
          </View>
        </View>

        <TouchableOpacity
          style={[styles.btnBox]}
          onPress={() => navigation.navigate('Workout')}>
          <Text style={[styles.text, styles.btnText]}>Save</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default TrainingGoals;

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
  alignStart: {
    alignItems: 'flex-start',
  },
  text: {
    fontSize: 15,
    fontWeight: '600',
    color: 'rgba(0, 0, 0, 1)',
  },
  centerText: {
    textAlign: 'center',
  },
  nameText: {
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
  },
  headerImage: {
    marginTop: 8,
    borderRadius: 100,
  },
  imageContainer: {
    marginLeft: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  backImage: {
    marginTop: 0,
  },
  trainingStatusContainer: {
    marginTop: 25,
    marginLeft: 20,
  },
  statusText: {
    fontSize: 14,
    fontWeight: '400',
    color: 'rgba(118, 118, 118, 1)',
  },
  textInput: {
    width: width * 0.9,
    borderRadius: 5,
    marginTop: 5,
    borderColor: 'rgba(255, 228, 209, 1)',
    borderWidth: 2,
    paddingLeft: 10,
    fontSize: 16,
    fontWeight: '400',
    color: 'rgba(17, 17, 17, 1)',
  },
  goalsTitleContainer: {
    marginTop: 55,
  },
  goalsTitleText: {
    fontSize: 20,
    fontWeight: '400',
    color: 'rgba(0, 0, 0, 1)',
    textAlign: 'center',
  },
  goalSectionContainer: {
    margin: 25,
  },
  workoutBox: {
    width: width * 0.9,
    height: width * 0.15,
    borderRadius: 5,
    marginTop: 5,
    alignSelf: 'center',
    borderColor: 'rgba(255, 228, 209, 1)',
    borderWidth: 2,
    backgroundColor: 'rgba(255, 102, 0, 1)',
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginVertical: 5,
  },
  workoutBoxText: {
    fontSize: 16,
    fontWeight: '700',
    color: 'rgba(255, 255, 255, 1)',
    marginLeft: 30,
  },
  flatListContainer: {
    width: width * 0.9,
    alignItems: 'flex-start',
    justifyContent: 'center',
    right: 5,
  },
  listBox: {
    flexDirection: 'row',
    width: width * 0.89,
    height: width * 0.15,
    borderRadius: 5,
    marginTop: 5,
    marginVertical: 10,
    alignSelf: 'flex-start',
    borderColor: 'rgba(255, 228, 209, 1)',
    borderWidth: 2,
    alignItems: 'center',
    paddingLeft: 15,
  },
  img: {
    width: width * 0.05,
    height: width * 0.05,
  },
  listText: {
    fontSize: 16,
    fontWeight: '400',
    color: 'rgba(17, 17, 17, 1)',
    marginLeft: 10,
  },
  primaryFocusContainer: {
    margin: 25,
  },
  primaryFocusText: {
    fontSize: 20,
    fontWeight: '400',
    color: 'rgba(0, 0, 0, 1)',
    textAlign: 'center',
  },
  btnBox: {
    width: width * 0.4,
    height: width * 0.15,
    borderRadius: 20,
    marginTop: 5,
    alignSelf: 'center',
    backgroundColor: 'rgba(255, 102, 0, 1)',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
  },
  btnText: {
    fontSize: 16,
    fontWeight: '700',
    color: 'rgba(255, 255, 255, 1)',
  },
});
