import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FONT } from '../styles';

export default function CategoryCard({ title, value, icon, backgroundColor, textColor }) {
  return (
    <View style={[styles.card, { backgroundColor: backgroundColor || '#232323' }]}> 
      <View style={styles.row}>
        <View>
          <Text style={[styles.title, { color: textColor || '#fff' }]}>{title}</Text>
        </View>
         {icon && <View style={styles.icon}>{icon}</View>}
      </View>
        <Text style={[styles.value, { color: textColor || '#fff' }]}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 18,
    padding: 20,
    flex: 1,
    marginRight: 0,
    marginBottom: 0,
    minWidth: 160,
    maxWidth: 200,
    marginHorizontal: 6,
    marginVertical: 6,
    elevation: 1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    ...FONT.mitrLight(13),
    marginBottom: 8,
  },
  value: {
    ...FONT.mitrRegular(24),
  },
  icon: {
    margin: 10,
    alignSelf: 'center',
  },
});
