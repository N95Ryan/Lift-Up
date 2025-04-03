import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface HeaderProps {
  userName: string;
}

const { width } = Dimensions.get("window");

const Header: React.FC<HeaderProps> = ({ userName }) => {
  const getGreetingMessage = () => {
    const hour = new Date().getHours();

    if (hour >= 5 && hour < 10) {
      return "Wake up the strength within you! 💪";
    } else if (hour >= 10 && hour < 17) {
      return "Give it your all, go for it! 🚀";
    } else if (hour >= 17 && hour < 21) {
      return "Finish strong! 🔥";
    } else {
      return "Real bosses train at night! 🌙";
    }
  };

  return (
    <View style={styles.header}>
      <View style={styles.userInfo}>
        <View style={styles.avatarPlaceholder}>
          <Ionicons name="person" size={24} color="white" />
        </View>
        <View style={styles.greeting}>
          <Text style={styles.welcomeText}>Welcome, {userName}! 💪</Text>
          <Text style={styles.motivationText}>{getGreetingMessage()}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
    width: "100%",
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  avatarPlaceholder: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    justifyContent: "center",
    alignItems: "center",
    flexShrink: 0,
  },
  greeting: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
  welcomeText: {
    fontSize: Math.min(24, width * 0.06),
    fontWeight: "bold",
    color: "white",
    flexWrap: "wrap",
  },
  motivationText: {
    fontSize: Math.min(16, width * 0.04),
    marginTop: 5,
    flexWrap: "wrap",
  },
});

export default Header;
