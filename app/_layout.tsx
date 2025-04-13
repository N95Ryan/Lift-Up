import { NativeBaseProvider } from "native-base";
import { Stack } from "expo-router";
import { theme } from "../theme";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useState } from "react";
import { SplashScreen } from "../components/SplashScreen";

export default function RootLayout() {
  const [showSplash, setShowSplash] = useState(true);

  if (showSplash) {
    return <SplashScreen onFinish={() => setShowSplash(false)} />;
  }

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
