import { Box, Text, Center } from "native-base";

export default function StatsScreen() {
  return (
    <Box flex={1} bg="white" safeArea>
      <Center flex={1}>
        <Text fontSize="xl" fontWeight="bold">
          Statistiques
        </Text>
        <Text color="gray.500" mt={2}>
          Bientôt disponible
        </Text>
      </Center>
    </Box>
  );
}
