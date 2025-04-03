import { Box, Text, Center } from "native-base";

export default function BookmarksScreen() {
  return (
    <Box flex={1} bg="white" safeArea>
      <Center flex={1}>
        <Text fontSize="xl" fontWeight="bold">
          Bookmarks
        </Text>
        <Text opacity={0.7} mt={2}>
          Coming soon
        </Text>
      </Center>
    </Box>
  );
}
