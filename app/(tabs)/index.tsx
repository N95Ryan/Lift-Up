import { Box, ScrollView } from "native-base";
import Header from "../../components/Homescreen/Header";
import DailyTip from "../../components/Homescreen/DailyTip";
import DailyQuote from "@/components/Homescreen/DailyQuote";
import Recommendation from "@/components/Homescreen/Recommendation";

export default function TabOneScreen() {
  return (
    <Box flex={1} safeArea>
      <ScrollView>
        {/* Header with Greeting */}
        <Header userName={"User"} />

        {/* Daily */}
        <DailyTip />
        <DailyQuote />

        {/* Recommendations */}
        <Recommendation />
      </ScrollView>
    </Box>
  );
}
