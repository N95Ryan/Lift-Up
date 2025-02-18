import { StyleSheet } from "react-native";
import { Text, View } from "@/components/Themed";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lift Up !</Text>
      <Text style={styles.subtitle}>Convert you weight</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#EA5B42",
  },

  title: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#fff",
  },

  subtitle: {
    fontSize: 21,
    fontWeight: "bold",
    color: "#fff",
    marginVertical: 10,
  },
});
