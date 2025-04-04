import React, { useState } from "react";
import { StyleSheet, View, Pressable, ScrollView } from "react-native";
import { Box, Text, VStack, HStack, Icon, Button, Divider } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

type RoutineType = "SPLIT" | "PPL" | "EXISTING";

export default function RoutineScreen() {
  const router = useRouter();
  const [selectedType, setSelectedType] = useState<RoutineType | null>(null);

  const routineTypes = [
    {
      id: "split",
      title: "SPLIT",
      description: "Training divided by muscle groups",
      icon: "fitness-center",
      color: "#DBEAFE",
      textColor: "#1E40AF",
    },
    {
      id: "ppl",
      title: "PPL",
      description: "Push, Pull, Legs - Complete training",
      icon: "fitness-center",
      color: "#DCFCE7",
      textColor: "#15803D",
    },
    {
      id: "existing",
      title: "My Routines",
      description: "View your existing routines",
      icon: "list",
      color: "#FFEDD5",
      textColor: "#9A3412",
    },
  ];

  const handleSelectType = (type: RoutineType) => {
    setSelectedType(type);
  };

  const handleCreateRoutine = () => {
    if (selectedType === "EXISTING") {
      // Display existing routines
      return;
    }

    // Redirect to routine creation screen with selected type
    router.push({
      pathname: "/create-routine" as any,
      params: { type: selectedType },
    });
  };

  return (
    <Box flex={1} bg="black" safeArea>
      {/* Header */}
      <HStack
        alignItems="center"
        justifyContent="space-between"
        p={4}
        borderBottomWidth={1}
        borderBottomColor="gray.800"
      >
        <Pressable onPress={() => router.back()}>
          <Icon as={MaterialIcons} name="arrow-back" size="md" color="white" />
        </Pressable>
        <Text fontSize="xl" fontWeight="bold" color="white">
          Create a Routine
        </Text>
        <View style={{ width: 24 }} />
      </HStack>

      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <VStack space={4} p={4} flex={1} justifyContent="center">
          <Text fontSize="md" color="gray.300" mt={2}>
            Choose the type of routine you want to create
          </Text>

          <Divider my={2} />

          {/* Routine Types */}
          <VStack space={4}>
            {routineTypes.map((type) => (
              <Pressable
                key={type.id}
                onPress={() => handleSelectType(type.id as RoutineType)}
                style={({ pressed }) => [{ opacity: pressed ? 0.7 : 1 }]}
              >
                <Box
                  rounded="xl"
                  overflow="hidden"
                  height={90}
                  borderWidth={selectedType === type.id ? 2 : 0}
                  borderColor={type.textColor}
                >
                  <View style={styles.container}>
                    <View style={styles.backgroundLayer} />
                    <View style={styles.contentContainer}>
                      <View
                        style={[
                          styles.iconContainer,
                          { backgroundColor: type.color },
                        ]}
                      >
                        <Icon
                          as={MaterialIcons}
                          name={type.icon}
                          size="md"
                          color={type.textColor}
                        />
                      </View>
                      <View style={styles.textContainer}>
                        <Text style={styles.buttonTitle}>{type.title}</Text>
                        <Text style={styles.buttonDescription}>
                          {type.description}
                        </Text>
                      </View>
                      <Icon
                        as={MaterialIcons}
                        name={
                          selectedType === type.id
                            ? "check-circle"
                            : "radio-button-unchecked"
                        }
                        size="md"
                        color={
                          selectedType === type.id ? type.textColor : "#666"
                        }
                      />
                    </View>
                  </View>
                </Box>
              </Pressable>
            ))}
          </VStack>

          {/* Create Button */}
          <Button
            mt={6}
            mb={4}
            py={3}
            bg={selectedType ? "primary.500" : "gray.300"}
            _pressed={{ bg: selectedType ? "primary.600" : "gray.400" }}
            isDisabled={!selectedType}
            onPress={handleCreateRoutine}
          >
            <Text color="white" fontWeight="bold">
              {selectedType === "EXISTING"
                ? "View my routines"
                : "Create my routine"}
            </Text>
          </Button>
        </VStack>
      </ScrollView>
    </Box>
  );
}

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: "center",
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
