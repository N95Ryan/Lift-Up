import React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "@/components/Themed";
import { StyleSheet, Image, TouchableOpacity } from "react-native";

export default function WelcomeBlock() {
  return (
    <>
      <StatusBar style="light" hidden={true} />

      <View style={styles.container}>
        <Image
          source={require("../assets/images/logo.png")}
          style={styles.logo}
        />
        <Text style={styles.title}>Lift Up</Text>
        <Text style={styles.subtitle}>Elevate your workouts !</Text>

        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
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
    fontSize: 50,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginBottom: 20,
  },

  subtitle: {
    fontSize: 20,
    color: "#fff",
    textAlign: "center",
  },

  logo: {
    width: 100,
    height: 100,
  },

  button: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    width: 250,
  },

  buttonText: {
    color: "#28262C",
    fontSize: 18,
    fontWeight: "bold",
    opacity: 0.8,
  },
});
