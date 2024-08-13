import {Dimensions, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Calendar} from 'react-native-calendars';
import moment from 'moment';
import {Picker} from '@react-native-picker/picker';

const {width} = Dimensions.get('window');
const workoutList = [
  {
    title: 'Arms WorkOut',
    duration: '2 hours',
    sets: '3 sets',
    calories: '2 calories',
    date: '2024-08-06',
  },
  {
    title: 'Chest WorkOut',
    duration: '1 hour',
    sets: '2 sets',
    calories: '3 calories',
    date: '2024-08-07',
  },
  {
    title: 'Abs WorkOut',
    duration: '3 hours',
    sets: '5 sets',
    calories: '4 calories',
    date: '2024-08-08',
  },
  {
    title: 'Running',
    duration: '1 hour',
    sets: '3 times',
    calories: '3 calories',
    date: '2024-09-12',
  },
  {
    title: 'Push Ups',
    duration: '1 hour',
    sets: '3 times',
    calories: '4 calories',
    date: '2024-09-13',
  },
  {
    title: 'Bi-Ceps',
    duration: '1 hour',
    sets: '3 times',
    calories: '4 calories',
    date: '2024-10-04',
  },
  {
    title: 'Tri-Ceps',
    duration: '1 hour',
    sets: '3 times',
    calories: '4 calories',
    date: '2024-10-05',
  },
  {
    title: 'Thighs',
    duration: '1 hour',
    sets: '3 times',
    calories: '4 calories',
    date: '2024-10-11',
  },
  {
    title: 'Chest',
    duration: '1 hour',
    sets: '3 times',
    calories: '4 calories',
    date: '2024-10-12',
  },
  {
    title: 'Thighs(2023)',
    duration: '1 hour',
    sets: '3 times',
    calories: '4 calories',
    date: '2023-10-11',
  },
  {
    title: 'Chest(2023)',
    duration: '1 hour',
    sets: '3 times',
    calories: '4 calories',
    date: '2023-10-12',
  },
];

const WorkoutDetails = () => {
  const [range, setRange] = useState({startDate: null, endDate: null});
  const [dateRange, setDateRange] = useState([]);
  const [currentMonth, setCurrentMonth] = useState(moment().format('YYYY-MM'));
  const [workouts, setWorkouts] = useState([]);
  const [currentYear, setCurrentYear] = useState(moment().format('YYYY'));

  const handleDate = day => {
    const {startDate, endDate} = range;
    if (!startDate) {
      setRange({startDate: day.dateString, endDate: null});
    } else if (!endDate) {
      const selectedEndDate = moment(day.dateString).isAfter(startDate)
        ? day.dateString
        : startDate;
      const selectedStartDate = moment(day.dateString).isAfter(startDate)
        ? startDate
        : day.dateString;
      setRange({startDate: selectedStartDate, endDate: selectedEndDate});
      setDateRange(prev => [
        ...prev,
        {startDate: selectedStartDate, endDate: selectedEndDate},
      ]);
    } else {
      setRange({startDate: day.dateString, endDate: null});
    }
  };

  const getMarkedDates = () => {
    let markedDates = {};
    dateRange.forEach(ranges => {
      let start = moment(ranges.startDate);
      let end = moment(ranges.endDate);

      while (start.isBefore(end) || start.isSame(end, 'day')) {
        const dateStr = start.format('YYYY-MM-DD');
        markedDates[dateStr] = {
          selected: true,
          color: 'rgba(255, 102, 0, 1)',
          textColor: 'white',
        };
        start.add(1, 'day');
      }
      markedDates[ranges.startDate] = {
        startingDay: true,
        color: 'rgba(255, 102, 0, 1)',
        textColor: 'white',
      };
      markedDates[ranges.endDate] = {
        endingDay: true,
        color: 'rgba(255, 102, 0, 1)',
        textColor: 'white',
      };
    });

    const {startDate, endDate} = range;
    if (startDate && endDate) {
      let start = moment(startDate);
      let end = moment(endDate);

      while (start.isBefore(end, 'day') || start.isSame(end, 'day')) {
        const dateStr = start.format('YYYY-MM-DD');
        markedDates[dateStr] = {
          selected: true,
          color: 'rgba(255, 102, 0, 0.5)',
          textColor: 'white',
        };
        start.add(1, 'day');
      }
    } else if (startDate) {
      markedDates[startDate] = {
        selected: true,
        color: 'rgba(255, 102, 0, 0.5)',
        textColor: 'white',
      };
    }
    return markedDates;
  };

  const handlelist = (startDate, endDate) => {
    if (!startDate || !endDate) {
      return [];
    }
    return workoutList.filter(list => {
      const workoutDate = moment(list.date);
      return workoutDate.isBetween(startDate, endDate, 'day', '[]');
    });
  };
  const filteredWorkouts =
    range.startDate && range.endDate
      ? handlelist(range.startDate, range.endDate)
      : workoutList.filter(workout =>
          moment(workout.date).isSame(currentMonth, 'month'),
        ) &&
        workoutList.filter(workout =>
          moment(workout.date).isSame(currentYear, 'year'),
        );

  const handleMonthChange = month => {
    setCurrentMonth(moment(month.dateString).format('YYYY-MM'));
    setCurrentYear(moment(month.dateString).format('YYYY'));
    setRange({startDate: null, endDate: null});
    setDateRange([]);
  };

  const handleYearChange = year => {
    setCurrentYear(year);
    setCurrentMonth(`${year}-${moment(currentMonth, 'YYYY-MM').format('MM')}`);
    setRange({startDate: null, endDate: null});
  };

  const getYearOptions = () => {
    const startYear = moment().subtract(5, 'years').year();
    const endYear = moment().add(0, 'years').year();
    let yearOptions = [];

    for (let year = startYear; year <= endYear; year++) {
      yearOptions.push(
        <Picker.Item key={year} label={`${year}`} value={`${year}`} />,
      );
    }

    return yearOptions;
  };

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 10,
        }}>
        {/* <Text>Select Year:</Text> */}
        <Picker
          style={{height: 50, width: 150}}
          selectedValue={currentYear}
          onValueChange={handleYearChange}>
          {getYearOptions()}
        </Picker>
      </View>
      <View>
        <Calendar
          onDayPress={handleDate}
          onMonthChange={handleMonthChange}
          markingType="period"
          markedDates={getMarkedDates()}
          theme={{
            backgroundColor: '#ffffff',
            calendarBackground: '#ffffff',
            textSectionTitleColor: '#b6c1cd',
            selectedDayBackgroundColor: 'green',
            selectedDayTextColor: '#ffffff',
            todayTextColor: '#00adf5',
            dayTextColor: 'black',
          }}
        />
      </View>
      <ScrollView>
        {filteredWorkouts.map((workout, index) => (
          <View key={index} style={styles.dataList}>
            <View style={styles.listBox}>
              <Text style={styles.text}>{workout.title}</Text>
            </View>
            <View style={styles.listBox}>
              <Text style={styles.text}>{workout.duration}</Text>
            </View>
            <View style={styles.listBox}>
              <Text style={styles.text}>{workout.sets}</Text>
            </View>
            <View style={styles.listBox}>
              <Text style={styles.text}>{workout.calories}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default WorkoutDetails;

const styles = StyleSheet.create({
  dataList: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
  },
  listBox: {
    flexDirection: 'row',
    width: width * 0.95,
    height: width * 0.1,
    borderRadius: 5,
    elevation: 5,
    marginTop: 5,
    marginLeft: 0,
    alignSelf: 'center',
    backgroundColor: 'white',
    alignItems: 'center',
    paddingLeft: 15,
  },
  text: {fontSize: 20, fontWeight: '600', color: 'black'},
});
