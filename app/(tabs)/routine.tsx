import { useState } from "react";
import {
  StyleSheet,
  View,
  Pressable,
  ScrollView,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { Box, Text, VStack, HStack, Icon, Divider } from "native-base";
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
      color: "#FEE2E2",
      textColor: "#9E0031",
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

  const handleViewExistingRoutines = () => {
    // Navigate to existing routines screen
    router.push("/existing-routines" as any);
  };

  const handleDeselect = () => {
    setSelectedType(null);
  };

  return (
    <TouchableWithoutFeedback onPress={handleDeselect}>
      <Box flex={1} bg="black" safeArea>
        {/* Header */}
        <HStack
          alignItems="center"
          justifyContent="center"
          position="relative"
          p={4}
          borderBottomWidth={1}
          borderBottomColor="gray.800"
        >
          <Pressable
            style={{ position: "absolute", left: 16 }}
            onPress={() => {
              Keyboard.dismiss();
              router.push("/");
            }}
          >
            <HStack alignItems="center" space={1}>
              <Icon
                as={MaterialIcons}
                name="arrow-back"
                size="md"
                color="white"
              />
              <Text color="white" fontSize="md">
                Home
              </Text>
            </HStack>
          </Pressable>
          <Text
            fontSize="2xl"
            fontWeight="bold"
            textAlign="center"
            marginTop={8}
          >
            Routines
          </Text>
        </HStack>

        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <VStack space={4} p={4} flex={1} justifyContent="center">
            {/* Existing Routines Section */}
            <Box mb={6}>
              <Text fontSize="md" color="gray.300" mb={2}>
                Your existing routines
              </Text>
              <Pressable
                onPress={handleViewExistingRoutines}
                style={({ pressed }) => [{ opacity: pressed ? 0.7 : 1 }]}
              >
                <Box rounded="xl" overflow="hidden" height={90}>
                  <View style={styles.container}>
                    <View style={styles.backgroundLayer} />
                    <View style={styles.contentContainer}>
                      <View
                        style={[
                          styles.iconContainer,
                          { backgroundColor: "#DCFCE7" },
                        ]}
                      >
                        <Icon
                          as={MaterialIcons}
                          name="list"
                          size="md"
                          color="#15803D"
                        />
                      </View>
                      <View style={styles.textContainer}>
                        <Text style={styles.buttonTitle}>My Routines</Text>
                        <Text style={styles.buttonDescription}>
                          View your existing routines
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
            </Box>

            <Divider my={2} />

            {/* New Routines Section */}
            <Box>
              <Text fontSize="md" color="gray.300" mb={2}>
                Create a new routine
              </Text>
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
            </Box>

            {/* Create Button */}
            <TouchableOpacity
              style={[
                styles.createButton,
                { backgroundColor: selectedType ? "#9E0031" : "#666666" },
              ]}
              disabled={!selectedType}
              onPress={handleCreateRoutine}
              activeOpacity={0.7}
            >
              <Text color="white" fontSize="md" fontWeight="bold">
                Create my routine
              </Text>
            </TouchableOpacity>
          </VStack>
        </ScrollView>
      </Box>
    </TouchableWithoutFeedback>
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
  createButton: {
    padding: 15,
    borderRadius: 10,
    marginTop: 24,
    marginBottom: 16,
    alignItems: "center",
    alignSelf: "center",
    minWidth: 120,
  },
  existingRoutineButton: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 16,
    marginTop: 8,
  },
});
