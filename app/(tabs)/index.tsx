import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Stack } from 'expo-router';
import { FontAwesome5 } from '@expo/vector-icons';
import { ContributionGraph } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Stack.Screen 
        options={{
          title: 'Home',
        }}
      />
      
      <ScrollView style={styles.content}>
        <View style={styles.welcomeSection}>
          <Text style={styles.welcomeText}>Welcome back, Legend!</Text>
          <Text style={styles.subtitle}>Ready for today's workout?</Text>
        </View>

        <View style={styles.quickActions}>
          <TouchableOpacity style={styles.actionCard}>
            <FontAwesome5 name="dumbbell" size={24} color="#444" />
            <Text style={styles.actionText}>Start Workout</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionCard}>
            <FontAwesome5 name="chart-line" size={24} color="#444" />
            <Text style={styles.actionText}>View Progress</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionCard}>
            <FontAwesome5 name="calendar-alt" size={24} color="#444" />
            <Text style={styles.actionText}>Plan Workout</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionCard}>
            <FontAwesome5 name="trophy" size={24} color="#444" />
            <Text style={styles.actionText}>Personal Records</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.statsSection}>
          <Text style={styles.sectionTitle}>Quick Stats</Text>
          <View style={styles.heatmapContainer}>
            <Text style={styles.heatmapTitle}>Gym Visit History</Text>
            {/* ContributionGraph from react-native-chart-kit */}
            {(() => {
              const today = new Date();
              const numDays = 105; // 15 weeks
              const values = Array.from({ length: numDays }, (_, i) => {
                const date = new Date(today);
                date.setDate(today.getDate() - (numDays - 1 - i));
                return {
                  date: date.toISOString().slice(0, 10),
                  count: Math.random() > 0.6 ? Math.floor(Math.random() * 3) + 1 : 0,
                };
              });
              return (
                <ContributionGraph
                  values={values}
                  endDate={today}
                  numDays={numDays}
                  width={Dimensions.get('window').width - 64}
                  height={180}
                  chartConfig={{
                    backgroundColor: '#fff',
                    backgroundGradientFrom: '#fff',
                    backgroundGradientTo: '#fff',
                    color: (opacity = 1) => `rgba(249, 178, 51, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(100, 100, 100, ${opacity})`,
                    style: { borderRadius: 16 },
                  }}
                  gutterSize={4}
                  tooltipDataAttrs={() => ({})}
                />
              );
            })()}
          </View>

          <View style={styles.statsGrid}>
            <View style={styles.statCard}>
              <Text style={styles.statNumber}>12</Text>
              <Text style={styles.statLabel}>Workouts This Month</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statNumber}>3</Text>
              <Text style={styles.statLabel}>PRs This Week</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statNumber}>85%</Text>
              <Text style={styles.statLabel}>Goal Progress</Text>
            </View>
          </View>
        </View>

        <View style={styles.recentSection}>
          <Text style={styles.sectionTitle}>Recent Activity</Text>
          <View style={styles.recentWorkout}>
            <Text style={styles.workoutTitle}>Upper Body Strength</Text>
            <Text style={styles.workoutDate}>Yesterday • 45 min</Text>
          </View>
          <View style={styles.recentWorkout}>
            <Text style={styles.workoutTitle}>Leg Day</Text>
            <Text style={styles.workoutDate}>2 days ago • 60 min</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  welcomeSection: {
    marginBottom: 24,
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    marginTop: 4,
  },
  quickActions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  actionCard: {
    width: '48%',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  actionText: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: '500',
    color: '#444',
  },
  statsSection: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    marginBottom: 16,
  },
  statsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statCard: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    marginHorizontal: 4,
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
    marginTop: 4,
  },
  recentSection: {
    marginBottom: 24,
  },
  recentWorkout: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  workoutTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
  workoutDate: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  heatmapContainer: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  heatmapTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
    marginBottom: 12,
  },
});
