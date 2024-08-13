import React, {useState} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {ScrollView} from 'react-native-virtualized-view';
import Slider from '@react-native-community/slider';
import {useNavigation} from '@react-navigation/native';
import {AppImages} from '../../../constants/images';
import {chest, fatLoss, gym, weeklyCheck} from '../../../constants/keywords';
import {Divider} from '@rneui/themed';
import {Calendar} from 'react-native-calendars';
import moment from 'moment';
import Toast from 'react-native-toast-message';
import {makeStyles} from '@rneui/base';

const {width} = Dimensions.get('window');

const Workouts = () => {
  const navigation = useNavigation();
  const [dateRanges, setDateRanges] = useState([]);
  const [currentRange, setCurrentRange] = useState({
    startDate: null,
    endDate: null,
  });

  const showToast = (start, end) => {
    const startFormatted = start ? moment(start).format('ddd, MMM DD') : 'N/A';
    const endFormatted = end ? moment(end).format('ddd, MMM DD') : 'N/A';

    Toast.show({
      type: 'success',
      text1: `Date_Range: ${startFormatted}-${endFormatted}`,
      position: 'top',
      visibilityTime: 4000,
      autoHide: true,
      topOffset: 30,
    });
  };

  const disabledDates = ['2024-08-20', '2024-08-21'];

  const handleDayPress = day => {
    if (disabledDates.includes(day.dateString)) {
      return;
    }

    const {startDate, endDate} = currentRange;
    if (!startDate) {
      setCurrentRange({startDate: day.dateString, endDate: null});
    } else if (!endDate) {
      setCurrentRange({startDate, endDate: day.dateString});
      setDateRanges([...dateRanges, {startDate, endDate: day.dateString}]);
      showToast(startDate, day.dateString);
      setCurrentRange({startDate: null, endDate: null});
    }
  };

  const getMarkedDates = () => {
    let markedDates = {};
    dateRanges.forEach(range => {
      let start = moment(range.startDate);
      let end = moment(range.endDate);

      while (start.isBefore(end)) {
        const dateStr = start.format('YYYY-MM-DD');
        markedDates[dateStr] = {
          selected: true,
          color: 'rgba(255, 102, 0, 1)',
          textColor: 'white',
        };
        // console.log(markedDates);
        start.add(1, 'day');
      }
      markedDates[range.startDate] = {
        startingDay: true,
        color: 'rgba(255, 102, 0, 1)',
        textColor: 'white',
      };
      // console.log(markedDates);
      markedDates[range.endDate] = {
        endingDay: true,
        color: 'rgba(255, 102, 0, 1)',
        textColor: 'white',
      };
    });
    disabledDates.forEach(date => {
      if (!markedDates[date]) {
        markedDates[date] = {
          disabled: true,
          color: 'transparent',
          textColor: 'rgba(200, 200, 200, 1)',
        };
      } else {
        markedDates[date] = {
          disabled: true,
          color: 'orange',
          textColor: 'red',
        };
      }
    });

    return markedDates;
  };

  return (
    <>
      <View style={styles.container}>
        <View style={[styles.header, styles.headerGap]}>
          <View style={styles.headerTextContainer}>
            <Text style={[styles.text, styles.headerText]}>Welcome</Text>
            <Text style={[styles.text, styles.headerNameText]}>Mr. Steve,</Text>
          </View>
          <Image style={styles.headerImage} source={AppImages.steve.img} />
        </View>
        <View style={styles.calendarContainer}>
          <View style={styles.calenderOutput}>
            <Text style={styles.outputText}>
              CurrentDate: {moment(new Date())?.format('ddd, MMM DD')}
            </Text>

            {/* <Text style={styles.outputText}>
              DateRange:
              {startDate
                ? moment(new Date(startDate)).format('ddd, MMM DD')
                : 'Select start date'}
            </Text>
            <Text style={styles.outputText}>
              EndDate:{' '}
              {endDate
                ? moment(new Date(endDate)).format('ddd, MMM DD')
                : 'Select End Date'}
            </Text> */}
          </View>
          <Calendar
            key={dateRanges && currentRange ? 'range-selected' : 'default'}
            style={styles.calender}
            onDayPress={handleDayPress}
            minDate={new Date().toISOString().split('T')[0]}
            disableAllTouchEventsForDisabledDays={false}
            hideExtraDays={true}
            markingType={'period'}
            markedDates={getMarkedDates()}
            theme={{
              todayTextColor: 'black',
              todayBackgroundColor:
                currentRange.startDate && !currentRange.endDate
                  ? 'orange'
                  : 'orange',
              todayBorderWidth: 1,
              selectedDayBackgroundColor: 'rgba(255, 102, 0, 0.5)',
            }}
          />
        </View>
        <FlatList
          data={gym}
          contentContainerStyle={styles.flatListContainer}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                style={styles.listBox}
                onPress={() => {
                  index === 1 ? navigation.navigate('Arms') : null;
                }}>
                <Image
                  style={styles.img}
                  resizeMode="contain"
                  source={item.img}
                />
                <View>
                  <Text style={[styles.text, styles.listItemText]}>
                    {item.text}
                  </Text>
                  <Text style={[styles.text, styles.listItemSubText]}>
                    {item.task}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
        <TouchableOpacity
          style={[styles.reportBox]}
          onPress={() => {
            navigation.navigate('Report');
          }}>
          <Text style={[styles.reportText]}>Workout Reports</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Workouts;

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
  calenderOutput: {
    alignItems: 'flex-start',
    margin: 10,
    width: width * 0.9,
  },
  outputText: {
    fontSize: 15,
    fontWeight: '600',
    color: 'rgba(29, 27, 32, 1)',
    lineHeight: 25,
    textAlign: 'left',
  },
  calender: {
    width: width * 0.9,
    borderTopWidth: 1,
    borderColor: 'rgba(230, 230, 230, 1)',
    marginBottom: 3,
  },
  calendarContainer: {
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: 'white',
    elevation: 10,
    borderRadius: 10,
    marginRight: 5,
  },
  flatListContainer: {
    margin: 10,
    paddingBottom: 25,
  },
  listBox: {
    flexDirection: 'row',
    width: width * 0.95,
    height: width * 0.17,
    borderRadius: 2,
    elevation: 5,
    marginTop: 5,
    marginLeft: 0,
    alignSelf: 'center',
    backgroundColor: 'white',
    alignItems: 'center',
    paddingLeft: 15,
  },
  img: {
    width: width * 0.28,
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
  reportBox: {
    // flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    width: width * 0.7,
    alignItems: 'center',
    backgroundColor: 'rgba(255, 111, 15, 1)',
    margin: 3,
    elevation: 10,
    borderRadius: 5,
  },

  reportText: {
    fontSize: 15,
    fontWeight: '600',
    color: 'white',
    padding: 10,
  },
});
