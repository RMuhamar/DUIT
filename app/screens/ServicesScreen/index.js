import React, {useState, useRef, useEffect} from 'react';
import {View, StyleSheet, Animated} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  PocketHeader,
  PocketSummaryCard,
  CategoryTracking,
} from '../../component';

export default function ServicesContent() {
  // Dummy data for chart and categories
  const chartDataIncome = [
    {label: 'Jul', percent: 4, barHeight: 40, active: false, bubble: '$5,220'},
    {label: 'Aug', percent: -2, barHeight: 30, active: false, bubble: '$4,20'},
    {label: 'Sep', percent: 2, barHeight: 50, active: false, bubble: '$7,34'},
    {label: 'Oct', percent: 2, barHeight: 90, active: true, bubble: '$23,6'},
    {label: 'Nov', percent: 2, barHeight: 60, active: false, bubble: '$4,230'},
    {label: 'Dec', percent: -3, barHeight: 35, active: false, bubble: '$65,20'},
  ];
  const chartDataOutcome = [
    {label: 'Jul', percent: -3, barHeight: 35, active: false},
    {label: 'Aug', percent: -1, barHeight: 45, active: false},
    {label: 'Sep', percent: 0, barHeight: 30, active: false},
    {label: 'Oct', percent: -2, barHeight: 60, active: true, bubble: '$2,100'},
    {label: 'Nov', percent: -1, barHeight: 40, active: false},
    {label: 'Dec', percent: -4, barHeight: 25, active: false},
  ];
  const categoriesIncome = [
    {
      title: 'Monthly Salary',
      value: '+$3.190',
      backgroundColor: '#232323',
      textColor: '#fff',
      icon: React.createElement(Icon, {
        name: 'briefcase-outline',
        size: 22,
        color: '#fff',
      }),
    },
    {
      title: 'Stack Dividend',
      value: '+$400',
      backgroundColor: '#eaf9e2',
      textColor: '#232323',
      icon: React.createElement(Icon, {
        name: 'time-outline',
        size: 22,
        color: '#232323',
      }),
    },
  ];
  const categoriesOutcome = [
    {
      title: 'Groceries',
      value: '-$1.200',
      backgroundColor: '#232323',
      textColor: '#fff',
      icon: React.createElement(Icon, {
        name: 'cart-outline',
        size: 22,
        color: '#fff',
      }),
    },
    {
      title: 'Utilities',
      value: '-$350',
      backgroundColor: '#eaf9e2',
      textColor: '#232323',
      icon: React.createElement(Icon, {
        name: 'flash-outline',
        size: 22,
        color: '#232323',
      }),
    },
  ];
  const [activeFilter, setActiveFilter] = useState(0); // 0: Income, 1: Outcome
  const [showHeader, setShowHeader] = useState(true);
  const scrollTimeout = useRef(null);

  // Animated value for header
  const headerAnim = useRef(new Animated.Value(1)).current; // 1 = visible, 0 = hidden
  const HEADER_HEIGHT = 60; // Sesuaikan jika header Anda lebih tinggi

  useEffect(() => {
    Animated.timing(headerAnim, {
      toValue: showHeader ? 1 : 0,
      duration: 250,
      useNativeDriver: true,
    }).start();
  }, [showHeader, headerAnim]);

  const isIncome = activeFilter === 0;
  const chartData = isIncome ? chartDataIncome : chartDataOutcome;
  const categories = isIncome ? categoriesIncome : categoriesOutcome;
  const total = isIncome ? '+$65.580' : '-$32.400';

  const handleScroll = () => {
    if (showHeader) {
      setShowHeader(false);
    }
    if (scrollTimeout.current) {
      clearTimeout(scrollTimeout.current);
    }
    scrollTimeout.current = setTimeout(() => {
      setShowHeader(true);
    }, 250); // 250ms setelah scroll berhenti, header muncul lagi
  };

  return (
    <View style={styles.container}>
      <PocketHeader
        title="Your Pocket"
        onBack={() => {}}
        showHeader={showHeader}
      />
      <Animated.ScrollView
        style={styles.scrollView}
        contentContainerStyle={{paddingTop: HEADER_HEIGHT}}
        showsVerticalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}>
        <PocketSummaryCard
          total={total}
          filters={['Income', 'Outcome']}
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
          chartData={chartData}
          onDownload={() => {}}
        />
        <CategoryTracking categories={categories} />
        <CategoryTracking categories={categories} />
        <CategoryTracking categories={categories} />
        <CategoryTracking categories={categories} />

        <View style={styles.bottomPadding} />
      </Animated.ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  scrollView: {
    flex: 1,
    // marginTop diatur di komponen
  },
  bottomPadding: {
    height: 100,
  },
});
