import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Stack } from 'expo-router';

export default function AboutScreen() {
  return (
    <ScrollView style={styles.container}>
      <Stack.Screen
        options={{
          title: 'About',
          headerBackTitle: 'Back',
          headerStyle: {
            backgroundColor: '#25292e',
          },
          headerTintColor: '#fff',
        }}
      />

      <View style={styles.section}>
        <Text style={styles.title}>Welcome to LiftLegends</Text>
        <Text style={styles.text}>
          LiftLegends is your ultimate companion for strength training and fitness tracking. Our app helps you achieve your fitness goals through smart workout planning and progress tracking.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>Key Features</Text>
        <Text style={styles.text}>• Personalized workout plans</Text>
        <Text style={styles.text}>• Progress tracking and analytics</Text>
        <Text style={styles.text}>• Exercise library with proper form guides</Text>
        <Text style={styles.text}>• Personal records tracking</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>Our Mission</Text>
        <Text style={styles.text}>
          We're dedicated to making strength training accessible and effective for everyone, from beginners to advanced athletes. Our goal is to help you become the strongest version of yourself.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>Version</Text>
        <Text style={styles.text}>1.0.0</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  section: {
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 12,
    color: '#444',
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    color: '#666',
    marginBottom: 8,
  },
});
