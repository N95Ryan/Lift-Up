import { Box, VStack, Text } from "native-base";

interface HeaderProps {
  userName: string;
}

export default function Header({ userName }: HeaderProps) {
  const getGreetingMessage = () => {
    const hour = new Date().getHours();

    if (hour >= 5 && hour < 10) {
      return "Wake up the strength within you ! ☀️";
    } else if (hour >= 10 && hour < 17) {
      return "Give it your all, go for it ! 💪";
    } else if (hour >= 17 && hour < 21) {
      return "Finish strong ! 🔥";
    } else {
      return "Real bosses train at night ! 🌙";
    }
  };

  return (
    <Box mx={4} mt={4}>
      <Box w="full" bg="primary" py={6} rounded="xl">
        <VStack space={2} alignItems="center">
          <Text fontSize="2xl" fontWeight="bold">
            Welcome {userName}
          </Text>
          <Text fontSize="md" opacity={0.9}>
            {getGreetingMessage()}
          </Text>
        </VStack>
      </Box>
    </Box>
  );
}
