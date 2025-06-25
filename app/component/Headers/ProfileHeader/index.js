import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {COLOR, FONT} from '../../../styles';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function ProfileHeader({name, profileImage}) {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image source={profileImage} style={styles.profileImage} />
        <Text style={styles.greeting}>Hi, {name}</Text>
      </View>

      <View style={styles.iconsContainer}>
        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="person-add-outline" style={styles.iconText} />
          {/* <Text style={styles.iconText}>👥</Text> */}
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="notifications-outline" style={styles.iconText} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
    backgroundColor: COLOR.primaryColor,
  },
  greeting: {
    color: COLOR.primaryColor,
    ...FONT.mitrRegular(18),
  },
  iconsContainer: {
    flexDirection: 'row',
  },
  iconButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  iconText: {
    fontSize: 18,
    color:COLOR.primaryColor
  },
});
