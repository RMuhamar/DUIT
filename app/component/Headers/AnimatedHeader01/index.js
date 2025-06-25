import React, {useEffect, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Animated,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {BlurView} from '@react-native-community/blur';
import LinearGradient from 'react-native-linear-gradient';
import { COLOR, FONT } from '../../../styles';

export default function AnimatedHeader01({title, onBack, showHeader = true}) {
  const headerAnim = useRef(new Animated.Value(1)).current; // 1 = visible, 0 = hidden
  const HEADER_HEIGHT = 60;

  useEffect(() => {
    Animated.timing(headerAnim, {
      toValue: showHeader ? 1 : 0,
      duration: 250,
      useNativeDriver: true,
    }).start();
  }, [showHeader, headerAnim]);

  return (
    <Animated.View
      style={[
        styles.animatedHeader,
        {
          height: HEADER_HEIGHT,
          opacity: headerAnim,
          transform: [
            {
              translateY: headerAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [-HEADER_HEIGHT, 0],
              }),
            },
          ],
          top: 0,
        },
      ]}
      pointerEvents={showHeader ? 'auto' : 'none'}>
      <SafeAreaView>
        <View style={styles.headerBorder}>
          <LinearGradient
            colors={[
              'rgba(255,255,255,0.85)',
              'rgba(255,255,255,0.18)',
              'rgba(255,255,255,0.10)',
              'rgba(255,255,255,0.01)',
            ]}
            start={{x: 0.2, y: 0}}
            end={{x: 0.8, y: 1}}
            style={styles.headerGlassBorder}>
            <BlurView
              style={styles.blurGlass}
              blurType="light"
              blurAmount={8}
              reducedTransparencyFallbackColor="#fff"
            />
            <View style={styles.header}>
              <TouchableOpacity onPress={onBack}>
                <Icon
                  name="chevron-back"
                  size={24}
                  color={COLOR.primaryColor}
                />
              </TouchableOpacity>
              <Text style={styles.title}>{title}</Text>
              <TouchableOpacity>
                <Icon
                  name="ellipsis-horizontal" 
                  size={24}
                  color={COLOR.primaryColor}
                />
              </TouchableOpacity>
            </View>
          </LinearGradient>
        </View>
      </SafeAreaView>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  title: {
    color: COLOR.primaryColor,
    ...FONT.mitrRegular(20),
  },
  animatedHeader: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    // height diatur di komponen
  },
  headerBorder: {
    overflow: 'hidden',
    position: 'relative',
    // Hapus margin agar header menempel ke atas
    // borderRadius: 32, // jika ingin full rectangle, hapus borderRadius
  },
  headerGlassBorder: {
    borderBottomWidth: 1.5,
    borderColor: 'rgba(255,255,255,0.18)',
    overflow: 'hidden',
    // borderRadius: 32, // jika ingin full rectangle, hapus borderRadius
    // marginHorizontal: 0, // pastikan tidak ada margin
  },
  blurGlass: {
    ...StyleSheet.absoluteFillObject,
    borderBottomWidth: 1.5,
    borderColor: 'rgba(255,255,255,0.35)',
    overflow: 'hidden',
  },
});
