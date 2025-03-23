import React from "react";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Header userName="User" />
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
});
