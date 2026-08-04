import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { router, Stack } from 'expo-router';
import { FontAwesome5 } from '@expo/vector-icons';

export default function AccountScreen() {
  return (
    <View style={styles.container}>
      <Stack.Screen 
        options={{
          title: 'My Account',
        }}
      />
      
      <ScrollView style={styles.content}>
        <View style={styles.profileSection}>
          <View style={styles.profileHeader}>
            <Image 
              style={styles.profileImage}
              source={{uri: 'https://via.placeholder.com/100'}}
            />
            <View style={styles.profileInfo}>
              <Text style={styles.name}>John Doe</Text>
              <Text style={styles.memberSince}>Member since Jan 2024</Text>
            </View>
          </View>

          <TouchableOpacity style={styles.editButton}>
            <Text style={styles.editButtonText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <FontAwesome5 name="dumbbell" size={24} color="#444" />
            <Text style={styles.statNumber}>156</Text>
            <Text style={styles.statLabel}>Total Workouts</Text>
          </View>

          <View style={styles.statCard}>
            <FontAwesome5 name="fire" size={24} color="#444" />
            <Text style={styles.statNumber}>24</Text>
            <Text style={styles.statLabel}>Workout Streak</Text>
          </View>

          <View style={styles.statCard}>
            <FontAwesome5 name="trophy" size={24} color="#444" />
            <Text style={styles.statNumber}>12</Text>
            <Text style={styles.statLabel}>PRs Set</Text>
          </View>
        </View>

        <View style={styles.menuSection}>
          <TouchableOpacity style={styles.menuItem}>
            <FontAwesome5 name="cog" size={20} color="#444" />
            <Text style={styles.menuText}>Settings</Text>
            <FontAwesome5 name="chevron-right" size={16} color="#666" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <FontAwesome5 name="chart-bar" size={20} color="#444" />
            <Text style={styles.menuText}>Progress Analytics</Text>
            <FontAwesome5 name="chevron-right" size={16} color="#666" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <FontAwesome5 name="history" size={20} color="#444" />
            <Text style={styles.menuText}>Workout History</Text>
            <FontAwesome5 name="chevron-right" size={16} color="#666" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <FontAwesome5 name="bell" size={20} color="#444" />
            <Text style={styles.menuText}>Notifications</Text>
            <FontAwesome5 name="chevron-right" size={16} color="#666" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem} onPress={() => router.push("/about")}>
            <FontAwesome5 name="info-circle" size={20} color="#444" />
            <Text style={styles.menuText}>About</Text>
            <FontAwesome5 name="chevron-right" size={16} color="#666" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.logoutButton}>
          <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>
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
  profileSection: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  profileInfo: {
    marginLeft: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  memberSince: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  editButton: {
    backgroundColor: '#f0f0f0',
    padding: 8,
    borderRadius: 8,
    marginTop: 16,
    alignItems: 'center',
  },
  editButtonText: {
    color: '#444',
    fontWeight: '500',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  statCard: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    width: '31%',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  statNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 8,
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
    marginTop: 4,
  },
  menuSection: {
    backgroundColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  menuText: {
    flex: 1,
    marginLeft: 16,
    fontSize: 16,
    color: '#444',
  },
  logoutButton: {
    backgroundColor: '#ff4444',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 20,
  },
  logoutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
});
