import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { Box, Text, VStack, HStack, Icon, Pressable } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function ConverterScreen() {
  const router = useRouter();
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
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Box flex={1} safeArea>
        <VStack space={4} p={4}>
          <HStack
            alignItems="center"
            justifyContent="center"
            position="relative"
          >
            <Pressable
              position="absolute"
              left={0}
              onPress={() => {
                Keyboard.dismiss();
                router.push("/");
              }}
              _pressed={{ opacity: 0.7 }}
            >
              <HStack alignItems="center" space={1}>
                <Icon
                  as={MaterialIcons}
                  name="arrow-back"
                  size="md"
                  color="white"
                />
                <Text color="white" fontSize="md">
                  Home
                </Text>
              </HStack>
            </Pressable>
            <Text
              fontSize="2xl"
              fontWeight="bold"
              textAlign="center"
              marginTop={8}
            >
              Weight Converter
            </Text>
          </HStack>

          <VStack space={6} mt={6}>
            <VStack space={2}>
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

            <VStack space={2}>
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
        </VStack>
      </Box>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 15,
    fontSize: 16,
    color: "#333",
  },
  resetButton: {
    backgroundColor: "#9E0031",
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    alignItems: "center",
    alignSelf: "center",
    minWidth: 120,
    width: "40%",
  },
  keyboardButton: {
    backgroundColor: "#222725",
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
    alignItems: "center",
  },
});
