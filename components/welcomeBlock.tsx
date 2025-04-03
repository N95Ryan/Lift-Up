import React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "@/components/Themed";
import { StyleSheet, Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function WelcomeBlock() {
  const router = useRouter();

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

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/auth")}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
