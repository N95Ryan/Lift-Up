import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Navbar from "@/components/Navbar";

export default function ConverterScreen() {
  const [kg, setKg] = useState("");
  const [lbs, setLbs] = useState("");

  const convertToLbs = (value: string) => {
    if (value === "") {
      setLbs("");
      return;
    }
    const kgValue = parseFloat(value);
    const lbsValue = (kgValue * 2.20462).toFixed(2);
    setLbs(lbsValue);
  };

  const convertToKg = (value: string) => {
    if (value === "") {
      setKg("");
      return;
    }
    const lbsValue = parseFloat(value);
    const kgValue = (lbsValue / 2.20462).toFixed(2);
    setKg(kgValue);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Convertisseur de poids</Text>
      </View>

      <View style={styles.converterContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Kilogrammes (kg)</Text>
          <TextInput
            style={styles.input}
            value={kg}
            onChangeText={(text) => {
              setKg(text);
              convertToLbs(text);
            }}
            keyboardType="numeric"
            placeholder="Entrez le poids en kg"
            placeholderTextColor="#666"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Livres (lbs)</Text>
          <TextInput
            style={styles.input}
            value={lbs}
            onChangeText={(text) => {
              setLbs(text);
              convertToKg(text);
            }}
            keyboardType="numeric"
            placeholder="Entrez le poids en lbs"
            placeholderTextColor="#666"
          />
        </View>

        <TouchableOpacity
          style={styles.resetButton}
          onPress={() => {
            setKg("");
            setLbs("");
          }}
        >
          <Ionicons name="refresh" size={24} color="white" />
          <Text style={styles.resetButtonText}>Réinitialiser</Text>
        </TouchableOpacity>
      </View>
      <Navbar activeTab="converter" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EA5B42",
  },
  header: {
    padding: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  converterContainer: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: "white",
    marginBottom: 8,
  },
  input: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 15,
    fontSize: 16,
    color: "#333",
  },
  resetButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  resetButtonText: {
    color: "white",
    fontSize: 16,
    marginLeft: 10,
  },
});
