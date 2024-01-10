module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '#/components': './src/common/components',
          '#/constant': './src/common/constant',
          '#/images': './src/common/assets/images/pngs',
          '#/svgs': './src/common/assets/images/svgs',
          '#/config': './src/common/config',
          '#/styles': './src/common/styles',
          '#/context': './src/context',
          '#/wrappers': './src/common/wrappers',
          '#/screens': './src/screens',
          '#/utils': './src/utils',
          '#/navigators': './src/navigators',
          '#/hooks': './src/hooks',
          '#/redux': './src/redux',
          '#/': './src/',
        },
        extensions: ['.js', '.jsx', '.json', '.svg', '.jpg', '.png'],
      },
    ],
  ],
};
