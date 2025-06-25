import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

export default function ServiceHeader({ onBack }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconButton} onPress={onBack}>
        <Text style={styles.iconText}>←</Text>
      </TouchableOpacity>
      
      <View style={styles.rightIcons}>
        <TouchableOpacity style={styles.iconButton}>
          <Text style={styles.iconText}>💾</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.iconButton}>
          <Text style={styles.iconText}>🔄</Text>
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
  rightIcons: {
    flexDirection: 'row',
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    borderWidth: 1,
    borderColor: '#eee',
  },
  iconText: {
    fontSize: 18,
  },
});