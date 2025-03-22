import * as React from "react";
import { StyleSheet, ScrollView, TouchableOpacity, Image } from "react-native";
import { View } from "@/components/Themed";
import { Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const categories = ["Full Body", "Chest", "Cardio", "Lower Body"];
const workouts = [
  {
    title: "Full Body Workout",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438",
    reps: 75,
    weight: 80,
  },
  {
    title: "Chest & Triceps",
    image: "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff",
    reps: 60,
    weight: 65,
  },
];

export default function HomeScreen() {
  const [selectedCategory, setSelectedCategory] = React.useState("Full Body");

  return (
    <ScrollView style={styles.container}>
      {/* Profile Section */}
      <View style={styles.profileSection}>
        <View style={styles.profileImageContainer}>
          <Image
            source={{ uri: "https://via.placeholder.com/100" }}
            style={styles.profileImage}
          />
        </View>
        <View style={styles.profileInfo}>
          <Text style={styles.userName}>John Doe</Text>
          <Text style={styles.userDescription}>Fitness Enthusiast</Text>
        </View>
      </View>

      {/* Challenge Section */}
      <View style={styles.challengeCard}>
        <Text style={styles.challengeIcon}>🔥</Text>
        <Text style={styles.challengeTitle}>Today's Challenge</Text>
        <Text style={styles.challengeText}>100 Push-ups</Text>
      </View>

      {/* Workout Program Section */}
      <View style={styles.workoutSection}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Workout Program</Text>
          <TouchableOpacity>
            <Text style={styles.seeAllButton}>See All</Text>
          </TouchableOpacity>
        </View>

        {/* Categories */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.categoriesContainer}
        >
          {categories.map((category) => (
            <TouchableOpacity
              key={category}
              style={[
                styles.categoryTag,
                selectedCategory === category && styles.selectedCategory,
              ]}
              onPress={() => setSelectedCategory(category)}
            >
              <Text
                style={[
                  styles.categoryText,
                  selectedCategory === category && styles.selectedCategoryText,
                ]}
              >
                {category}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Workout Cards */}
        {workouts.map((workout, index) => (
          <View key={index} style={styles.workoutCard}>
            <Image
              source={{ uri: workout.image }}
              style={styles.workoutImage}
            />
            <View style={styles.workoutOverlay}>
              <Text style={styles.workoutTitle}>{workout.title}</Text>
              <View style={styles.progressContainer}>
                <View style={styles.progressItem}>
                  <Text style={styles.progressValue}>{workout.reps}%</Text>
                  <Text style={styles.progressLabel}>Reps</Text>
                </View>
                <View style={styles.progressItem}>
                  <Text style={styles.progressValue}>{workout.weight}%</Text>
                  <Text style={styles.progressLabel}>Weight</Text>
                </View>
              </View>
              <TouchableOpacity style={styles.startButton}>
                <Text style={styles.startButtonText}>Start Workout</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EA5B42",
  },
  profileSection: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    paddingTop: 40,
  },
  profileImageContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    overflow: "hidden",
    borderWidth: 2,
    borderColor: "white",
  },
  profileImage: {
    width: "100%",
    height: "100%",
  },
  profileInfo: {
    marginLeft: 15,
  },
  userName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  userDescription: {
    fontSize: 14,
    color: "white",
    opacity: 0.8,
  },
  challengeCard: {
    backgroundColor: "rgba(30, 30, 30, 0.9)",
    margin: 20,
    padding: 20,
    borderRadius: 15,
    alignItems: "center",
  },
  challengeIcon: {
    fontSize: 32,
    marginBottom: 10,
  },
  challengeTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    marginBottom: 5,
  },
  challengeText: {
    fontSize: 24,
    color: "#EA5B42",
    fontWeight: "bold",
  },
  workoutSection: {
    padding: 20,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  seeAllButton: {
    color: "white",
    opacity: 0.8,
  },
  categoriesContainer: {
    marginBottom: 20,
  },
  categoryTag: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    marginRight: 10,
  },
  selectedCategory: {
    backgroundColor: "#1E1E1E",
  },
  categoryText: {
    color: "white",
    opacity: 0.8,
  },
  selectedCategoryText: {
    opacity: 1,
  },
  workoutCard: {
    height: 200,
    borderRadius: 15,
    marginBottom: 15,
    overflow: "hidden",
  },
  workoutImage: {
    width: "100%",
    height: "100%",
  },
  workoutOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 15,
    justifyContent: "space-between",
  },
  workoutTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  progressContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
  },
  progressItem: {
    alignItems: "center",
  },
  progressValue: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  progressLabel: {
    fontSize: 12,
    color: "white",
    opacity: 0.8,
  },
  startButton: {
    backgroundColor: "#1E1E1E",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  startButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});
