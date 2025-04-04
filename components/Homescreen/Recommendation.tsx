import { Box, Text, Image, VStack, HStack } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { StyleSheet, View, Pressable } from "react-native";

interface Exercise {
  id: string;
  name: string;
  duration: string;
  level: string;
  type: string;
  image: string;
}

const exercises: Exercise[] = [
  {
    id: "1",
    name: "Treadmill Walk",
    duration: "45 minute",
    level: "Beginner",
    type: "Cardio",
    image:
      "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "2",
    name: "Pull up",
    duration: "30 minute",
    level: "Medium",
    type: "Body",
    image:
      "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "3",
    name: "Chest press",
    duration: "15 minute",
    level: "Pro",
    type: "Gym",
    image:
      "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&q=80&w=800",
  },
];

export default function Recommendation() {
  return (
    <Box mx={4} mb={4}>
      {/* Header */}
      <View style={styles.header}>
        <Text fontSize="xl" fontWeight="bold" color="white">
          Recommendation
        </Text>
        <Pressable>
          <Text fontSize="sm" color="primary.500">
            See all
          </Text>
        </Pressable>
      </View>

      {/* Exercise Cards */}
      <VStack space={3}>
        {exercises.map((exercise) => (
          <Box key={exercise.id} rounded="xl" overflow="hidden" height={90}>
            {/* Container principal avec position relative */}
            <View style={styles.container}>
              {/* Couche de fond blanche */}
              <View style={styles.backgroundLayer} />

              {/* Contenu */}
              <View style={styles.contentContainer}>
                <Image
                  source={{ uri: exercise.image }}
                  alt={exercise.name}
                  style={styles.image}
                />
                <View style={styles.textContainer}>
                  <Text style={styles.exerciseName}>{exercise.name}</Text>
                  <View style={styles.detailsContainer}>
                    <MaterialIcons name="schedule" size={16} color="black" />
                    <Text style={styles.exerciseDetail}>
                      {exercise.duration}
                    </Text>
                    <Text style={styles.exerciseDetail}>•</Text>
                    <Text style={styles.exerciseDetail}>{exercise.level}</Text>
                  </View>
                </View>
                <View
                  style={[
                    styles.badge,
                    exercise.type === "Cardio"
                      ? styles.cardioBadge
                      : exercise.type === "Body"
                      ? styles.bodyBadge
                      : styles.gymBadge,
                  ]}
                >
                  <Text
                    style={[
                      styles.badgeText,
                      exercise.type === "Cardio"
                        ? styles.cardioText
                        : exercise.type === "Body"
                        ? styles.bodyText
                        : styles.gymText,
                    ]}
                  >
                    {exercise.type}
                  </Text>
                </View>
              </View>
            </View>
          </Box>
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
  image: {
    width: 65,
    height: 65,
    borderRadius: 8,
  },
  textContainer: {
    flex: 1,
    marginLeft: 12,
  },
  exerciseName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000000",
    marginBottom: 4,
  },
  detailsContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  exerciseDetail: {
    fontSize: 14,
    color: "#000000",
  },
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 50,
    marginLeft: 8,
  },
  cardioBadge: {
    backgroundColor: "#DBEAFE",
  },
  bodyBadge: {
    backgroundColor: "#DCFCE7",
  },
  gymBadge: {
    backgroundColor: "#FFEDD5",
  },
  badgeText: {
    fontSize: 12,
    fontWeight: "500",
  },
  cardioText: {
    color: "#1E40AF",
  },
  bodyText: {
    color: "#15803D",
  },
  gymText: {
    color: "#9A3412",
  },
});
