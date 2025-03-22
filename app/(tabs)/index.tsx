import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

interface WorkoutCategory {
  id: number;
  title: string;
  duration: string;
  color: string;
}

interface Activity {
  id: number;
  name: string;
  duration: string;
  calories: string;
  type: "strength" | "cardio" | "yoga";
}

export default function HomeScreen() {
  const router = useRouter();
  const [workoutCategories, setWorkoutCategories] = useState<WorkoutCategory[]>(
    []
  );
  const [recentActivities, setRecentActivities] = useState<Activity[]>([]);
  const [activeTab, setActiveTab] = useState("home");

  useEffect(() => {
    fetchWorkoutCategories();
    fetchRecentActivities();
  }, []);

  const fetchWorkoutCategories = async () => {
    setWorkoutCategories([
      {
        id: 1,
        title: "Musculation",
        duration: "30 minutes",
        color: "#4CAF50",
      },
      {
        id: 2,
        title: "Cardio",
        duration: "45 minutes",
        color: "#2196F3",
      },
      {
        id: 3,
        title: "Yoga",
        duration: "1 heure",
        color: "#9C27B0",
      },
    ]);
  };

  const fetchRecentActivities = async () => {
    setRecentActivities([
      {
        id: 1,
        name: "Course Matinale",
        duration: "30 minutes",
        calories: "200 calories",
        type: "cardio",
      },
      {
        id: 2,
        name: "Musculation",
        duration: "45 minutes",
        calories: "300 calories",
        type: "strength",
      },
      {
        id: 3,
        name: "Session Yoga",
        duration: "1 heure",
        calories: "250 calories",
        type: "yoga",
      },
    ]);
  };

  const getActivityIcon = (type: Activity["type"]) => {
    switch (type) {
      case "strength":
        return "barbell";
      case "cardio":
        return "walk";
      case "yoga":
        return "leaf";
      default:
        return "fitness";
    }
  };

  const handleTabPress = (tab: string) => {
    setActiveTab(tab);
    switch (tab) {
      case "home":
        router.push("/(tabs)");
        break;
      case "workout":
        router.push("/(tabs)/workout");
        break;
      case "stats":
        router.push("/(tabs)/stats");
        break;
      case "profile":
        router.push("/(tabs)/profile");
        break;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <View style={styles.userInfo}>
            <View style={styles.avatarPlaceholder}>
              <Ionicons name="person" size={24} color="white" />
            </View>
            <View style={styles.greeting}>
              <Text style={styles.userName}>Bonjour, User</Text>
              <Text style={styles.subtitle}>
                Quel est votre plan pour aujourd'hui ?
              </Text>
            </View>
          </View>
          <TouchableOpacity style={styles.notificationButton}>
            <Ionicons name="notifications" size={24} color="white" />
          </TouchableOpacity>
        </View>

        <View style={styles.categoriesContainer}>
          {workoutCategories.map((category) => (
            <TouchableOpacity
              key={category.id}
              style={[styles.categoryCard, { backgroundColor: category.color }]}
            >
              <View style={styles.categoryContent}>
                <Ionicons
                  name={
                    category.title === "Musculation"
                      ? "barbell"
                      : category.title === "Cardio"
                      ? "walk"
                      : "leaf"
                  }
                  size={32}
                  color="white"
                />
                <Text style={styles.categoryTitle}>{category.title}</Text>
                <Text style={styles.categoryDuration}>{category.duration}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.statsSection}>
          <Text style={styles.sectionTitle}>Historique</Text>
          <View style={styles.statsRow}>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>21,898</Text>
              <Text style={styles.statLabel}>Pas Totaux</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>17.5 km</Text>
              <Text style={styles.statLabel}>Distance Totale</Text>
            </View>
          </View>
        </View>

        <View style={styles.activitiesSection}>
          {recentActivities.map((activity) => (
            <TouchableOpacity key={activity.id} style={styles.activityItem}>
              <View style={styles.activityLeft}>
                <View
                  style={[
                    styles.activityIcon,
                    {
                      backgroundColor:
                        activity.type === "strength"
                          ? "#4CAF50"
                          : activity.type === "cardio"
                          ? "#2196F3"
                          : "#9C27B0",
                    },
                  ]}
                >
                  <Ionicons
                    name={getActivityIcon(activity.type)}
                    size={16}
                    color="white"
                  />
                </View>
                <View>
                  <Text style={styles.activityName}>{activity.name}</Text>
                  <Text style={styles.activityDetails}>
                    {activity.duration} • {activity.calories}
                  </Text>
                </View>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#666" />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      <View style={styles.navbar}>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => handleTabPress("home")}
        >
          <Ionicons
            name={activeTab === "home" ? "home" : "home-outline"}
            size={24}
            color={activeTab === "home" ? "#EA5B42" : "#666"}
          />
          <Text
            style={[
              styles.navText,
              activeTab === "home" && styles.navTextActive,
            ]}
          >
            Accueil
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => handleTabPress("workout")}
        >
          <Ionicons
            name={activeTab === "workout" ? "barbell" : "barbell-outline"}
            size={24}
            color={activeTab === "workout" ? "#EA5B42" : "#666"}
          />
          <Text
            style={[
              styles.navText,
              activeTab === "workout" && styles.navTextActive,
            ]}
          >
            Entraînement
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => handleTabPress("stats")}
        >
          <Ionicons
            name={activeTab === "stats" ? "stats-chart" : "stats-chart-outline"}
            size={24}
            color={activeTab === "stats" ? "#EA5B42" : "#666"}
          />
          <Text
            style={[
              styles.navText,
              activeTab === "stats" && styles.navTextActive,
            ]}
          >
            Statistiques
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => handleTabPress("profile")}
        >
          <Ionicons
            name={activeTab === "profile" ? "person" : "person-outline"}
            size={24}
            color={activeTab === "profile" ? "#EA5B42" : "#666"}
          />
          <Text
            style={[
              styles.navText,
              activeTab === "profile" && styles.navTextActive,
            ]}
          >
            Profil
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EA5B42",
  },
  scrollView: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatarPlaceholder: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    justifyContent: "center",
    alignItems: "center",
  },
  greeting: {
    flexDirection: "column",
  },
  userName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  subtitle: {
    fontSize: 14,
    color: "white",
    opacity: 0.9,
  },
  notificationButton: {
    padding: 8,
  },
  categoriesContainer: {
    padding: 15,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  categoryCard: {
    width: "48%",
    height: 120,
    borderRadius: 15,
    marginBottom: 15,
    overflow: "hidden",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  categoryContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
    marginTop: 10,
    marginBottom: 5,
  },
  categoryDuration: {
    fontSize: 12,
    color: "white",
    opacity: 0.9,
  },
  statsSection: {
    padding: 20,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    margin: 15,
    borderRadius: 15,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    marginBottom: 15,
  },
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  statItem: {
    alignItems: "center",
  },
  statValue: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginBottom: 5,
  },
  statLabel: {
    fontSize: 14,
    color: "white",
    opacity: 0.9,
  },
  activitiesSection: {
    padding: 15,
  },
  activityItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 12,
    marginBottom: 10,
  },
  activityLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  activityIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  activityName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
    marginBottom: 4,
  },
  activityDetails: {
    fontSize: 14,
    color: "white",
    opacity: 0.9,
  },
  navbar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "white",
    paddingVertical: 10,
    paddingBottom: 25,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  navItem: {
    alignItems: "center",
  },
  navText: {
    fontSize: 12,
    color: "#666",
    marginTop: 4,
  },
  navTextActive: {
    color: "#EA5B42",
    fontWeight: "bold",
  },
});
