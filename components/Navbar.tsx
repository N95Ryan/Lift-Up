import React from "react";
import { TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { Box, Text, HStack } from "@gluestack-ui/themed";
import { Ionicons } from "@expo/vector-icons";

interface NavbarProps {
  activeTab: string;
}

export default function Navbar({ activeTab }: NavbarProps) {
  const router = useRouter();

  const handleTabPress = (tab: string) => {
    switch (tab) {
      case "home":
        router.push("/(tabs)");
        break;
      case "converter":
        router.push("/(tabs)/converter");
        break;
      case "profile":
        router.push("/(tabs)/profile");
        break;
    }
  };

  return (
    <Box
      bg="$white"
      py="$2.5"
      pb="$6"
      borderTopLeftRadius="$xl"
      borderTopRightRadius="$xl"
      shadowColor="$black"
      shadowOffset={{ width: 0, height: -2 }}
      shadowOpacity={0.1}
      shadowRadius={3}
      elevation={5}
    >
      <HStack justifyContent="space-around" alignItems="center">
        <TouchableOpacity onPress={() => handleTabPress("home")}>
          <Box alignItems="center">
            <Ionicons
              name={activeTab === "home" ? "home" : "home-outline"}
              size={24}
              color={activeTab === "home" ? "#EA5B42" : "#666"}
            />
            <Text
              fontSize="$xs"
              color={activeTab === "home" ? "$orange500" : "$gray600"}
              fontWeight={activeTab === "home" ? "$bold" : "$normal"}
              mt="$1"
            >
              Accueil
            </Text>
          </Box>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleTabPress("converter")}>
          <Box alignItems="center">
            <Ionicons
              name={
                activeTab === "converter" ? "calculator" : "calculator-outline"
              }
              size={24}
              color={activeTab === "converter" ? "#EA5B42" : "#666"}
            />
            <Text
              fontSize="$xs"
              color={activeTab === "converter" ? "$orange500" : "$gray600"}
              fontWeight={activeTab === "converter" ? "$bold" : "$normal"}
              mt="$1"
            >
              Conversion
            </Text>
          </Box>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleTabPress("profile")}>
          <Box alignItems="center">
            <Ionicons
              name={activeTab === "profile" ? "person" : "person-outline"}
              size={24}
              color={activeTab === "profile" ? "#EA5B42" : "#666"}
            />
            <Text
              fontSize="$xs"
              color={activeTab === "profile" ? "$orange500" : "$gray600"}
              fontWeight={activeTab === "profile" ? "$bold" : "$normal"}
              mt="$1"
            >
              Profil
            </Text>
          </Box>
        </TouchableOpacity>
      </HStack>
    </Box>
  );
}
