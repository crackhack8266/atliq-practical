/* eslint-disable react/no-unstable-nested-components */
import Favorite from '#/screens/Dashboard/Favorite';
import Home from '#/screens/Dashboard/Home';
import {
  FavoriteNotSelectedIcon,
  FavoriteSelectedIcon,
  HomeNotSelectedIcon,
  HomeSelectedIcon,
} from '#/svgs/index';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import NavigatorStyles from './styles';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const navigation = useNavigation();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarStyle: NavigatorStyles.tabBarStyle,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarShowLabel: false,
          tabBarLabelPosition: 'below-icon',
          tabBarButton: ({ accessibilityState }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate('Home')}
              style={NavigatorStyles.tabBarButtonView}
            >
              {accessibilityState.selected ? (
                <View>
                  <HomeSelectedIcon />
                  <View style={NavigatorStyles.activeIconStyle} />
                </View>
              ) : (
                <HomeNotSelectedIcon />
              )}
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={Favorite}
        options={{
          tabBarShowLabel: false,

          tabBarLabelPosition: 'below-icon',
          tabBarButton: ({ accessibilityState }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate('Favorite')}
              style={NavigatorStyles.tabBarButtonView}
            >
              {accessibilityState.selected ? (
                <View>
                  <FavoriteSelectedIcon />
                  <View style={NavigatorStyles.activeIconStyle} />
                </View>
              ) : (
                <FavoriteNotSelectedIcon />
              )}
            </TouchableOpacity>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
