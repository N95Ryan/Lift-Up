import {
  Box,
  HStack,
  VStack,
  Text,
  Image,
  ScrollView,
  Center,
} from "native-base";
import Header from "../../components/Header";
import DailyTip from "../../components/DailyTip";

export default function TabOneScreen() {
  return (
    <Box flex={1} safeArea>
      <ScrollView>
        {/* Header with Greeting */}
        <Header userName={"User"} />

        {/* Daily Tip */}
        <DailyTip />

        {/* Content */}
        <VStack space={4} p={4}>
          {/* Daily Programs */}
          <VStack space={4}>
            <Text fontSize="xl" fontWeight="bold">
              Daily Programs
            </Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <HStack space={3}>
                <Center bg="primary.500" px={4} py={2} rounded="full">
                  <Text>All</Text>
                </Center>
                <Center bg="gray.800" px={4} py={2} rounded="full">
                  <Text>Beginner</Text>
                </Center>
                <Center bg="gray.800" px={4} py={2} rounded="full">
                  <Text>Intermediate</Text>
                </Center>
                <Center bg="gray.800" px={4} py={2} rounded="full">
                  <Text>Advanced</Text>
                </Center>
              </HStack>
            </ScrollView>

            {/* Program Cards */}
            <VStack space={4}>
              <Box bg="gray.800" rounded="xl" overflow="hidden">
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
                    Chest Program
                  </Text>
                  <Text opacity={0.7} mt={1}>
                    45 minutes · Intermediate
                  </Text>
                </Box>
              </Box>

              <Box bg="gray.800" rounded="xl" overflow="hidden">
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
                    Arms Program
                  </Text>
                  <Text opacity={0.7} mt={1}>
                    30 minutes · Beginner
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
