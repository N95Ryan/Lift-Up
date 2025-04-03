import { NativeBaseProvider } from "native-base";
import { Stack } from "expo-router";
import { theme } from "../theme";

export default function RootLayout() {
  return (
    <NativeBaseProvider theme={theme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </NativeBaseProvider>
  );
}
