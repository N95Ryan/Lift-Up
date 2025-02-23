import { StyleSheet, TouchableOpacity } from "react-native";
import { Text, View } from "@/components/Themed";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

export default function TabOneScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={["#ea5b42", "#da257d"]}
        style={styles.background}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "orange",
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
});
