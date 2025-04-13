import React, { useEffect } from "react";
import { View, Image, Dimensions } from "react-native";
import Animated, {
  useAnimatedStyle,
  withSpring,
  withTiming,
  useSharedValue,
  runOnJS,
} from "react-native-reanimated";

interface SplashScreenProps {
  onFinish: () => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onFinish }) => {
  const opacity = useSharedValue(0);
  const scale = useSharedValue(0.3);
  const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

  useEffect(() => {
    opacity.value = withTiming(1, { duration: 1000 });
    scale.value = withSpring(1, {
      damping: 10,
      stiffness: 100,
    });

    const timer = setTimeout(() => {
      runOnJS(onFinish)();
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      transform: [{ scale: scale.value }],
    };
  });

  return (
    <View
      style={{
        flex: 1,
        width: screenWidth,
        height: screenHeight,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Animated.View
        style={[
          animatedStyle,
          {
            alignItems: "center",
            justifyContent: "center",
            width: screenWidth * 0.3,
            height: screenWidth * 0.3,
          },
        ]}
      >
        <Image
          source={require("../assets/images/logo.png")}
          style={{
            width: "100%",
            height: "100%",
            resizeMode: "contain",
          }}
        />
      </Animated.View>
    </View>
  );
};
