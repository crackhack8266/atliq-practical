import { GlobalStyles } from '#/styles';
import { SplashScreen } from '#/svgs/index';
import React from 'react';
import { SafeAreaView } from 'react-native';

const SplashScreenView = () => (
  <SafeAreaView style={GlobalStyles.containerWithoutPadding}>
    <SplashScreen width="100%" height="100%" />
  </SafeAreaView>
);

export default SplashScreenView;
