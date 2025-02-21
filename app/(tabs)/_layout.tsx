// import React from "react";
// import FontAwesome from "@expo/vector-icons/FontAwesome";
// import { Tabs } from "expo-router";
// import Colors from "@/constants/Colors";
// import { useColorScheme } from "@/components/useColorScheme";

// function TabBarIcon(props: {
//   name: React.ComponentProps<typeof FontAwesome>["name"];
//   color: string;
// }) {
//   return <FontAwesome size={26} style={{ marginBottom: -3 }} {...props} />;
// }

// export default function TabLayout() {
//   const colorScheme = useColorScheme();

//   return (
//     <Tabs
//       screenOptions={{
//         tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
//       }}
//     >
//       <Tabs.Screen
//         name="index"
//         options={{
//           title: "Home",
//           tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
//         }}
//       />
//       <Tabs.Screen
//         name="two"
//         options={{
//           title: "Account",
//           tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
//         }}
//       />
//     </Tabs>
//   );
// }
