import { DemoUser } from '#/svgs/index';
import React from 'react';
import { View, Text } from 'react-native';
import { HeaderStyles } from './styles';

const Header = () => (
  <View style={HeaderStyles.parentView}>
    <Text style={HeaderStyles.userNameTextStyle}>Hi! Beth</Text>
    <DemoUser />
  </View>
);

export default Header;
