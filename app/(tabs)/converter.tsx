import * as React from "react";
import { StyleSheet, TextInput, TouchableOpacity, Text } from "react-native";
import { View } from "@/components/Themed";

export default function ConverterScreen() {
  const [kg, setKg] = React.useState("");
  const [lbs, setLbs] = React.useState("");

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
    <View style={styles.container}>
      <Text style={styles.title}>Weight Converter</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Kilograms (kg)</Text>
        <TextInput
          style={styles.input}
          value={kg}
          onChangeText={(text) => {
            setKg(text);
            convertToLbs(text);
          }}
          keyboardType="numeric"
          placeholder="Enter kg"
          placeholderTextColor="#666"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Pounds (lbs)</Text>
        <TextInput
          style={styles.input}
          value={lbs}
          onChangeText={(text) => {
            setLbs(text);
            convertToKg(text);
          }}
          keyboardType="numeric"
          placeholder="Enter lbs"
          placeholderTextColor="#666"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#EA5B42",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginBottom: 30,
  },
  inputContainer: {
    width: "100%",
    marginBottom: 20,
  },
  label: {
    color: "white",
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "white",
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
  },
});
