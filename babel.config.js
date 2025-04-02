module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      'nativewind/babel', // Si tu utilises NativeWind
      '@gluestack-style/babel-plugin-styled-resolver',
    ],
  };