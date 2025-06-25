import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {BalanceCircle, ProfileHeader} from '../../component';
import IMAGE from '../../assets';
import { FONT } from '../../styles';

export default function DashboardContent() {
  // State untuk nilai yang bisa berubah
  const [values, setValues] = useState({
    shopping: 600,
    star: 150,
    savings: 250,
  });

  //Simulasi perubahan nilai setiap 3 detik (untuk testing)
  useEffect(() => {
    const interval = setInterval(() => {
      setValues(prev => ({
        shopping: Math.floor(Math.random() * 500) + 200, // 200-700
        star: Math.floor(Math.random() * 200) + 50, // 50-250
        savings: Math.floor(Math.random() * 300) + 100, // 100-400
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const total = values.shopping + values.star + values.savings;

  return (
    <View style={styles.container}>
      <ProfileHeader profileImage={IMAGE.images.maleProfile} name="James" />

      <View style={styles.balanceContainer}>
        <BalanceCircle
          shoppingValue={values.shopping}
          starValue={values.star}
          savingsValue={values.savings}
        />

        <Text style={styles.totalBalanceLabel}>Total Balance</Text>
        <Text style={styles.totalBalanceAmount}>
          {total.toLocaleString()}.00
        </Text>

        <View style={styles.divider} />

        <Text style={styles.moneyHoldLabel}>Money hold</Text>
        <Text style={styles.moneyHoldAmount}>$3,000</Text>
      </View>

      {/* Test buttons untuk mengubah nilai manual */}
      <View style={styles.testButtonsContainer}>
        <TouchableOpacity
          style={styles.testButton}
          onPress={() => setValues({shopping: 800, star: 100, savings: 100})}>
          <Text style={styles.testButtonText}>Test 1</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.testButton}
          onPress={() => setValues({shopping: 200, star: 400, savings: 400})}>
          <Text style={styles.testButtonText}>Test 2</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.testButton}
          onPress={() => setValues({shopping: 300, star: 300, savings: 400})}>
          <Text style={styles.testButtonText}>Test 3</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.actionsContainer}>
        <TouchableOpacity style={styles.actionButton}>
          <View style={styles.actionIconContainer}>
            <Text style={styles.actionIconText}>↓</Text>
          </View>
          <Text style={styles.actionText}>Receive</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
          <View style={styles.actionIconContainer}>
            <Text style={styles.actionIconText}>📷</Text>
          </View>
          <Text style={styles.actionText}>Payments</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
          <View style={styles.actionIconContainer}>
            <Text style={styles.actionIconText}>💳</Text>
          </View>
          <Text style={styles.actionText}>Bills</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
          <View style={styles.actionIconContainer}>
            <Text style={styles.actionIconText}>💰</Text>
          </View>
          <Text style={styles.actionText}>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 80, // Space for bottom navigation
  },
  balanceContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    paddingHorizontal: 20,
  },
  totalBalanceLabel: {
    color: '#333',
    marginTop: 20,
    ...FONT.mitrLight(16),
  },
  totalBalanceAmount: {
    color: '#000',
    ...FONT.mitrRegular(35),
  },
  divider: {
    width: 100,
    height: 1,
    backgroundColor: '#ddd',
    marginVertical: 10,
  },
  moneyHoldLabel: {
    color: '#666',
    fontSize: 14,
  },
  moneyHoldAmount: {
    color: '#000',
    ...FONT.mitrRegular(20),
  },
  testButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
    paddingHorizontal: 20,
  },
  testButton: {
    backgroundColor: '#6AC16A',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 15,
    marginHorizontal: 5,
  },
  testButtonText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    paddingHorizontal: 20,
  },
  actionButton: {
    alignItems: 'center',
  },
  actionIconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  actionIconText: {
    fontSize: 24,
    color: '#fff',
  },
  actionText: {
    fontSize: 12,
    color: '#333',
  },
});
