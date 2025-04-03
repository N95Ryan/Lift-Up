import { Box, HStack, Text, Image, VStack, Icon } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { View } from "react-native";

export default function DailyQuote() {
  return (
    <Box mx={4} mb={4}>
      <Box rounded="xl" overflow="hidden" height={120} position="relative">
        {/* Image layer */}
        <View style={{ position: "absolute", width: "100%", height: "100%" }}>
          <Image
            source={{
              uri: "https://www.docteur-fitness.com/wp-content/uploads/2023/09/ronnie-coleman-entrainement-bodybuilding-squat.jpg",
            }}
            alt="Ronnie Coleman"
            style={{
              width: "100%",
              height: "100%",
              opacity: 0.7,
            }}
          />
        </View>

        {/* Fade layer */}
        <View style={{ position: "absolute", width: "100%", height: "100%" }}>
          <LinearGradient
            colors={["#9E0031", "#9E0031", "transparent"]}
            locations={[0, 0.3, 1]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </View>

        {/* Text layer */}
        <View
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            padding: 16,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              fontSize="xl"
              color="white"
              fontWeight="semibold"
              textAlign="center"
            >
              "Light weight, baby !"
            </Text>
            <Text
              fontSize="sm"
              color="white"
              fontWeight="thin"
              textAlign="center"
            >
              Ronnie Coleman
            </Text>
          </View>
        </View>
      </Box>
    </Box>
  );
}
