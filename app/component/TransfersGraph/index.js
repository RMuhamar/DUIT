import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

export default function TransfersGraph() {
  return (
    <View style={styles.container}>
      <View style={styles.yAxisLabels}>
        <Text style={styles.yAxisLabel}>5k</Text>
        <Text style={styles.yAxisLabel}>4k</Text>
        <Text style={styles.yAxisLabel}>3k</Text>
        <Text style={styles.yAxisLabel}>2k</Text>
        <Text style={styles.yAxisLabel}>0k</Text>
      </View>
      
      <View style={styles.graphContainer}>
        {/* Simple graph representation */}
        <View style={styles.graphArea}>
          <View style={styles.graphLine} />
          
          {/* Data points */}
          <View style={[styles.dataPoint, { left: '30%', top: '40%' }]}>
            <View style={styles.dataPointCircle}>
              <Text style={styles.dataPointText}>💰</Text>
            </View>
            <View style={styles.dataValue}>
              <Text style={styles.dataValueText}>$1,000</Text>
            </View>
          </View>
          
          <View style={[styles.dataPoint, { left: '70%', top: '60%' }]}>
            <View style={styles.dataPointCircle}>
              <Text style={styles.dataPointText}>💵</Text>
            </View>
            <View style={styles.dataValue}>
              <Text style={styles.dataValueText}>$1,500</Text>
            </View>
          </View>
        </View>
        
        {/* X-axis labels */}
        <View style={styles.xAxisLabels}>
          <Text style={styles.xAxisLabel}>10 Apr</Text>
          <Text style={styles.xAxisLabel}>10 May</Text>
          <Text style={styles.xAxisLabel}>10 June</Text>
        </View>
        
        {/* User avatars */}
        <View style={styles.avatarsContainer}>
          <View style={styles.avatarBadge}>
            <Text style={styles.avatarBadgeText}>+23</Text>
          </View>
          {[1, 2, 3].map((_, index) => (
            <View 
              key={index} 
              style={[
                styles.avatar, 
                { right: index * 15, backgroundColor: index === 0 ? '#f1c40f' : '#e67e22' }
              ]}
            />
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 10,
    height: 200,
  },
  yAxisLabels: {
    justifyContent: 'space-between',
    height: 200,
    paddingRight: 10,
    width: 30,
  },
  yAxisLabel: {
    fontSize: 12,
    color: '#999',
    textAlign: 'right',
  },
  graphContainer: {
    flex: 1,
    position: 'relative',
  },
  graphArea: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    position: 'relative',
  },
  graphLine: {
    position: 'absolute',
    top: '50%',
    left: '20%',
    right: '20%',
    height: 2,
    backgroundColor: '#6AC16A',
    borderRadius: 1,
  },
  dataPoint: {
    position: 'absolute',
    alignItems: 'center',
  },
  dataPointCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#6AC16A',
  },
  dataPointText: {
    fontSize: 12,
  },
  dataValue: {
    backgroundColor: '#6AC16A',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
    marginTop: 5,
  },
  dataValueText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  xAxisLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 10,
  },
  xAxisLabel: {
    fontSize: 12,
    color: '#666',
  },
  avatarsContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#fff',
    position: 'absolute',
  },
  avatarBadge: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 45,
  },
  avatarBadgeText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
  },
});