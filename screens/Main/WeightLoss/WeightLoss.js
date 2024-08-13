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
import {AppImages} from '../../../constants/images';
import {weightStyles} from './Styles';
import {weightLoss} from '../../../constants/keywords';
import {Divider} from '@rneui/themed';
import {TabView} from 'react-native-tab-view';
import ItemList from './ItemList';
const {width, height} = Dimensions.get('window');

const WeightLoss = () => {
  const navigation = useNavigation();
  const layout = useWindowDimensions();
  // const [index, setIndex] = useState(1);
  const [selected, setSelected] = useState('today');

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={[weightStyles.header, {gap: 27}]}>
        <Image style={{marginTop: 8}} source={AppImages.leftArrow.img} />
        <Text style={[weightStyles.text, {textAlign: 'center'}]}>
          {weightLoss.meals}
        </Text>
        <Image
          style={{marginTop: 8, borderRadius: 100}}
          source={AppImages.steve.img}
        />
      </View>
      <View style={weightStyles.container}>
        <View style={weightStyles.imgBox}>
          <Image
            style={[weightStyles.img, {aspectRatio: '9/5.3', borderRadius: 10}]}
            resizeMode="stretch"
            source={AppImages.meal}
          />
        </View>
        <View style={weightStyles.mealBox}>
          <Text style={[weightStyles.text, {fontSize: 20}]}>
            {weightLoss.mealDescription}
          </Text>
          <Image
            style={[
              weightStyles.img,
              {
                width: width * 0.08,
                height: height * 0.028,
                marginBottom: 15,
                // left: 15,
              },
            ]}
            resizeMode="center"
            source={AppImages.heart}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignSelf: 'flex-start',
            marginHorizontal: 8,
            gap: 15,
            justifyContent: 'space-evenly',
            // backgroundColor: 'yellow',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginLeft: 15,
              gap: 5,
            }}>
            <Image
              style={[
                weightStyles.img,
                {
                  width: width * 0.05,
                  height: height * 0.03,
                  //   backgroundColor: 'green',
                  //   margin: 15,
                  //   right: 5,
                },
              ]}
              resizeMode="center"
              source={AppImages.calories}
            />
            <Text style={weightStyles.smallText}>{weightLoss.calories}</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              //   justifyContent: 'space-evenly',
              //   backgroundColor: 'yellow',
            }}>
            <Image
              style={[
                weightStyles.img,
                {
                  width: width * 0.05,
                  height: height * 0.03,
                  //   backgroundColor: 'green',
                  //   margin: 15,
                  right: 5,
                },
              ]}
              resizeMode="center"
              source={AppImages.time}
            />
            <Text style={weightStyles.smallText}>{weightLoss.mins}</Text>
          </View>
        </View>
        <View style={weightStyles.dietBox}>
          <View style={{}}>
            <Text style={[weightStyles.smallText]}>{weightLoss.protein}</Text>
            <Text style={[weightStyles.text, {fontSize: 15}]}>
              {weightLoss.gram}{' '}
              <Text style={weightStyles.smallText}>{weightLoss.g}</Text>
            </Text>
          </View>
          <Divider
            style={{marginTop: 12}}
            orientation="vertical"
            width={0.5}
            height={34}
          />
          <View style={{}}>
            <Text style={[weightStyles.smallText]}>{weightLoss.fat}</Text>
            <Text style={[weightStyles.text, {fontSize: 15}]}>
              {weightLoss.gramFat}{' '}
              <Text style={weightStyles.smallText}>{weightLoss.g}</Text>
            </Text>
          </View>
          <Divider
            style={{marginTop: 12}}
            orientation="vertical"
            width={0.5}
            height={34}
          />
          <View style={{}}>
            <Text style={[weightStyles.smallText]}>{weightLoss.carbs}</Text>
            <Text style={[weightStyles.text, {fontSize: 15}]}>
              {weightLoss.carbsGram}{' '}
              <Text style={weightStyles.smallText}>{weightLoss.g}</Text>
            </Text>
          </View>
        </View>
      </View>

      <View
        style={{
          //   justifyContent: 'center',
          marginLeft: 10,
          marginTop: 5,
          width: width * 0.93,
          height: height * 1.55,
        }}>
        <ItemList />
      </View>
    </View>
  );
};

export default WeightLoss;

const styles = StyleSheet.create({});
