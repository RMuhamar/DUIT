import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainScreen from './screens/MainScreen';
import AppSplashScreen from './screens/SplashScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  const [showSplash, setShowSplash] = useState(true); // State untuk mengontrol tampilan splash screen

  useEffect(() => {
    // Atur durasi tampilan splash screen di sini (misal: 3 detik)
    const timer = setTimeout(() => {
      setShowSplash(false); // Sembunyikan splash screen setelah durasi
    }, 6000); // Durasi dalam milidetik (3000ms = 3 detik)

    // Membersihkan timer saat komponen di-unmount atau sebelum efek dijalankan kembali
    return () => clearTimeout(timer);
  }, []); // [] agar efek hanya berjalan sekali saat komponen di-mount

  if (showSplash) {
    // Jika showSplash true, tampilkan komponen splash screen
    return <AppSplashScreen />;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Main"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Main" component={MainScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
