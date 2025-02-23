import { Text, View } from "@/components/Themed";
import { StyleSheet } from "react-native";
import { Image } from "react-native";

export default function WelcomeBlock() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/logo.png")}
        style={styles.logo}
      />
      <Text style={styles.title}>Lift Up</Text>
      <Text style={styles.subtitle}>Elevate your workouts !</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
    backgroundColor: "transparent",
  },

  title: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },

  subtitle: {
    fontSize: 20,
    color: "#fff",
    textAlign: "center",
    marginBottom: 30,
  },

  logo: {
    width: 200,
    height: 200,
  },
});
