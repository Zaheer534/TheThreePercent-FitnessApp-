import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {AppImages} from '../../constants/images';
import {exercise} from '../../constants/keywords';
import {useNavigation} from '@react-navigation/native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';

import DailyActivity from './Components/DailyActivity';
import WeeklyActivity from './Components/WeeklyActivity';
import MonthlyActivity from './Components/MonthlyActivity';
import Activity from './Activity';
import WeightLoss from './WeightLoss/WeightLoss';
import Profile from './Profile/Profile';
import WeeklyCheck from './Profile/WeeklyCheck';

const {width, height} = Dimensions.get('window');

const MainScreen = () => {
  const navigation = useNavigation();
  const layout = useWindowDimensions();
  // const [index, setIndex] = useState(1);
  const [selected, setSelected] = useState('today');

  const FirstRoute = () => (
    <View style={{flex: 1}}>
      <WeightLoss />
    </View>
  );

  const SecondRoute = () => (
    <View style={{flex: 1}}>
      <Profile />
    </View>
  );
  const ThirdRoute = () => (
    <View style={{flex: 1, backgroundColor: 'orange'}}></View>
  );
  const FourthRoute = () => (
    <View style={{flex: 1}}>
      <Activity />
    </View>
  );
  const FifthRoute = () => (
    <View style={{flex: 1}}>
      <WeeklyCheck />
    </View>
  );

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
    fourth: FourthRoute,
    fifth: FifthRoute,
  });
  const [index, setIndex] = useState(0);
  const [routes] = React.useState([
    {
      key: 'first',
      icon: (
        <Image
          style={{width: 28, height: 28, alignItems: 'center'}}
          resizeMode="center"
          source={AppImages.home}
        />
      ),
    },
    {
      key: 'second',
      icon: (
        <Image
          style={{width: 28, height: 28, alignItems: 'center'}}
          resizeMode="center"
          source={AppImages.profile}
        />
      ),
    },
    {
      key: 'third',
      icon: (
        <Image
          style={{width: 28, height: 28, alignItems: 'center'}}
          resizeMode="center"
          source={AppImages.plus}
        />
      ),
    },
    {
      key: 'fourth',
      icon: (
        <Image
          style={{width: 28, height: 28, alignItems: 'center'}}
          resizeMode="center"
          source={AppImages.bar}
        />
      ),
    },
    {
      key: 'fifth',
      icon: (
        <Image
          style={{width: 28, height: 28, alignItems: 'center'}}
          resizeMode="center"
          source={AppImages.bell}
        />
      ),
    },
  ]);

  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{backgroundColor: 'white'}}
      pressOpacity={0}
      pressColor="white"
      style={{
        backgroundColor: 'white',
        height: height * 0.07,
      }}
      renderLabel={({route, focused, color}) => <View>{route.icon}</View>}
    />
  );

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <TabView
        style={{backgroundColor: 'white'}}
        navigationState={{index, routes}}
        tabBarPosition="bottom"
        renderScene={renderScene}
        renderTabBar={renderTabBar}
        onIndexChange={setIndex}
        initialLayout={{width: layout.width}}
        swipeEnabled={false}
      />
    </View>
  );
};

export default MainScreen;

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
  updateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: width * 0.333,
    alignItems: 'center',
    // backgroundColor: 'green',
  },
  activityText: {
    fontSize: 15,
    fontWeight: '600',
    color: 'black',
  },
  activityContainer: {
    margin: 10,
  },
});
