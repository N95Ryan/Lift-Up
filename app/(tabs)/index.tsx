import { StyleSheet } from "react-native";
import { View } from "@/components/Themed";
import WelcomeBlock from "@/components/welcomeBlock";

export default function HomeScreen() {
  return (
    <>
      <View style={styles.container}>
        <WelcomeBlock />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#EA5B42",
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
  },
});
