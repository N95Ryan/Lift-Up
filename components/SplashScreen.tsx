import React, { useEffect } from "react";
import { View, Image } from "react-native";
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
    <View className="flex-1 items-center justify-center bg-white">
      <Animated.View
        style={animatedStyle}
        className="items-center justify-center"
      >
        <Image
          source={require("../assets/images/logo.png")}
          className="w-[50px] h-[50px]"
          resizeMode="contain"
        />
      </Animated.View>
    </View>
  );
};
