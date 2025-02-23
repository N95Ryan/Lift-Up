import { StyleSheet } from "react-native";
import { View } from "@/components/Themed";
import { LinearGradient } from "expo-linear-gradient";
import WelcomeBlock from "@/components/welcomeBlock";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <WelcomeBlock />
      <LinearGradient
        colors={["rgba(234,91,66,0.8)", "rgba(218,37,125,0.8)"]}
        style={styles.overlay}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
  },

  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
});
