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

import {useNavigation} from '@react-navigation/native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import DailyActivity from '../Components/DailyActivity';
import {AppImages} from '../../../constants/images';
import {weightStyles} from './Styles';
import {ingredients} from '../../../constants/keywords';
import {Divider} from '@rneui/themed';

const {width, height} = Dimensions.get('window');

const ItemList = () => {
  const navigation = useNavigation();
  const layout = useWindowDimensions();

  const FirstRoute = () => (
    <View style={{flex: 1}}>
      <FlatList
        data={ingredients}
        renderItem={({item, index}) => {
          return (
            <>
              <View
                style={{
                  width: width * 0.9,
                  height: height * 0.09,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  //   backgroundColor: 'red',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    width: width * 0.5,
                    marginLeft: 10,
                    // justifyContent: 'space-evenly',
                    gap: 10,
                    alignItems: 'center',
                    // backgroundColor: 'green',
                  }}>
                  <Image
                    resizeMode="contain"
                    style={{
                      width: width * 0.1,
                      height: height * 0.05,
                      marginTop: 8,
                      borderRadius: 100,
                    }}
                    source={item.img}
                  />
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: '600',
                      color: 'rgba(0, 0, 0, 1)',
                    }}>
                    {item.text}
                  </Text>
                </View>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: '600',
                    color: 'rgba(0, 0, 0, 1)',
                  }}>
                  {item.grams}
                </Text>
              </View>
              <Divider
                style={{marginTop: 0}}
                orientation="horizontal"
                width={1}
                height={1}
              />
            </>
          );
        }}
      />
    </View>
  );

  const SecondRoute = () => (
    <View style={{}}>
      <Text>hello</Text>
    </View>
  );

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });
  const [index, setIndex] = useState(0);
  const [routes] = React.useState([
    {
      key: 'first',
      title: 'Ingredients',
    },
    {
      key: 'second',
      title: 'Directions',
    },
  ]);

  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{backgroundColor: 'rgba(255, 138, 31, 1)'}}
      style={{backgroundColor: 'white', height: height * 0.055}}
      pressColor="white"
      renderLabel={({route, focused, color}) => (
        <Text
          style={{
            color: focused ? 'rgba(255, 138, 31, 1)' : 'rgba(0, 0, 0, 1)',
            // margin: 5,
            fontSize: 20,
            fontWeight: '700',
          }}>
          {route.title}
        </Text>
      )}
    />
  );

  return (
    <View style={{flex: 0.2}}>
      <TabView
        style={{backgroundColor: 'white'}}
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

export default ItemList;

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
