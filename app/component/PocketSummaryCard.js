import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function PocketSummaryCard({
  total,
  filters,
  activeFilter,
  onFilterChange,
  chartData,
  onDownload,
}) {
  const [focusedBar, setFocusedBar] = useState(
    chartData.findIndex(item => item.active),
  );

  return (
    <View style={styles.card}>
      <View style={styles.filterRow}>
        {filters.map((f, i) => (
          <TouchableOpacity
            key={f}
            style={[
              styles.filterBtn,
              activeFilter === i && styles.filterBtnActive,
            ]}
            onPress={() => onFilterChange(i)}>
            <Text
              style={[
                styles.filterText,
                activeFilter === i && styles.filterTextActive,
              ]}>
              {f}
            </Text>
          </TouchableOpacity>
        ))}
        <View style={styles.dropdown}>
          <Text style={styles.dropdownText}>Yearly ▼</Text>
        </View>
      </View>
      <Text style={styles.totalLabel}>Total</Text>
      <Text style={styles.totalValue}>{total}</Text>
      <View style={styles.chartRow}>
        {chartData.map((item, idx) => {
          const isActive = idx === focusedBar;
          return (
            <TouchableOpacity
              key={item.label}
              style={styles.chartItem}
              activeOpacity={0.8}
              onPress={() => setFocusedBar(idx)}>
              {/* Chip persentase di luar bar/wave (di atas) */}
              <View
                style={[
                  styles.percentChip,
                  item.percent > 0 ? styles.positiveChip : styles.negativeChip,
                  {top: -28},
                ]}>
                <Text style={styles.percentText}>
                  {item.percent > 0 ? `+${item.percent}%` : `${item.percent}%`}
                </Text>
              </View>
              {/* Wave background untuk bar tidak aktif */}
              {!isActive && (
                <View style={[styles.waveContainer, {height: item.barHeight}]}>
                  {Array.from({
                    length: Math.max(3, Math.floor(item.barHeight / 2)),
                  }).map((_, i) => (
                    <View key={i} style={styles.waveLine} />
                  ))}
                </View>
              )}
              {/* Bar solid hitam untuk bar aktif */}
              {isActive && (
                <>
                  <View
                    style={[
                      styles.bar,
                      styles.barActive,
                      {height: item.barHeight},
                    ]}
                  />
                  {/* Bubble value di atas bar */}
                  <View style={styles.bubble}>
                    <Text style={styles.bubbleText}>{item.bubble}</Text>
                  </View>
                </>
              )}
              <Text style={styles.month}>{item.label}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <TouchableOpacity style={styles.downloadBtn} onPress={onDownload}>
        <Text style={styles.downloadText}>Download report</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#eaf9e2',
    borderRadius: 28,
    marginHorizontal: 0,
    marginTop: 18,
    paddingHorizontal: 20,
    paddingTop: 18,
    paddingBottom: 28,
    marginBottom: 10,
    // shadow for iOS
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.08,
    shadowRadius: 8,
    // elevation for Android
    elevation: 2,
    minHeight: 340,
    width: '92%',
    alignSelf: 'center',
    maxWidth: 420,
  },
  filterRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  filterBtn: {
    backgroundColor: '#d3e7d1',
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 6,
    marginRight: 8,
  },
  filterBtnActive: {
    backgroundColor: '#232323',
  },
  filterText: {
    color: '#232323',
    fontWeight: 'bold',
    fontSize: 14,
  },
  filterTextActive: {
    color: '#fff',
  },
  dropdown: {
    marginLeft: 'auto',
    backgroundColor: '#d3e7d1',
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 6,
  },
  dropdownText: {
    color: '#232323',
    fontWeight: 'bold',
    fontSize: 14,
  },
  totalLabel: {
    color: '#bdbdbd',
    marginTop: 6,
    fontSize: 13,
  },
  totalValue: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#232323',
    marginBottom: 8,
    marginTop: 2,
  },
  chartRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    marginVertical: 10,
    height: 120,
    marginBottom: 18,
    backgroundColor: 'transparent',
    paddingHorizontal: 8,
  },
  chartItem: {
    alignItems: 'center',
    width: 48,
    position: 'relative',
    justifyContent: 'flex-end',
  },
  waveContainer: {
    width: 40,
    borderRadius: 15,
    backgroundColor: '#eaf9e2',
    borderWidth: 1.5,
    borderColor: '#d3e7d1',
    position: 'relative',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 4,
    overflow: 'hidden',
  },
  waveLine: {
    width: '150%',
    height: 2,
    backgroundColor: '#ccc',
    borderRadius: 2,
    marginVertical: 2,
    transform: [{rotate: '150deg'}],
    bottom:-12
  },
  bar: {
    width: 40,
    borderRadius: 15,
    marginBottom: 4,
    position: 'relative',
    alignSelf: 'center',
  },
  barActive: {
    backgroundColor: '#232323',
    borderColor: '#232323',
  },
  percentChip: {
    position: 'absolute',
    width: 36,
    height: 28,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  positiveChip: {
    backgroundColor: '#4caf50',
  },
  negativeChip: {
    backgroundColor: '#e53935',
  },
  percentText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
  },
  month: {
    fontSize: 14,
    color: '#232323',
    marginTop: 2,
    fontWeight: '500',
  },
  bubble: {
    position: 'absolute',
    top: -36,
    left: '50%',
    transform: [{translateX: -32}],
    backgroundColor: '#b7e7b0',
    borderRadius: 16,
    paddingHorizontal: 14,
    paddingVertical: 4,
    zIndex: 2,
    minWidth: 60,
    alignItems: 'center',
  },
  bubbleText: {
    color: '#232323',
    fontWeight: 'bold',
    fontSize: 15,
  },
  downloadBtn: {
    backgroundColor: '#b7e7b0',
    borderRadius: 16,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 10,
  },
  downloadText: {
    color: '#232323',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
