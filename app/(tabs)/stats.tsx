import { Box, Text, Center, HStack, Pressable, Icon } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Keyboard } from "react-native";

export default function StatsScreen() {
  const router = useRouter();

  return (
    <Box flex={1} bg="white" safeArea>
      {/* Header */}
      <HStack
        alignItems="center"
        justifyContent="center"
        position="relative"
        p={4}
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
        <Text fontSize="2xl" fontWeight="bold" textAlign="center" marginTop={8}>
          Statistics
        </Text>
      </HStack>

      <Center flex={1}>
        <Text fontSize="xl" fontWeight="bold">
          Statistics
        </Text>
        <Text opacity={0.7} mt={2}>
          Screen under construction 🏗️
        </Text>
      </Center>
    </Box>
  );
}
