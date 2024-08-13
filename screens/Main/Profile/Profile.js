import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import {LineChart} from 'react-native-gifted-charts';
import * as Progress from 'react-native-progress';
import {profileStyles} from './ProfileStyles';
import {profile, workout} from '../../../constants/keywords';
import {AppImages} from '../../../constants/images';
import {Divider} from '@rneui/themed';
const {width, height} = Dimensions.get('window');
const Profile = () => {
  const data = [
    {value: 25},
    {value: 25},
    {value: 10},
    {value: 35},
    {value: 5},
    {value: 40},
    {value: 25},
    {value: 25},
    {value: 25},
    {value: 25},
  ];

  const solidLineData = data.slice(0, 3);
  const dashedLineData = data.slice(6);

  return (
    <View>
      <View style={[profileStyles.header, {gap: 27}]}>
        <Image style={{marginTop: 8}} source={AppImages.leftArrow.img} />
        <Text style={[profileStyles.text]}>{profile.profile}</Text>
      </View>
      <View style={profileStyles.imgContainer}>
        <Image style={profileStyles.img} source={AppImages.steveProfile} />
        <Text style={[profileStyles.text, {fontSize: 20}]}>Steve Lawrence</Text>
        <Text
          style={[profileStyles.smallText, {fontSize: 15, fontWeight: '400'}]}>
          @steve_77
        </Text>
      </View>
      <View style={profileStyles.infoContainer}>
        <View
          style={{
            width: width * 0.25,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View style={profileStyles.infoBox}>
            <Image
              style={[profileStyles.img, {width: width * 0.07}]}
              resizeMode="center"
              source={AppImages.weight}
            />
          </View>
          <View>
            <Text style={[profileStyles.smallText, {fontSize: 10}]}>
              {profile.weight}
            </Text>
            <Text style={[profileStyles.text, {fontSize: 15}]}>
              {profile.kg}
            </Text>
          </View>
        </View>
        <View
          style={{
            width: width * 0.27,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View
            style={[
              profileStyles.infoBox,
              {backgroundColor: 'rgba(255, 102, 0, 0.2)'},
            ]}>
            <Image
              style={[profileStyles.img, {width: width * 0.07}]}
              resizeMode="center"
              source={AppImages.height}
            />
          </View>
          <View>
            <Text style={[profileStyles.smallText, {fontSize: 10}]}>
              {profile.height}
            </Text>
            <Text style={[profileStyles.text, {fontSize: 15}]}>
              {profile.inch}
            </Text>
          </View>
        </View>
        <View
          style={{
            width: width * 0.27,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View
            style={[
              profileStyles.infoBox,
              {backgroundColor: 'rgba(31, 147, 255, 0.2)'},
            ]}>
            <Image
              style={[profileStyles.img, {width: width * 0.07}]}
              resizeMode="center"
              source={AppImages.age}
            />
          </View>
          <View>
            <Text style={[profileStyles.smallText, {fontSize: 10}]}>
              {profile.age}
            </Text>
            <Text style={[profileStyles.text, {fontSize: 15}]}>
              {profile.years}
            </Text>
          </View>
        </View>
      </View>

      <View
        style={{
          backgroundColor: 'white',
          flexDirection: 'row',
          elevation: 10,
          margin: 20,
          borderRadius: 10,
          justifyContent: 'space-between',
        }}>
        <View style={{margin: 10, alignItems: 'flex-start', gap: 10}}>
          <View>
            <Text
              style={[profileStyles.text, {fontSize: 15, fontWeight: '700'}]}>
              Today
            </Text>
            <Text
              style={[
                profileStyles.smallText < {fontSize: 12, fontWeight: '600'},
              ]}>
              Budget 2600 Cal
            </Text>
          </View>
          <View>
            {/* <Progress.Circle size={60} indeterminate={true} />
             */}
            <AnimatedCircularProgress
              size={110}
              width={12}
              fill={70}
              rotation={325}
              tintColor="rgba(84, 204, 110, 1)"
              onAnimationComplete={() => console.log('onAnimationComplete')}
              backgroundColor="rgba(0, 0, 0, 0.2)"
              backgroundWidth={1.5}
              children={fill => (
                <View>
                  <Text
                    style={[
                      profileStyles.text,
                      {fontSize: 15, fontWeight: '600'},
                    ]}>
                    1200
                  </Text>
                  <Text
                    style={[
                      profileStyles.smallText,
                      {fontSize: 12, fontWeight: '600', lineHeight: 13},
                    ]}>
                    Cal left
                  </Text>
                </View>
              )}
            />
          </View>
        </View>
        <Divider
          style={{marginTop: 20}}
          orientation="vertical"
          width={1}
          height={150}
        />
        <View style={{margin: 10, alignItems: 'center'}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: width * 0.287,
              //   backgroundColor: 'green',
              justifyContent: 'space-between',
            }}>
            <Image
              style={{
                tintColor: 'rgba(255, 138, 31, 1)',
                width: width * 0.057,
                height: width * 0.057,
              }}
              resizeMode="center"
              source={AppImages.heart}
            />
            <Text
              style={[profileStyles.text, {fontSize: 15, fontWeight: '700'}]}>
              Heart Rate
            </Text>
          </View>
          <View style={{}}>
            <LineChart
              data={data}
              width={130}
              height={80}
              thickness1={3}
              hideDataPoints
              hideYAxisText
              hideAxesAndRules
              dashed
              spacing={12}
              hideRules
              color="rgba(255, 138, 31, 1)"
            />
          </View>
          <View style={{alignItems: 'center'}}>
            <Text
              style={[profileStyles.text, {fontSize: 15, fontWeight: '700'}]}>
              83.3
            </Text>
            <Text
              style={[
                profileStyles.smallText,
                {fontSize: 12, fontWeight: '600', lineHeight: 12.3},
              ]}>
              bpm
            </Text>
          </View>
        </View>
      </View>

      <View>
        <FlatList
          data={workout}
          //   horizontal
          numColumns={3}
          columnWrapperStyle={{
            justifyContent: 'space-evenly',
          }}
          //   contentContainerStyle={{alignSelf: 'center'}}
          renderItem={({item, index}) => {
            return (
              <View
                style={{
                  width: width * 0.27,
                  height: width * 0.3,
                  borderRadius: 10,
                  alignItems: 'center',
                  backgroundColor: 'white',
                  //   paddingBottom: 15,
                  //   justifyContent: 'center',
                  marginBottom: 10,
                  elevation: 5,
                }}>
                <Image
                  style={{
                    tintColor:
                      index == 0
                        ? 'rgba(84, 204, 110, 1)'
                        : index == 1
                        ? 'rgba(255, 138, 31, 1)'
                        : 'rgba(31, 147, 255, 1)',
                    width: width * 0.17,
                    height: width * 0.12,
                    marginRight: 20,
                    marginTop: 10,
                  }}
                  resizeMode="center"
                  source={item.img}
                />
                <Text
                  style={[
                    profileStyles.text,
                    {fontSize: 15, fontWeight: '600'},
                  ]}>
                  {item.text}
                </Text>
                <Text
                  style={[
                    profileStyles.smallText,
                    {fontSize: 12, fontWeight: '600', lineHeight: 12.3},
                  ]}>
                  {item.amount}
                </Text>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
