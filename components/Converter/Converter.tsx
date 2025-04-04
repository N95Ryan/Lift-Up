import { useState } from "react";
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import { Text, VStack, Box } from "native-base";

const WeightConverter = () => {
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
    <Box flex={1} justifyContent="center" alignItems="center">
      <VStack space={6} width="100%" maxW="320px" alignItems="center">
        <VStack space={2} width="100%">
          <Text fontSize="md" fontWeight="medium">
            Kilograms (kg)
          </Text>
          <TextInput
            style={styles.input}
            value={kg}
            onChangeText={(text) => {
              setKg(text);
              convertToLbs(text);
            }}
            keyboardType="numeric"
            placeholder="Enter weight in kg"
            placeholderTextColor="#666"
            returnKeyType="done"
            onSubmitEditing={Keyboard.dismiss}
          />
        </VStack>

        <VStack space={2} width="100%">
          <Text fontSize="md" fontWeight="medium">
            Pounds (lbs)
          </Text>
          <TextInput
            style={styles.input}
            value={lbs}
            onChangeText={(text) => {
              setLbs(text);
              convertToKg(text);
            }}
            keyboardType="numeric"
            placeholder="Enter weight in lbs"
            placeholderTextColor="#666"
            returnKeyType="done"
            onSubmitEditing={Keyboard.dismiss}
          />
        </VStack>

        <TouchableOpacity
          style={styles.resetButton}
          onPress={() => {
            Keyboard.dismiss();
            setKg("");
            setLbs("");
          }}
        >
          <Text color="white" fontSize="md">
            Clear
          </Text>
        </TouchableOpacity>
      </VStack>
    </Box>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 15,
    fontSize: 16,
    color: "#333",
    width: "100%",
  },
  resetButton: {
    backgroundColor: "#9E0031",
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    alignItems: "center",
    minWidth: 120,
    width: "40%",
  },
});

export default WeightConverter;
