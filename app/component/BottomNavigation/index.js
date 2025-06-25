import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {COLOR} from '../../styles';
import {BlurView} from '@react-native-community/blur';
import LinearGradient from 'react-native-linear-gradient';

export default function BottomNavigation({
  activeTab,
  onPressHome,
  onPressServices,
  onPressRewards,
}) {
  return (
    <View style={styles.wrapper}>
      <LinearGradient
        colors={[
          'rgba(255,255,255,0.85)',
          'rgba(173,216,230,0.18)',
          'rgba(255,255,255,0.10)',
          'rgba(255,255,255,0.01)',
        ]}
        start={{x: 0.2, y: 0}}
        end={{x: 0.8, y: 1}}
        style={styles.glassBorder}>
        <BlurView
          style={styles.blurGlass}
          blurType="light"
          blurAmount={15}
          // reducedTransparencyFallbackColor="#fff"
        />
        <View style={styles.container}>
          <TouchableOpacity
            style={[styles.tabButton, activeTab === 'home' && styles.activeTab]}
            onPress={onPressHome}>
            <Feather name="home" style={styles.tabIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabButton}>
            <Feather name="pie-chart" style={styles.tabIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabButton}>
            <Ionicons name="calendar-outline" style={styles.tabIcon} />
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.tabButton,
              activeTab === 'services' && styles.activeTab,
            ]}
            onPress={onPressServices}>
            <MaterialIcons name="density-medium" style={styles.tabIcon} />
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.tabButton,
              activeTab === 'rewards' && styles.activeTab,
            ]}
            onPress={onPressRewards}>
            <MaterialIcons name="widgets" style={styles.tabIcon} />
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    paddingBottom: 10,
  },
  glassBorder: {
    borderRadius: 32,
    marginHorizontal: 16,
    marginBottom: 16,
    borderWidth: 1.5,
    borderColor: 'rgba(255,255,255,0.18)',
    overflow: 'hidden',
  },
  blurGlass: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 32,
    borderBottomWidth: 1.5,
    borderColor: 'rgba(255,255,255,0.35)',
    overflow: 'hidden',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.12)',
    paddingVertical: 15,
    borderRadius: 32,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 8},
    shadowOpacity: 0.08,
    shadowRadius: 16,
    elevation: 12,
    overflow: 'hidden',
  },
  tabButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  activeTab: {
    backgroundColor: COLOR.primaryColor,
  },
  tabIcon: {
    fontSize: 24,
    color: COLOR.thirdColor,
  },
  activeIcon: {
    // You can add specific styling for active icons if needed
  },
});
