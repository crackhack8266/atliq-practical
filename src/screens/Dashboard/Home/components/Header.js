import { Colors, Metrics } from '#/styles';
import { DemoUser } from '#/svgs/index';
import React from 'react';
import { View, Text } from 'react-native';

const Header = () => (
  <View
    style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: Metrics.ScaleValue(20),
      marginHorizontal: Metrics.ScaleValue(18),
    }}
  >
    <Text
      style={{
        ...Metrics.semiboldTwentyFour,
        color: Colors.headerTitleColor,
        letterSpacing: Metrics.ScaleValue(-0.48),
        lineHeight: Metrics.ScaleValue(30),
      }}
    >
      Hi! Beth
    </Text>
    <DemoUser />
  </View>
);

export default Header;
