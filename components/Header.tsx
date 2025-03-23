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
      return "Réveille la force en toi ! 💪";
    } else if (hour >= 10 && hour < 17) {
      return "Donne tout, fonce ! 🚀";
    } else if (hour >= 17 && hour < 21) {
      return "Termine en feu ! 🔥";
    } else {
      return "Les vrais boss s’entraînent la nuit ! 🌙";
    }
  };

  return (
    <View style={styles.header}>
      <View style={styles.userInfo}>
        <View style={styles.avatarPlaceholder}>
          <Ionicons name="person" size={24} color="white" />
        </View>
        <View style={styles.greeting}>
          <Text style={styles.userName} numberOfLines={2} adjustsFontSizeToFit>
            Salut {userName}, prêt à soulever lourd aujourd'hui ?
          </Text>
          <Text style={styles.subtitle} numberOfLines={1} adjustsFontSizeToFit>
            {getGreetingMessage()}
          </Text>
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
  userName: {
    fontSize: Math.min(20, width * 0.05),
    fontWeight: "bold",
    color: "white",
    flexWrap: "wrap",
  },
  subtitle: {
    fontSize: Math.min(14, width * 0.035),
    color: "white",
    opacity: 0.9,
    flexWrap: "wrap",
  },
});

export default Header;
