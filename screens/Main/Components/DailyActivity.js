import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {dailyActivity} from '../../../constants/keywords';
import BarChartComponent from './BarChart';
const {width, height} = Dimensions.get('window');
const DailyActivity = ({selected}) => {
  const renderActivity = ({item, index}) => {
    return (
      <View style={styles.reportContainer}>
        <View
          style={{
            width: width * 0.4,
            height: height * 0.12,
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: index === 0 ? 21 : 10,
            marginTop: 10,
            gap: 5,
            // backgroundColor: 'red',
          }}>
          <Image
            style={{width: width * 0.15}}
            resizeMode="center"
            source={item.img}
          />
          <Text style={styles.text}>{item.text}</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: index === 0 ? 31 : 20,
            bottom: 15,
            gap: 5,
          }}>
          <Text
            style={[styles.text, {fontSize: 30, color: 'rgba(0, 0, 0, 1)'}]}>
            {item.numbers}
          </Text>
          <Text
            style={[
              styles.text,
              {fontSize: 12, color: 'rgba(0, 0, 0, 0.5)', marginTop: 15},
            ]}>
            {item.calories}
          </Text>
        </View>
      </View>
    );
  };
  return (
    <View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={dailyActivity}
        renderItem={renderActivity}
        contentContainerStyle={{paddingBottom: 20, paddingRight: 5}}
      />
      <View>
        <BarChartComponent />
      </View>
    </View>
  );
};

export default DailyActivity;

const styles = StyleSheet.create({
  reportContainer: {
    backgroundColor: 'white',
    elevation: 5,
    // paddingBottom: 20,
    width: width * 0.44,
    height: height * 0.2,
    alignItems: 'flex-start',
    borderRadius: 10,
    marginTop: 20,
    marginLeft: 15,
  },
  text: {
    color: 'rgba(31, 147, 255, 1)',
    fontSize: 20,
    fontWeight: '600',
  },
});
