import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import * as Progress from 'react-native-progress';
import LavelComponent from './LavelComponent';
import DashboardComponent from './DashboardComponent';
import ChooseFocus from '../ChooseFocus/ChooseFocus';

const Onboarding = ({navigation}) => {
  const [index, setIndex] = useState(1);
  return (
    <View style={{flex: 1}}>
      <View>
        {index == 1 ? (
          <LavelComponent />
        ) : index == 2 ? (
          <DashboardComponent />
        ) : (
          <ChooseFocus />
        )}
      </View>
      {index <= 2 ? (
        <View style={styles.container}>
          <TouchableOpacity
            style={[styles.button, {marginLeft: 25}]}
            onPress={() => {
              index < 3 && setIndex(index + 2);
            }}>
            <Text style={styles.btnText}>SKIP</Text>
          </TouchableOpacity>
          <View style={{flexDirection: 'row', gap: 5}}>
            <Progress.Bar
              progress={index === 1 ? 1 : 0}
              width={8}
              style={styles.progress}
              color="rgba(31, 147, 255, 1)"
              height={6}
            />
            <Progress.Bar
              progress={index === 2 ? 1 : 0}
              width={8}
              style={styles.progress}
              color="rgba(31, 147, 255, 1)"
              height={6}
            />
            <Progress.Bar
              progress={index === 3 ? 1 : 0}
              width={8}
              style={styles.progress}
              color="rgba(31, 147, 255, 1)"
              height={6}
            />
          </View>
          <TouchableOpacity
            style={[styles.button, {marginRight: 25}]}
            onPress={() => {
              index < 3 && setIndex(index + 1);
            }}>
            <Text style={styles.btnText}>NEXT</Text>
          </TouchableOpacity>
        </View>
      ) : null}
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 30,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: 'green',
  },
  button: {
    width: '15%',
    alignItems: 'center',
    backgroundColor: 'white',
    elevation: 3,
    borderRadius: 20,
  },
  btnText: {
    fontSize: 12,
    fontWeight: '600',
    color: 'rgba(0, 0, 0, 1)',
    padding: 5,
  },
  progress: {
    alignSelf: 'center',
  },
});
