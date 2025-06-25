import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export default function RewardCard({
  title,
  description,
  amount,
  timeLeft,
  image,
  backgroundColor = '#6AC16A',
}) {
  return (
    <View style={[styles.container, {backgroundColor}]}>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>

        <View style={styles.footer}>
          <View style={styles.amountContainer}>
            <Text style={styles.amount}>{amount}</Text>
          </View>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>{timeLeft}</Text>
          </View>
        </View>
      </View>

      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: '#fff',
    opacity: 0.9,
    marginBottom: 20,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  amountContainer: {
    backgroundColor: '#FFD700',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 10,
  },
  amount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  timeContainer: {
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
  },
  timeText: {
    fontSize: 14,
    color: '#333',
  },
  imageContainer: {
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
});
