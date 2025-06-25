import React from 'react';
import {View, Image, StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const AppSplashScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/gif/SplashDuit.gif')} // Sesuaikan path ke GIF Anda
        style={styles.gif}
        resizeMode="cover" // Atau 'cover', 'stretch', dll., sesuai kebutuhan
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gif: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: width,
    height: height,
  },
});

export default AppSplashScreen;
