import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CategoryCard from './CategoryCard';
import Icon from 'react-native-vector-icons/Ionicons';
import { COLOR, FONT } from '../styles';

export default function CategoryTracking({ categories }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tracking by categories</Text>
      <View style={styles.row}>
        {categories.map((cat, idx) => (
          <CategoryCard
            // key={cat.title}
            title={cat.title}
            value={cat.value}
            backgroundColor={cat.backgroundColor}
            textColor={cat.textColor}
            icon={cat.icon}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 18,
    paddingHorizontal: 20,
  },
  title: {
    color: COLOR.primaryColor,
    alignSelf: 'center',
    ...FONT.mitrRegular(16),
    marginBottom: 18,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
});
