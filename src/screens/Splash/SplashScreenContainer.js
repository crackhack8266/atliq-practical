import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import SplashScreenView from './SplashScreenView';

const SplashScreenContainer = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      navigation.replace('TabNavigator');
    }, 2000);

    return () => {
      clearTimeout(timeOutId);
    };
  }, []);

  return <SplashScreenView />;
};

export default SplashScreenContainer;
