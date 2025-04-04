import { Tabs } from "expo-router";
import { Icon } from "native-base";
import {
  MaterialIcons,
  Ionicons,
  FontAwesome5,
  FontAwesome,
} from "@expo/vector-icons";
import { Platform, Dimensions, StyleSheet, ViewStyle } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Constants from "expo-constants";

export default function TabLayout() {
  const insets = useSafeAreaInsets();
  const screenWidth = Dimensions.get("window").width;

  // Detect if the app is running in Expo Go or in local environment
  const isExpoGo = Constants.appOwnership === "expo";

  // Create the style object based on the environment
  const tabBarStyle = {
    ...styles.common,
    ...(Platform.OS === "ios" ? styles.ios : styles.android),
    bottom: Platform.OS === "ios" ? insets.bottom + 10 : 16,
    ...(isExpoGo
      ? {
          marginHorizontal: "7.5%",
          width: "85%",
          alignSelf: "center",
          left: "7.5%",
        }
      : {
          left: screenWidth * 0.075,
          width: screenWidth * 0.85,
        }),
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

const styles = StyleSheet.create({
  common: {
    backgroundColor: "white",
    borderTopWidth: 0,
    height: 60,
    paddingBottom: 8,
    paddingTop: 8,
    borderRadius: 24,
    position: "absolute",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  ios: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  android: {
    elevation: 10,
  },
});
