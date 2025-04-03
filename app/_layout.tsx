import { NativeBaseProvider } from "native-base";
import { Stack } from "expo-router";
import { theme } from "../theme";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <NativeBaseProvider theme={theme}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
      </NativeBaseProvider>
    </SafeAreaProvider>
  );
}
