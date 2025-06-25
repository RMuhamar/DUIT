import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Svg, {Circle} from 'react-native-svg';
import {FONT} from '../../styles';
import IMAGE from '../../assets';
import Feather from 'react-native-vector-icons/Feather';

export default function BalanceCircle({
  shoppingValue = 600,
  starValue = 150,
  savingsValue = 250,
}) {
  // Circle configuration
  const size = 220;
  const strokeWidth = 7;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const center = size / 2;

  // Calculate total and percentages
  const total = shoppingValue + starValue + savingsValue;
  const shoppingPercent = shoppingValue / total;
  const starPercent = starValue / total;
  const savingsPercent = savingsValue / total;

  // Calculate stroke dashoffset for each segment
  const shoppingOffset = circumference * (1 - shoppingPercent);
  const starOffset = circumference * (1 - starPercent);
  const savingsOffset = circumference * (1 - savingsPercent);

  // Calculate cumulative angles (starting from -90 degrees = top of circle)
  const startAngle = -90;

  // Shopping segment: from 0% to shoppingPercent
  const shoppingStartAngle = startAngle;
  const shoppingEndAngle = startAngle + shoppingPercent * 360;
  const shoppingMidAngle = (shoppingStartAngle + shoppingEndAngle) / 2;

  // Star segment: from shoppingPercent to (shoppingPercent + starPercent)
  const starStartAngle = shoppingEndAngle;
  const starEndAngle = starStartAngle + starPercent * 360;
  const starMidAngle = (starStartAngle + starEndAngle) / 2;

  // Savings segment: from (shoppingPercent + starPercent) to 100%
  const savingsStartAngle = starEndAngle;
  const savingsEndAngle = savingsStartAngle + savingsPercent * 360;
  const savingsMidAngle = (savingsStartAngle + savingsEndAngle) / 2;

  // Calculate icon positions - POSITIONED ON THE STROKE LINE
  // Use the same radius as the circle stroke, not outside it
  const iconRadius = radius; // Same as stroke radius

  const shoppingIconX =
    center + iconRadius * Math.cos((shoppingMidAngle * Math.PI) / 180);
  const shoppingIconY =
    center + iconRadius * Math.sin((shoppingMidAngle * Math.PI) / 180);

  const starIconX =
    center + iconRadius * Math.cos((starMidAngle * Math.PI) / 180);
  const starIconY =
    center + iconRadius * Math.sin((starMidAngle * Math.PI) / 180);

  const savingsIconX =
    center + iconRadius * Math.cos((savingsMidAngle * Math.PI) / 180);
  const savingsIconY =
    center + iconRadius * Math.sin((savingsMidAngle * Math.PI) / 180);

  return (
    <View style={styles.container}>
      <Svg width={size} height={size} style={styles.svg}>
        {/* Background Circle */}
        <Circle
          cx={center}
          cy={center}
          r={radius}
          stroke="#f0f0f0"
          strokeWidth={strokeWidth}
          fill="none"
        />

        {/* Shopping Progress (Purple) */}
        <Circle
          cx={center}
          cy={center}
          r={radius}
          stroke="#b94dc7"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={shoppingOffset}
          strokeLinecap="round"
          fill="none"
          transform={`rotate(-90 ${center} ${center})`}
        />

        {/* Star Progress (Green) */}
        <Circle
          cx={center}
          cy={center}
          r={radius}
          stroke="#6AC16A"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={starOffset}
          strokeLinecap="round"
          fill="none"
          transform={`rotate(${shoppingEndAngle} ${center} ${center})`}
        />

        {/* Savings Progress (Orange) */}
        <Circle
          cx={center}
          cy={center}
          r={radius}
          stroke="#e67e22"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={savingsOffset}
          strokeLinecap="round"
          fill="none"
          transform={`rotate(${starEndAngle} ${center} ${center})`}
        />
      </Svg>

      {/* Dollar Sign in the middle */}
      <View style={styles.dollarContainer}>
        <Image source={IMAGE.images.dollar} style={{width:150, height:200}}/>
      </View>

      {/* Shopping Icon - Positioned ON the stroke line */}
      <View
        style={[
          styles.iconContainer,
          styles.shoppingIcon,
          {
            left: shoppingIconX - 25, // Center the 50px icon
            top: shoppingIconY - 25, // Center the 50px icon
          },
        ]}>
        <Feather name="shopping-cart" style={styles.iconEmoji} />
        <Text style={styles.iconValue}>{shoppingValue}</Text>
      </View>

      {/* Star Icon - Positioned ON the stroke line */}
      <View
        style={[
          styles.iconContainer,
          styles.starIcon,
          {
            left: starIconX - 25,
            top: starIconY - 25,
          },
        ]}>
        <Feather name="star" style={styles.iconEmoji} />
        <Text style={styles.iconValue}>{starValue}</Text>
      </View>

      {/* Savings Icon - Positioned ON the stroke line */}
      <View
        style={[
          styles.iconContainer,
          styles.savingsIcon,
          {
            left: savingsIconX - 25,
            top: savingsIconY - 25,
          },
        ]}>
        <Feather name="dollar-sign" style={styles.iconEmoji} />
        <Text style={styles.iconValue}>{savingsValue}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    width: 220,
    height: 220,
  },
  svg: {
    position: 'absolute',
  },
  dollarContainer: {
    position: 'absolute',
    width: 200,
    height: 200,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },
  dollarSign: {
    fontSize: 60,
    fontWeight: 'bold',
    color: '#fff',
  },
  iconContainer: {
    position: 'absolute',
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 3, // Higher than dollar container
    // Add border to make it more visible on the stroke
    borderWidth: 2,
    borderColor: '#fff',
  },
  shoppingIcon: {
    backgroundColor: '#b94dc7',
  },
  starIcon: {
    backgroundColor: '#6AC16A',
  },
  savingsIcon: {
    backgroundColor: '#e67e22',
  },
  iconEmoji: {
    fontSize: 18, // Slightly smaller to fit better
  },
  iconValue: {
    position: 'absolute',
    ...FONT.mitrRegular(14),
    color: '#000',
    top: -30,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 8,
    minWidth: 30,
    textAlign: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#ddd',
  },
});
