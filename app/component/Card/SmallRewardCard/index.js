import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export default function SmallRewardCard({
  amount,
  title,
  subtitle,
  image,
  backgroundColor = '#FFF9E6',
}) {
  return (
    <View style={[styles.container, {backgroundColor}]}>
      <View style={styles.header}>
        <Image source={image} style={styles.image} />
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>{amount}</Text>
        </View>
      </View>

      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '48%',
    borderRadius: 15,
    padding: 15,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  image: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  amountContainer: {
    backgroundColor: '#FFD700',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
  },
  amount: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 12,
    color: '#e67e22',
  },
});
