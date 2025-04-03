import { Tabs } from "expo-router";
import { Box, Icon, Pressable } from "native-base";
import { MaterialIcons, Ionicons, FontAwesome5 } from "@expo/vector-icons";
import { Platform, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function TabLayout() {
  const insets = useSafeAreaInsets();

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
          bottom: Platform.OS === "ios" ? insets.bottom + 10 : 20,
          left: 16,
          right: 16,
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
            <Icon
              as={Ionicons}
              name={focused ? "home" : "home-outline"}
              color={color}
              size="lg"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="converter"
        options={{
          title: "Converter",
          tabBarIcon: ({ color, focused }) => (
            <Icon
              as={FontAwesome5}
              name="exchange-alt"
              color={color}
              size="lg"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="stats"
        options={{
          title: "Statistics",
          tabBarIcon: ({ color, focused }) => (
            <Icon
              as={Ionicons}
              name={focused ? "stats-chart" : "stats-chart-outline"}
              color={color}
              size="lg"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="bookmarks"
        options={{
          title: "Bookmarks",
          tabBarIcon: ({ color, focused }) => (
            <Icon
              as={Ionicons}
              name={focused ? "bookmark" : "bookmark-outline"}
              color={color}
              size="lg"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, focused }) => (
            <Icon
              as={Ionicons}
              name={focused ? "person" : "person-outline"}
              color={color}
              size="lg"
            />
          ),
        }}
      />
    </Tabs>
  );
}
