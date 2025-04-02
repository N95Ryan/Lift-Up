import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Header userName="User" />

        {/* Conseil du jour */}
        <View style={styles.tipSection}>
          <Text style={styles.sectionTitle}>💡 Conseil du jour</Text>
          <Text style={styles.tipText}>
            L'échauffement est essentiel pour éviter les blessures. Pense à bien
            préparer tes muscles !
          </Text>
        </View>

        {/* Objectifs du jour */}
        <View style={styles.goalSection}>
          <Text style={styles.sectionTitle}>🎯 Objectifs du jour</Text>
          <Text style={styles.goalText}>✅ Boire 2L d’eau</Text>
          <Text style={styles.goalText}>✅ Effectuer 3 séries de squats</Text>
        </View>

        {/* Bouton d'accès rapide */}
        <TouchableOpacity style={styles.quickActionButton} onPress={() => {}}>
          <Text style={styles.buttonText}>Démarrer une séance</Text>
        </TouchableOpacity>
      </ScrollView>
      <Navbar activeTab="home" />
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
  goalSection: {
    backgroundColor: "#fff",
    margin: 15,
    padding: 15,
    borderRadius: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  goalText: {
    fontSize: 16,
    color: "#333",
  },
  tipSection: {
    backgroundColor: "#FFD700",
    margin: 15,
    padding: 15,
    borderRadius: 10,
  },
  tipText: {
    fontSize: 16,
    color: "#333",
  },
  quickActionButton: {
    backgroundColor: "#fff",
    padding: 15,
    margin: 20,
    borderRadius: 50,
    alignItems: "center",
  },
  buttonText: {
    color: "#EA5B42",
    fontSize: 18,
    fontWeight: "bold",
  },
});
