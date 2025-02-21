import { StyleSheet, TouchableOpacity } from "react-native";
import { Text, View } from "@/components/Themed";
import { useRouter } from "expo-router"; // Pour la navigation
import { Ionicons } from "@expo/vector-icons"; // Icône pour le style

export default function TabOneScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Ionicons name="barbell" size={80} color="#fff" style={styles.icon} />

      <Text style={styles.title}>Lift Up !</Text>
      <Text style={styles.subtitle}>
        Your best assistant in your workout session
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/logIn")}
      >
        <Text style={styles.buttonText}>Log in</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/signUp")}
      >
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#EA5B42",
    paddingHorizontal: 20,
  },

  icon: {
    marginBottom: 20,
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

  button: {
    backgroundColor: "#fff",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 30,
    marginTop: 20,
  },

  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#EA5B42",
    textAlign: "center",
  },
});
