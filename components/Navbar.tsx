import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

interface NavbarProps {
  activeTab: string;
}

export default function Navbar({ activeTab }: NavbarProps) {
  const router = useRouter();

  const handleTabPress = (tab: string) => {
    switch (tab) {
      case "home":
        router.push("/(tabs)");
        break;
      case "converter":
        router.push("/(tabs)/converter");
        break;
      case "profile":
        router.push("/(tabs)/profile");
        break;
    }
  };

  return (
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
          style={[styles.navText, activeTab === "home" && styles.navTextActive]}
        >
          Accueil
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.navItem}
        onPress={() => handleTabPress("converter")}
      >
        <Ionicons
          name={activeTab === "converter" ? "calculator" : "calculator-outline"}
          size={24}
          color={activeTab === "converter" ? "#EA5B42" : "#666"}
        />
        <Text
          style={[
            styles.navText,
            activeTab === "converter" && styles.navTextActive,
          ]}
        >
          Conversion
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
  );
}

const styles = StyleSheet.create({
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
