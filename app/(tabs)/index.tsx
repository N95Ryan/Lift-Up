import { SafeAreaView, ScrollView, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import {
  Box,
  Text,
  Button,
  ButtonText,
  Image,
  HStack,
  VStack,
  Icon,
} from "@gluestack-ui/themed";
import { ArrowRightIcon } from "@gluestack-ui/themed"; // Icône pour le bouton
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-gray-900">
      <ScrollView className="flex-1">
        <Header userName="User" />

        {/* Section principale avec image et texte */}
        <Box className="relative mx-4 mt-4 rounded-xl overflow-hidden">
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
            }}
            alt="Workout Banner"
            className="w-full h-48"
          />
          <Box className="absolute inset-0 bg-black/50 p-4">
            <Text className="text-2xl font-bold text-white">
              STRONGER EVERY REP
            </Text>
            <Text className="text-sm text-gray-300 mt-1">
              Build muscle and grow.
            </Text>
            <Button
              size="md"
              variant="solid"
              action="primary"
              className="mt-4"
              onPress={() => router.push("/workout")} // Redirige vers une page d'entraînement
            >
              <ButtonText>Start Workout</ButtonText>
              <Icon as={ArrowRightIcon} className="ml-2" />
            </Button>
          </Box>
        </Box>

        {/* Daily Program */}
        <Box className="mx-4 mt-6">
          <HStack className="justify-between items-center mb-2">
            <Text className="text-lg font-bold text-white">Daily Program</Text>
            <Button variant="link" onPress={() => router.push("/programs")}>
              <ButtonText className="text-orange-500">See All</ButtonText>
            </Button>
          </HStack>
          <HStack className="space-x-4">
            <Button
              variant="outline"
              size="sm"
              action="secondary"
              className="border-orange-500"
            >
              <ButtonText className="text-orange-500">All Type</ButtonText>
            </Button>
            <Button variant="outline" size="sm" action="secondary">
              <ButtonText className="text-gray-400">Chest</ButtonText>
            </Button>
            <Button variant="outline" size="sm" action="secondary">
              <ButtonText className="text-gray-400">Back</ButtonText>
            </Button>
            <Button variant="outline" size="sm" action="secondary">
              <ButtonText className="text-gray-400">Arms</ButtonText>
            </Button>
          </HStack>
        </Box>

        {/* Cartes de programmes */}
        <Box className="mx-4 mt-4">
          <HStack className="space-x-4">
            {/* Programme 1 */}
            <TouchableOpacity
              onPress={() => router.push("/program/chest")}
              className="flex-1"
            >
              <Box className="bg-gray-800 rounded-xl overflow-hidden">
                <Image
                  source={{
                    uri: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
                  }}
                  alt="Chest Program"
                  className="w-full h-24"
                />
                <Box className="p-3">
                  <Text className="text-white font-semibold">
                    Chest Program
                  </Text>
                  <Text className="text-gray-400 text-sm">3 x 15 reps</Text>
                </Box>
              </Box>
            </TouchableOpacity>

            {/* Programme 2 */}
            <TouchableOpacity
              onPress={() => router.push("/program/arms")}
              className="flex-1"
            >
              <Box className="bg-gray-800 rounded-xl overflow-hidden">
                <Image
                  source={{
                    uri: "https://images.unsplash.com/photo-1605296866985-34b1741a3e3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
                  }}
                  alt="Arms Program"
                  className="w-full h-24"
                />
                <Box className="p-3">
                  <Text className="text-white font-semibold">Arms Program</Text>
                  <Text className="text-gray-400 text-sm">3 x 12 reps</Text>
                </Box>
              </Box>
            </TouchableOpacity>
          </HStack>
        </Box>

        {/* Conseil du jour */}
        <Box className="mx-4 mt-6 bg-yellow-400 rounded-xl p-4">
          <Text className="text-lg font-bold text-gray-900">
            💡 Conseil du jour
          </Text>
          <Text className="text-gray-700 mt-1">
            L'échauffement est essentiel pour éviter les blessures. Pense à bien
            préparer tes muscles !
          </Text>
        </Box>

        {/* Objectifs du jour */}
        <Box className="mx-4 mt-6 bg-gray-800 rounded-xl p-4">
          <Text className="text-lg font-bold text-white">
            🎯 Objectifs du jour
          </Text>
          <Text className="text-gray-300 mt-1">✅ Boire 2L d’eau</Text>
          <Text className="text-gray-300 mt-1">
            ✅ Effectuer 3 séries de squats
          </Text>
        </Box>
      </ScrollView>
      <Navbar activeTab="home" />
    </SafeAreaView>
  );
}
