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

const {width, height} = Dimensions.get('window');

const Activity = () => {
  const navigation = useNavigation();
  const layout = useWindowDimensions();
  const [selected, setSelected] = useState('today');

  const FirstRoute = () => (
    <View style={styles.sceneContainer}>
      <DailyActivity />
    </View>
  );

  const SecondRoute = () => (
    <View style={styles.sceneContainer}>
      <WeeklyActivity />
    </View>
  );
  const ThirdRoute = () => (
    <View style={styles.sceneContainer}>
      <MonthlyActivity />
    </View>
  );

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
  });

  const [index, setIndex] = useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Today'},
    {key: 'second', title: 'This Week'},
    {key: 'third', title: 'This Month'},
  ]);

  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={styles.tabBarIndicator}
      style={styles.tabBar}
      pressColor="white"
      renderLabel={({route, focused}) => (
        <Text
          style={[
            styles.tabBarLabel,
            focused ? styles.tabBarLabelFocused : styles.tabBarLabelUnfocused,
          ]}>
          {route.title}
        </Text>
      )}
    />
  );

  return (
    <View style={styles.container}>
      <View style={[styles.header, styles.headerGap]}>
        <Image style={styles.headerImage} source={AppImages.leftArrow.img} />
        <Text style={[styles.headerText, styles.headerCenterText]}>
          Activity
        </Text>
        <Image
          style={[styles.headerImage, styles.headerImageRounded]}
          source={AppImages.steve.img}
        />
      </View>

      <TabView
        style={styles.tabView}
        navigationState={{index, routes}}
        tabBarPosition="top"
        renderScene={renderScene}
        renderTabBar={renderTabBar}
        onIndexChange={setIndex}
        initialLayout={{width: layout.width}}
      />
    </View>
  );
};

export default Activity;

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
  },
  headerGap: {
    gap: 27,
  },
  headerText: {
    fontSize: 30,
    fontWeight: '700',
    color: 'rgba(0, 0, 0, 1)',
  },
  headerCenterText: {
    textAlign: 'center',
  },
  headerImage: {
    marginTop: 8,
  },
  headerImageRounded: {
    borderRadius: 100,
  },
  tabView: {
    backgroundColor: 'white',
  },
  tabBar: {
    backgroundColor: 'white',
    height: height * 0.055,
  },
  tabBarIndicator: {
    backgroundColor: 'rgba(255, 138, 31, 1)',
  },
  tabBarLabel: {
    margin: 5,
    fontSize: 15,
    fontWeight: '600',
  },
  tabBarLabelFocused: {
    color: 'rgba(255, 138, 31, 1)',
  },
  tabBarLabelUnfocused: {
    color: 'rgba(0, 0, 0, 0.3)',
  },
  sceneContainer: {},
});
