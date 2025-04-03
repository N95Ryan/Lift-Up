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
    <Box flex={1} safeArea>
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
            <Text opacity={0.7}>Intermediate Level</Text>
          </VStack>
        </HStack>

        <Divider bg="gray.800" />

        {/* Profile Menu */}
        <VStack space={4}>
          <Pressable
            onPress={() => {}}
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            py={2}
            _pressed={{ opacity: 0.7 }}
          >
            <HStack space={3} alignItems="center">
              <Icon
                as={MaterialIcons}
                name="person-outline"
                size="md"
                color="text.50"
              />
              <Text fontSize="md">Personal Information</Text>
            </HStack>
            <Icon
              as={MaterialIcons}
              name="chevron-right"
              size="sm"
              color="text.50"
              opacity={0.7}
            />
          </Pressable>

          <Pressable
            onPress={() => {}}
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            py={2}
            _pressed={{ opacity: 0.7 }}
          >
            <HStack space={3} alignItems="center">
              <Icon
                as={MaterialIcons}
                name="notifications-none"
                size="md"
                color="text.50"
              />
              <Text fontSize="md">Notifications</Text>
            </HStack>
            <Icon
              as={MaterialIcons}
              name="chevron-right"
              size="sm"
              color="text.50"
              opacity={0.7}
            />
          </Pressable>

          <Pressable
            onPress={() => {}}
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            py={2}
            _pressed={{ opacity: 0.7 }}
          >
            <HStack space={3} alignItems="center">
              <Icon
                as={MaterialIcons}
                name="settings"
                size="md"
                color="text.50"
              />
              <Text fontSize="md">Settings</Text>
            </HStack>
            <Icon
              as={MaterialIcons}
              name="chevron-right"
              size="sm"
              color="text.50"
              opacity={0.7}
            />
          </Pressable>

          <Pressable
            onPress={() => {}}
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            py={2}
            _pressed={{ opacity: 0.7 }}
          >
            <HStack space={3} alignItems="center">
              <Icon
                as={MaterialIcons}
                name="help-outline"
                size="md"
                color="text.50"
              />
              <Text fontSize="md">Help</Text>
            </HStack>
            <Icon
              as={MaterialIcons}
              name="chevron-right"
              size="sm"
              color="text.50"
              opacity={0.7}
            />
          </Pressable>

          <Pressable
            onPress={() => {}}
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            py={2}
            _pressed={{ opacity: 0.7 }}
          >
            <HStack space={3} alignItems="center">
              <Icon
                as={MaterialIcons}
                name="logout"
                size="md"
                color="primary.500"
              />
              <Text fontSize="md" color="primary.500">
                Logout
              </Text>
            </HStack>
          </Pressable>
        </VStack>
      </VStack>
    </Box>
  );
}
