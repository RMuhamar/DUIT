import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {RewardCard, SmallRewardCard} from '../../component';

export default function RewardsContent() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Text style={styles.cancelButton}>Cancel</Text>
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Daily Rewards</Text>

        <TouchableOpacity>
          <Text style={styles.moreButton}>•••</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}>
        <RewardCard
          title="DAILY KICKOFF BONUS"
          description="Start your streak strong – your first reward is here!"
          amount="$100"
          timeLeft="1 day left"
          backgroundColor="#6AC16A"
        />

        <View style={styles.smallCardsRow}>
          <SmallRewardCard
            amount="$120"
            title="Consistent Climber"
            subtitle="Keep going – day 2 unlocked!"
          />

          <SmallRewardCard
            amount="$50"
            title="Momentum Bonus"
            subtitle="Keep going – day 10 unlocked!"
            backgroundColor="#E8F5E8"
          />
        </View>

        <View style={styles.smallCardsRow}>
          <SmallRewardCard
            amount="$10"
            title="Midweek Motivation"
            subtitle="Keep going – day 2 unlocked!"
          />

          <SmallRewardCard
            amount="$20"
            title="Loyalty Lift"
            subtitle="Keep going – day 2 unlocked!"
          />
        </View>

        {/* Add bottom padding to prevent content being hidden behind bottom nav */}
        <View style={styles.bottomPadding} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 15,
    backgroundColor: '#333',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  cancelButton: {
    fontSize: 16,
    color: '#fff',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  moreButton: {
    fontSize: 18,
    color: '#fff',
  },
  scrollView: {
    flex: 1,
    padding: 20,
  },
  smallCardsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  bottomPadding: {
    height: 100, // Space for bottom navigation
  },
});
