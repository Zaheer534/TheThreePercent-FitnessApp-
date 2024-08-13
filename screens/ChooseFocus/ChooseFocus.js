import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {AppImages} from '../../constants/images';
import {mode} from '../../constants/keywords';
import {useNavigation} from '@react-navigation/native';

const ChooseFocus = () => {
  const navigation = useNavigation();
  const [changeColor, setChangeColor] = useState('white');
  const [selected, setSelected] = useState(true);
  const renderFitnessMode = ({item, index}) => {
    return (
      <TouchableOpacity
        style={[
          styles.listContainer,
          {
            backgroundColor:
              selected === index ? 'rgba(31, 147, 255, 1)' : 'white',
          },
        ]}
        activeOpacity={0.7}
        onPress={() => {
          if (selected === index) {
            setSelected();
          } else {
            setSelected(index);
          }
          //   navigation.navigate('Main');
        }}>
        <Image
          source={item.img}
          style={{
            tintColor: selected === index ? 'white' : 'rgba(31, 147, 255, 1)',
          }}
        />

        <Text
          style={[
            styles.text,
            {color: selected === index ? 'white' : 'black'},
          ]}>
          {item.text}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={{}}>
      <View style={styles.userContainer}>
        <View>
          <Text style={styles.text}>Welcome</Text>
          <Text
            style={[
              styles.text,
              {fontSize: 20, fontWeight: '700', lineHeight: 24},
            ]}>
            Mr. Steve,
          </Text>
        </View>
        <View>
          <Image style={{borderRadius: 100}} source={AppImages.steve.img} />
        </View>
      </View>
      <View style={{margin: 20}}>
        <Text
          style={[
            styles.text,
            {fontSize: 40, fontWeight: '700', lineHeight: 40},
          ]}>
          Choose your focus
        </Text>
      </View>
      <View
        style={{
          //   alignItems: 'center',
          margin: 25,
          marginVertical: 5,
          bottom: 12,
          flexDirection: 'row',
        }}>
        <FlatList
          data={mode}
          renderItem={renderFitnessMode}
          numColumns={2}
          columnWrapperStyle={{
            justifyContent: 'space-between',
          }}
          contentContainerStyle={{gap: 15}}
        />
      </View>

      <TouchableOpacity
        style={styles.homeBtn}
        onPress={() => {
          navigation.navigate('HomeScreen');
        }}>
        <Text style={styles.btnText}>Go to home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ChooseFocus;

const styles = StyleSheet.create({
  userContainer: {
    flexDirection: 'row',
    margin: 35,
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 15,
    fontWeight: '600',
    lineHeight: 18,
    color: 'rgba(0, 0, 0, 1)',
  },
  listContainer: {
    width: '45%',
    height: 140,
    alignItems: 'flex-start',

    borderRadius: 10,
    gap: 20,
    padding: 13,
    elevation: 30,
  },
  homeBtn: {
    backgroundColor: 'rgba(255, 138, 31, 1)',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    top: 20,
    width: '70%',
  },
  btnText: {
    fontSize: 20,
    fontWeight: '700',
    color: 'white',
    padding: 10,
  },
});
