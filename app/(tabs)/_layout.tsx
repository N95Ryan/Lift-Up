import { Tabs } from "expo-router";
import { Icon } from "native-base";
import {
  MaterialIcons,
  Ionicons,
  FontAwesome5,
  FontAwesome,
} from "@expo/vector-icons";
import { Platform, StyleSheet, ViewStyle, Dimensions } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function TabLayout() {
  const insets = useSafeAreaInsets();
  const screenWidth = Dimensions.get("window").width;

  const tabBarStyle = {
    ...styles.tabBar,
    bottom: Platform.OS === "ios" ? insets.bottom + 10 : 16,
    left: "50%",
    transform: [{ translateX: -screenWidth * 0.425 }], // Half of 85% width
    width: "85%",
  };

  return (
    <Tabs
      screenOptions={{
        tabBarStyle: tabBarStyle as ViewStyle,
        tabBarActiveTintColor: "#9E0031",
        tabBarInactiveTintColor: "gray.600",
        tabBarShowLabel: false,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Icon as={FontAwesome5} name="home" color={color} size="md" />
          ),
        }}
      />
      <Tabs.Screen
        name="routine"
        options={{
          title: "Routine",
          tabBarIcon: ({ color }) => (
            <Icon
              as={MaterialIcons}
              name="fitness-center"
              color={color}
              size="md"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="converter"
        options={{
          title: "Converter",
          tabBarIcon: ({ color }) => (
            <Icon
              as={MaterialIcons}
              name="change-circle"
              color={color}
              size="md"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="stats"
        options={{
          title: "Statistics",
          tabBarIcon: ({ color }) => (
            <Icon as={Ionicons} name="stats-chart" color={color} size="md" />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <Icon as={FontAwesome} name="user-circle" color={color} size="md" />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "white",
    borderTopWidth: 0,
    height: 60,
    paddingBottom: 8,
    paddingTop: 8,
    borderRadius: 24,
    position: "absolute",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 10,
  },
});
