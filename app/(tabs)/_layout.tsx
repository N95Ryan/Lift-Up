import { Tabs } from "expo-router";
import { Box, Icon, Pressable } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#222725",
          borderTopWidth: 1,
          borderTopColor: "#333",
          height: 60,
          paddingBottom: 8,
          paddingTop: 8,
        },
        tabBarActiveTintColor: "#9E0031",
        tabBarInactiveTintColor: "#fff",
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Icon as={MaterialIcons} name="home" color={color} size="md" />
          ),
        }}
      />
      <Tabs.Screen
        name="stats"
        options={{
          title: "Statistics",
          tabBarIcon: ({ color }) => (
            <Icon as={MaterialIcons} name="bar-chart" color={color} size="md" />
          ),
        }}
      />
      <Tabs.Screen
        name="bookmarks"
        options={{
          title: "Bookmarks",
          tabBarIcon: ({ color }) => (
            <Icon as={MaterialIcons} name="bookmark" color={color} size="md" />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <Icon as={MaterialIcons} name="person" color={color} size="md" />
          ),
        }}
      />
    </Tabs>
  );
}
