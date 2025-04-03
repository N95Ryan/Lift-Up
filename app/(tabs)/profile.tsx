import {
  Box,
  VStack,
  HStack,
  Text,
  Image,
  Divider,
  Icon,
  Pressable,
} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

export default function ProfileScreen() {
  return (
    <Box flex={1} bg="white" safeArea>
      <VStack space={6} p={4}>
        {/* Profile Header */}
        <HStack space={4} alignItems="center">
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop",
            }}
            alt="Profile"
            size="xl"
            rounded="full"
          />
          <VStack>
            <Text fontSize="xl" fontWeight="bold">
              Ryan
            </Text>
            <Text color="gray.500">Niveau Intermédiaire</Text>
          </VStack>
        </HStack>

        <Divider />

        {/* Profile Menu */}
        <VStack space={4}>
          <Pressable
            onPress={() => {}}
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            py={2}
          >
            <HStack space={3} alignItems="center">
              <Icon
                as={MaterialIcons}
                name="person-outline"
                size="md"
                color="gray.600"
              />
              <Text fontSize="md">Informations personnelles</Text>
            </HStack>
            <Icon
              as={MaterialIcons}
              name="chevron-right"
              size="sm"
              color="gray.400"
            />
          </Pressable>

          <Pressable
            onPress={() => {}}
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            py={2}
          >
            <HStack space={3} alignItems="center">
              <Icon
                as={MaterialIcons}
                name="notifications-none"
                size="md"
                color="gray.600"
              />
              <Text fontSize="md">Notifications</Text>
            </HStack>
            <Icon
              as={MaterialIcons}
              name="chevron-right"
              size="sm"
              color="gray.400"
            />
          </Pressable>

          <Pressable
            onPress={() => {}}
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            py={2}
          >
            <HStack space={3} alignItems="center">
              <Icon
                as={MaterialIcons}
                name="settings"
                size="md"
                color="gray.600"
              />
              <Text fontSize="md">Paramètres</Text>
            </HStack>
            <Icon
              as={MaterialIcons}
              name="chevron-right"
              size="sm"
              color="gray.400"
            />
          </Pressable>

          <Pressable
            onPress={() => {}}
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            py={2}
          >
            <HStack space={3} alignItems="center">
              <Icon
                as={MaterialIcons}
                name="help-outline"
                size="md"
                color="gray.600"
              />
              <Text fontSize="md">Aide</Text>
            </HStack>
            <Icon
              as={MaterialIcons}
              name="chevron-right"
              size="sm"
              color="gray.400"
            />
          </Pressable>

          <Pressable
            onPress={() => {}}
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            py={2}
          >
            <HStack space={3} alignItems="center">
              <Icon
                as={MaterialIcons}
                name="logout"
                size="md"
                color="red.500"
              />
              <Text fontSize="md" color="red.500">
                Déconnexion
              </Text>
            </HStack>
          </Pressable>
        </VStack>
      </VStack>
    </Box>
  );
}
