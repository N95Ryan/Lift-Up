import { SafeAreaView, ScrollView, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import {
  Box,
  Text,
  Button,
  ButtonText,
  Image,
  HStack,
  Icon,
} from "@gluestack-ui/themed";
import { ArrowRightIcon } from "@gluestack-ui/themed";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar"; // Assurez-vous que le chemin est correct

export default function HomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#1F2937" }}>
      <Header userName="User" />
      <ScrollView
        contentContainerStyle={{ paddingBottom: 100 }} // Espace pour la navbar
        style={{ flex: 1 }}
      >
        {/* Section principale avec image et texte */}
        <Box mx="$4" mt="$4" rounded="$xl" overflow="hidden">
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
            }}
            alt="Workout Banner"
            w="$full"
            h={48}
          />
          <Box position="absolute" inset={0} bg="$black" opacity={0.5} p="$4">
            <Text color="$white" fontSize="$2xl" fontWeight="$bold">
              STRONGER EVERY REP
            </Text>
            <Text color="$gray300" fontSize="$sm" mt="$1">
              Build muscle and grow.
            </Text>
            <Button
              size="md"
              variant="solid"
              bg="$primary500"
              mt="$4"
              onPress={() => router.push("/(tabs)/workout")}
            >
              <ButtonText>Start Workout</ButtonText>
              <Icon as={ArrowRightIcon} ml="$2" />
            </Button>
          </Box>
        </Box>

        {/* Daily Program */}
        <Box mx="$4" mt="$6">
          <HStack justifyContent="space-between" alignItems="center" mb="$2">
            <Text color="$white" fontSize="$lg" fontWeight="$bold">
              Daily Program
            </Text>
            <Button
              variant="link"
              onPress={() => router.push("/(tabs)/programs")}
            >
              <ButtonText color="$orange500">See All</ButtonText>
            </Button>
          </HStack>
          <HStack space="md">
            <Button
              variant="outline"
              size="sm"
              borderColor="$orange500"
              onPress={() => {}}
            >
              <ButtonText color="$orange500">All Type</ButtonText>
            </Button>
            <Button variant="outline" size="sm" onPress={() => {}}>
              <ButtonText color="$gray400">Chest</ButtonText>
            </Button>
            <Button variant="outline" size="sm" onPress={() => {}}>
              <ButtonText color="$gray400">Back</ButtonText>
            </Button>
            <Button variant="outline" size="sm" onPress={() => {}}>
              <ButtonText color="$gray400">Arms</ButtonText>
            </Button>
          </HStack>
        </Box>

        {/* Cartes de programmes */}
        <Box mx="$4" mt="$4">
          <HStack space="md">
            <TouchableOpacity
              style={{ flex: 1 }}
              onPress={() => router.push("/(tabs)/program/chest")}
            >
              <Box bg="$gray800" rounded="$xl" overflow="hidden">
                <Image
                  source={{
                    uri: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
                  }}
                  alt="Chest Program"
                  w="$full"
                  h={24}
                />
                <Box p="$3">
                  <Text color="$white" fontWeight="$semibold">
                    Chest Program
                  </Text>
                  <Text color="$gray400" fontSize="$sm">
                    3 x 15 reps
                  </Text>
                </Box>
              </Box>
            </TouchableOpacity>

            <TouchableOpacity
              style={{ flex: 1 }}
              onPress={() => router.push("/(tabs)/program/arms")}
            >
              <Box bg="$gray800" rounded="$xl" overflow="hidden">
                <Image
                  source={{
                    uri: "https://images.unsplash.com/photo-1605296866985-34b1741a3e3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
                  }}
                  alt="Arms Program"
                  w="$full"
                  h={24}
                />
                <Box p="$3">
                  <Text color="$white" fontWeight="$semibold">
                    Arms Program
                  </Text>
                  <Text color="$gray400" fontSize="$sm">
                    3 x 12 reps
                  </Text>
                </Box>
              </Box>
            </TouchableOpacity>
          </HStack>
        </Box>

        {/* Conseil du jour */}
        <Box mx="$4" mt="$6" bg="$yellow400" rounded="$xl" p="$4">
          <Text color="$gray900" fontSize="$lg" fontWeight="$bold">
            💡 Conseil du jour
          </Text>
          <Text color="$gray700" mt="$1">
            L'échauffement est essentiel pour éviter les blessures. Pense à bien
            préparer tes muscles !
          </Text>
        </Box>

        {/* Objectifs du jour */}
        <Box mx="$4" mt="$6" bg="$gray800" rounded="$xl" p="$4">
          <Text color="$white" fontSize="$lg" fontWeight="$bold">
            🎯 Objectifs du jour
          </Text>
          <Text color="$gray300" mt="$1">
            ✅ Boire 2L d’eau
          </Text>
          <Text color="$gray300" mt="$1">
            ✅ Effectuer 3 séries de squats
          </Text>
        </Box>
      </ScrollView>

      {/* Navbar en bas */}
      <Box position="absolute" bottom={0} left={0} right={0}>
        <Navbar activeTab="home" />
      </Box>
    </SafeAreaView>
  );
}
