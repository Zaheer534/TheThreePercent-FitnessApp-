import {Dimensions, StyleSheet} from 'react-native';
const {width, height} = Dimensions.get('window');
export const profileStyles = StyleSheet.create({
  header: {
    width: width * 0.57,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    margin: 17,
    // marginLeft: 15,
    // backgroundColor: 'green',
  },
  text: {
    fontSize: 30,
    fontWeight: '700',
    color: 'rgba(0, 0, 0, 1)',
    // bottom: 8,
  },

  imgContainer: {
    alignItems: 'center',
    marginVertical: 10,
  },

  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoContainer: {
    flexDirection: 'row',
    width: width * 0.87,
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 10,
    justifyContent: 'space-between',
    // backgroundColor: 'orange',
  },
  infoBox: {
    width: width * 0.12,
    height: width * 0.12,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(84, 204, 110, 0.2)',
  },
  img: {
    width: width * 0.3,
    height: width * 0.3,
    borderRadius: 30,
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
