import React from "react";
import { Box, Text, HStack, Icon, Pressable } from "native-base";
import { useRouter } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";

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
      bg="white"
      py={2.5}
      pb={6}
      borderTopLeftRadius="xl"
      borderTopRightRadius="xl"
      shadow={5}
    >
      <HStack justifyContent="space-around" alignItems="center">
        <Pressable onPress={() => handleTabPress("home")}>
          <Box alignItems="center">
            <Icon
              as={MaterialIcons}
              name={activeTab === "home" ? "home" : "home-outline"}
              size="md"
              color={activeTab === "home" ? "orange.500" : "gray.600"}
            />
            <Text
              fontSize="xs"
              color={activeTab === "home" ? "orange.500" : "gray.600"}
              fontWeight={activeTab === "home" ? "bold" : "normal"}
              mt={1}
            >
              Accueil
            </Text>
          </Box>
        </Pressable>

        <Pressable onPress={() => handleTabPress("converter")}>
          <Box alignItems="center">
            <Icon
              as={MaterialIcons}
              name={activeTab === "converter" ? "calculate" : "calculate"}
              size="md"
              color={activeTab === "converter" ? "orange.500" : "gray.600"}
            />
            <Text
              fontSize="xs"
              color={activeTab === "converter" ? "orange.500" : "gray.600"}
              fontWeight={activeTab === "converter" ? "bold" : "normal"}
              mt={1}
            >
              Convertisseur
            </Text>
          </Box>
        </Pressable>

        <Pressable onPress={() => handleTabPress("profile")}>
          <Box alignItems="center">
            <Icon
              as={MaterialIcons}
              name={activeTab === "profile" ? "person" : "person-outline"}
              size="md"
              color={activeTab === "profile" ? "orange.500" : "gray.600"}
            />
            <Text
              fontSize="xs"
              color={activeTab === "profile" ? "orange.500" : "gray.600"}
              fontWeight={activeTab === "profile" ? "bold" : "normal"}
              mt={1}
            >
              Profil
            </Text>
          </Box>
        </Pressable>
      </HStack>
    </Box>
  );
}
