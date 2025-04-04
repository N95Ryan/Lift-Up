import React from "react";
import { StyleSheet, View, Pressable } from "react-native";
import { Box, Text, VStack, Icon } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

interface MenuButton {
  id: string;
  title: string;
  description: string;
  icon: string;
  route: string;
  color: string;
  textColor: string;
}

const menuButtons: MenuButton[] = [
  {
    id: "1",
    title: "My Routine",
    description: "Create your personalized workout routine",
    icon: "fitness-center",
    route: "/routine",
    color: "#DBEAFE",
    textColor: "#1E40AF",
  },
  {
    id: "2",
    title: "Converter",
    description: "Convert your weight units",
    icon: "swap-horiz",
    route: "/converter",
    color: "#DCFCE7",
    textColor: "#15803D",
  },
  {
    id: "3",
    title: "My Stats",
    description: "Track your progress",
    icon: "bar-chart",
    route: "/stats",
    color: "#FFEDD5",
    textColor: "#9A3412",
  },
];

export default function MenuButtons() {
  const router = useRouter();

  return (
    <Box mx={4} mb={4}>
      {/* Header */}
      <View style={styles.header}>
        <Text fontSize="xl" fontWeight="bold" color="white">
          What do you want to do today ?
        </Text>
      </View>

      {/* Menu Buttons */}
      <VStack space={5}>
        {menuButtons.map((button) => (
          <Pressable
            key={button.id}
            onPress={() => router.push(button.route as any)}
            style={({ pressed }) => [{ opacity: pressed ? 0.7 : 1 }]}
          >
            <Box rounded="xl" overflow="hidden" height={90}>
              <View style={styles.container}>
                <View style={styles.backgroundLayer} />
                <View style={styles.contentContainer}>
                  <View
                    style={[
                      styles.iconContainer,
                      { backgroundColor: button.color },
                    ]}
                  >
                    <Icon
                      as={MaterialIcons}
                      name={button.icon}
                      size="md"
                      color={button.textColor}
                    />
                  </View>
                  <View style={styles.textContainer}>
                    <Text style={styles.buttonTitle}>{button.title}</Text>
                    <Text style={styles.buttonDescription}>
                      {button.description}
                    </Text>
                  </View>
                  <Icon
                    as={MaterialIcons}
                    name="chevron-right"
                    size="md"
                    color="#666"
                  />
                </View>
              </View>
            </Box>
          </Pressable>
        ))}
      </VStack>
    </Box>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  container: {
    position: "relative",
    width: "100%",
    height: "100%",
  },
  backgroundLayer: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
  },
  contentContainer: {
    position: "absolute",
    width: "100%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    flex: 1,
    marginLeft: 12,
  },
  buttonTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000000",
    marginBottom: 4,
  },
  buttonDescription: {
    fontSize: 14,
    color: "#666666",
  },
});
