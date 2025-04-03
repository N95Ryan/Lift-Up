import { Box, Text, Center } from "native-base";

export default function BookmarksScreen() {
  return (
    <Box flex={1} bg="white" safeArea>
      <Center flex={1}>
        <Text fontSize="xl" fontWeight="bold">
          Favoris
        </Text>
        <Text color="gray.500" mt={2}>
          Bientôt disponible
        </Text>
      </Center>
    </Box>
  );
}
