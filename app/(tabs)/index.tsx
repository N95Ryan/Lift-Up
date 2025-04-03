import {
  Box,
  HStack,
  VStack,
  Text,
  Image,
  ScrollView,
  Input,
  Icon,
  Pressable,
  Center,
} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

export default function TabOneScreen() {
  return (
    <Box flex={1} bg="white" safeArea>
      <ScrollView>
        <VStack space={4} p={4}>
          {/* Header */}
          <HStack justifyContent="space-between" alignItems="center">
            <HStack space={2} alignItems="center">
              <Image
                source={{
                  uri: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop",
                }}
                alt="Profile"
                size="sm"
                rounded="full"
              />
              <Text fontSize="lg" fontWeight="bold">
                Ryan
              </Text>
            </HStack>
          </HStack>

          {/* Search Bar */}
          <Input
            placeholder="Search"
            variant="filled"
            width="100%"
            borderRadius="10"
            py="3"
            px="2"
            InputLeftElement={
              <Icon
                m="2"
                ml="3"
                size="6"
                color="gray.400"
                as={<MaterialIcons name="search" />}
              />
            }
          />

          {/* Main Banner */}
          <Box
            bg={{
              linearGradient: {
                colors: ["orange.400", "orange.600"],
                start: [0, 0],
                end: [1, 0],
              },
            }}
            p={4}
            rounded="xl"
          >
            <VStack space={2}>
              <Text color="white" fontSize="xl" fontWeight="bold">
                Commencez votre entraînement
              </Text>
              <Text color="white" opacity={0.8}>
                Découvrez nos programmes personnalisés
              </Text>
              <Pressable
                bg="white"
                rounded="lg"
                px={4}
                py={2}
                alignSelf="flex-start"
                mt={2}
              >
                <Text color="orange.500" fontWeight="bold">
                  Commencer
                </Text>
              </Pressable>
            </VStack>
          </Box>

          {/* Daily Programs */}
          <VStack space={4}>
            <Text fontSize="xl" fontWeight="bold">
              Programmes du jour
            </Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <HStack space={3}>
                <Center bg="orange.100" px={4} py={2} rounded="full">
                  <Text color="orange.500">Tous</Text>
                </Center>
                <Center bg="gray.100" px={4} py={2} rounded="full">
                  <Text color="gray.500">Débutant</Text>
                </Center>
                <Center bg="gray.100" px={4} py={2} rounded="full">
                  <Text color="gray.500">Intermédiaire</Text>
                </Center>
                <Center bg="gray.100" px={4} py={2} rounded="full">
                  <Text color="gray.500">Avancé</Text>
                </Center>
              </HStack>
            </ScrollView>

            {/* Program Cards */}
            <VStack space={4}>
              <Box bg="white" shadow={2} rounded="xl" overflow="hidden">
                <Image
                  source={{
                    uri: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop",
                  }}
                  alt="Chest Workout"
                  height={150}
                  width="100%"
                />
                <Box p={4}>
                  <Text fontSize="lg" fontWeight="bold">
                    Programme Pectoraux
                  </Text>
                  <Text color="gray.500" mt={1}>
                    45 minutes · Intermédiaire
                  </Text>
                </Box>
              </Box>

              <Box bg="white" shadow={2} rounded="xl" overflow="hidden">
                <Image
                  source={{
                    uri: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070&auto=format&fit=crop",
                  }}
                  alt="Arms Workout"
                  height={150}
                  width="100%"
                />
                <Box p={4}>
                  <Text fontSize="lg" fontWeight="bold">
                    Programme Bras
                  </Text>
                  <Text color="gray.500" mt={1}>
                    30 minutes · Débutant
                  </Text>
                </Box>
              </Box>
            </VStack>
          </VStack>
        </VStack>
      </ScrollView>
    </Box>
  );
}
