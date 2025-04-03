import { Box, HStack, Text, Icon } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

export default function DailyTip() {
  return (
    <Box mx={4} mb={4}>
      <Box>
        <HStack
          space={3}
          alignItems="center"
          bg="#fff"
          p={4}
          mx={2}
          rounded="xl"
        >
          <Icon as={MaterialIcons} name="lightbulb" size="lg" color="#FCE131" />
          <Text fontSize="md" flex={1} color="black">
            Drinking water before your workout helps prevent dehydration and
            improves performance.
          </Text>
        </HStack>
      </Box>
    </Box>
  );
}
