import React, {useState} from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import DashboardContent from './DashboardScreen';
import ServicesContent from './ServicesScreen';
import RewardsContent from './RewardsScreen';
import {BottomNavigation} from '../component';

export default function MainScreen() {
  const [activeTab, setActiveTab] = useState('home');

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <DashboardContent />;
      case 'services':
        return <ServicesContent />;
      case 'rewards':
        return <RewardsContent />;
      default:
        return <DashboardContent />;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#f5f5f5" />

      {renderContent()}

      <BottomNavigation
        activeTab={activeTab}
        onPressHome={() => setActiveTab('home')}
        onPressServices={() => setActiveTab('services')}
        onPressRewards={() => setActiveTab('rewards')}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});
