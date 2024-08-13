import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {BarChart} from 'react-native-gifted-charts';
const {width, height} = Dimensions.get('window');
const BarChartComponent = () => {
  const barData = [
    {
      value: 103,
      label: '2016',
      spacing: 0,
      labelWidth: 40,
      labelTextStyle: {
        color: 'black',
        fontSize: 12.92,
        fontWeight: '400',
        textAlign: 'left',
      },
      frontColor: 'rgba(255, 138, 31, 1)',
    },
    {value: 55, frontColor: 'rgba(31, 147, 255, 1)'},
    {
      value: 70,
      label: '2017',
      spacing: 0,
      labelWidth: 40,
      labelTextStyle: {
        color: 'black',
        fontSize: 12.92,
        fontWeight: '400',
        textAlign: 'left',
      },
      frontColor: 'rgba(255, 138, 31, 1)',
    },
    {value: 112, frontColor: 'rgba(31, 147, 255, 1)'},
    {
      value: 33,
      label: '2018',
      spacing: 0,
      labelWidth: 40,
      labelTextStyle: {
        color: 'black',
        fontSize: 12.92,
        fontWeight: '400',
        textAlign: 'left',
      },
      frontColor: 'rgba(255, 138, 31, 1)',
    },
    {value: 93, frontColor: 'rgba(31, 147, 255, 1)'},
  ];

  return (
    <>
      <View
        style={{
          margin: 75,
          bottom: 80,
          // width: 285,
          height: 340,
          alignSelf: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 20,
          elevation: 7,
          borderRadius: 7,
          backgroundColor: 'white',
          zIndex: -1,
        }}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.titleContainer}>
            <Text
              style={{
                color: 'black',
                fontSize: 20,
                fontWeight: '600',
                textAlign: 'left',
              }}>
              Progress
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                marginRight: 10,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View
                style={{
                  height: 7,
                  width: 7,
                  borderRadius: 6,
                  backgroundColor: 'rgba(31, 147, 255, 1)',
                  marginRight: 7,
                  marginTop: 3,
                }}
              />
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '600',
                  color: 'rgba(0, 0, 0, 1)',
                }}>
                Goal
              </Text>
            </View>
            <View
              style={{
                marginRight: 10,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View
                style={{
                  height: 7,
                  width: 7,
                  borderRadius: 6,
                  backgroundColor: 'rgba(255, 138, 31, 1)',
                  marginRight: 5,
                  marginTop: 3,
                }}
              />
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '600',
                  color: 'rgba(0, 0, 0, 1)',
                }}>
                Current
              </Text>
            </View>
          </View>
        </View>

        <BarChart
          data={barData}
          barWidth={10}
          spacing={65}
          dashGap={0}
          xAxisThickness={2}
          yAxisThickness={2}
          yAxisExtraHeight={35}
          initialSpacing={35}
          endSpacing={15}
          yAxisColor={'rgba(217, 217, 217, 1)'}
          xAxisColor={'rgba(217, 217, 217, 1)'}
          hideYAxisText={true}
          xAxisTextStyle={{color: 'black'}}
          noOfSections={5}
          maxValue={100}
          adjustToWidth={true}
          // parentWidth={120}
        />
      </View>
    </>
  );
};

export default BarChartComponent;

const styles = StyleSheet.create({
  titleContainer: {
    width: '100%',
    alignSelf: 'flex-start',
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: 'yellow',
    marginLeft: 15,
  },
  titleText: {
    right: 140,
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 24,
    color: 'rgba(0, 0, 0, 1)',
  },
});
