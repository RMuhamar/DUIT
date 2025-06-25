import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function AccountCard({ title, accountNumber }) {
  return (
    <View style={styles.container}>
      <View style={styles.leftContent}>
        <View style={styles.iconContainer}>
          <Text style={styles.iconEmoji}>🪙</Text>
        </View>
        
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.accountNumber}>{accountNumber}</Text>
        </View>
      </View>
      
      <View style={styles.rightContent}>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.starButton}>
          <Text style={styles.starText}>⭐</Text>
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
    marginHorizontal: 20,
    marginTop: 20,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  leftContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#FFF9E6',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
  },
  iconEmoji: {
    fontSize: 24,
  },
  textContainer: {
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  accountNumber: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  rightContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#eee',
  },
  starButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#6AC16A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 20,
    color: '#333',
  },
  starText: {
    fontSize: 16,
  },
});