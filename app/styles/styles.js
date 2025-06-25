import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  img: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain',
  },

  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },

  center: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  background: {
    flex: 1,
  },
});
