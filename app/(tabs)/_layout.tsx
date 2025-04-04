import { Tabs } from "expo-router";
import { Box, Icon, Pressable } from "native-base";
import {
  MaterialIcons,
  Ionicons,
  FontAwesome5,
  FontAwesome,
} from "@expo/vector-icons";
import { Platform, StyleSheet, Dimensions } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function TabLayout() {
  const insets = useSafeAreaInsets();
  const screenWidth = Dimensions.get("window").width;

  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "white",
          borderTopWidth: 0,
          height: 60,
          paddingBottom: 8,
          paddingTop: 8,
          borderRadius: 24,
          position: "absolute",
          bottom: Platform.OS === "ios" ? insets.bottom + 10 : 16,
          marginHorizontal: "7.5%", // 7.5% de marge de chaque côté = 15% au total
          width: "85%", // 85% de la largeur de l'écran
          alignSelf: "center", // Centre la navbar horizontalement
          left: "7.5%", // Positionne depuis la gauche à 7.5% de l'écran
          elevation: 10,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: -3 },
          shadowOpacity: 0.1,
          shadowRadius: 5,
          ...Platform.select({
            ios: {
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.2,
              shadowRadius: 4,
            },
            android: {
              elevation: 10,
            },
          }),
        },
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
          tabBarIcon: ({ color, focused }) => (
            <Icon as={FontAwesome5} name="home" color={color} size="md" />
          ),
        }}
      />
      <Tabs.Screen
        name="converter"
        options={{
          title: "Converter",
          tabBarIcon: ({ color, focused }) => (
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
          tabBarIcon: ({ color, focused }) => (
            <Icon as={Ionicons} name="stats-chart" color={color} size="md" />
          ),
        }}
      />
      <Tabs.Screen
        name="bookmarks"
        options={{
          title: "Bookmarks",
          tabBarIcon: ({ color, focused }) => (
            <Icon as={Ionicons} name="bookmarks" color={color} size="md" />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, focused }) => (
            <Icon as={FontAwesome} name="user-circle" color={color} size="md" />
          ),
        }}
      />
    </Tabs>
  );
}
