import {Dimensions, StyleSheet} from 'react-native';
const {width, height} = Dimensions.get('window');
export const weightStyles = StyleSheet.create({
  header: {
    width: width * 0.95,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    // alignItems: 'flex-start',
    margin: 10,
    // marginLeft: 15,
    // backgroundColor: 'green',
  },
  text: {
    fontSize: 30,
    fontWeight: '700',
    color: 'rgba(0, 0, 0, 1)',
    // bottom: 8,
  },

  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgBox: {
    // backgroundColor: 'orange',
  },
  img: {
    width: width * 0.8,
    height: height * 0.26,
  },
  mealBox: {
    margin: 10,
    width: width * 0.88,
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: 'orange',
    justifyContent: 'space-between',
  },
  smallText: {
    fontSize: 12,
    fontWeight: '600',
    color: 'rgba(0, 0, 0, 0.5)',
  },
  dietBox: {
    width: width * 0.9,
    height: height * 0.08,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'white',
    marginTop: 10,
    elevation: 5,
    borderRadius: 10,
    // gap: 10,
    justifyContent: 'space-evenly',
  },
});
