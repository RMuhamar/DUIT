import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

export default function CategoryIcons() {
  const icons = [
    { emoji: '🕐', color: '#e67e22' },
    { emoji: '⭐', color: '#b94dc7' },
    { emoji: '🛒', color: '#b94dc7' },
    { emoji: '💼', color: '#333' },
    { emoji: '💰', color: '#f1c40f' },
    { emoji: '➕', color: '#6AC16A' },
  ];

  return (
    <View style={styles.container}>
      {icons.map((icon, index) => (
        <TouchableOpacity 
          key={index}
          style={[styles.iconButton, { backgroundColor: icon.color }]}
        >
          <Text style={styles.iconEmoji}>{icon.emoji}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  iconButton: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
    marginBottom: 15,
  },
  iconEmoji: {
    fontSize: 20,
  },
});