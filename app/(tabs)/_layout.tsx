import { Tabs } from "expo-router";
import { Box, Icon, Pressable } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "white",
          borderTopWidth: 1,
          borderTopColor: "#E5E5E5",
          height: 60,
          paddingBottom: 8,
          paddingTop: 8,
        },
        tabBarActiveTintColor: "#FF6B00",
        tabBarInactiveTintColor: "#9CA3AF",
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Accueil",
          tabBarIcon: ({ color }) => (
            <Icon as={MaterialIcons} name="home" color={color} size="md" />
          ),
        }}
      />
      <Tabs.Screen
        name="stats"
        options={{
          title: "Statistiques",
          tabBarIcon: ({ color }) => (
            <Icon as={MaterialIcons} name="bar-chart" color={color} size="md" />
          ),
        }}
      />
      <Tabs.Screen
        name="bookmarks"
        options={{
          title: "Favoris",
          tabBarIcon: ({ color }) => (
            <Icon as={MaterialIcons} name="bookmark" color={color} size="md" />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profil",
          tabBarIcon: ({ color }) => (
            <Icon as={MaterialIcons} name="person" color={color} size="md" />
          ),
        }}
      />
    </Tabs>
  );
}
