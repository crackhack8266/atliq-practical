/* eslint-disable react/no-unstable-nested-components */
import Favorite from '#/screens/Dashboard/Favorite';
import Home from '#/screens/Dashboard/Home';
import { Colors, Metrics } from '#/styles';
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

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const navigation = useNavigation();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: Metrics.ScaleValue(30),
          left: Metrics.ScaleValue(20),
          width: '90%',
          height: Metrics.ScaleValue(60),
          borderRadius: Metrics.ScaleValue(8),
          shadowColor: Colors.shadowColor,
          shadowOffset: {
            width: Metrics.ScaleValue(-2),
            height: Metrics.ScaleValue(2),
          },
          shadowOpacity: Metrics.ScaleValue(0.1),
          shadowRadius: Metrics.ScaleValue(10),
        },
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
              style={{
                width: '50%',
                alignItems: 'center',
                justifyContent: 'center',
                height: Metrics.ScaleValue(60),
                borderRadius: Metrics.ScaleValue(8),
              }}
            >
              {accessibilityState.selected ? (
                <View>
                  <HomeSelectedIcon />
                  <View
                    style={{
                      backgroundColor: '#d6205a',
                      height: Metrics.ScaleValue(3),
                      marginTop: Metrics.ScaleValue(3),
                      borderRadius: Metrics.ScaleValue(50),
                    }}
                  />
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
              style={{
                width: '50%',
                alignItems: 'center',
                justifyContent: 'center',
                height: Metrics.ScaleValue(60),
                borderRadius: Metrics.ScaleValue(8),
              }}
            >
              {accessibilityState.selected ? (
                <View>
                  <FavoriteSelectedIcon />
                  <View
                    style={{
                      backgroundColor: '#d6205a',
                      height: Metrics.ScaleValue(3),
                      marginTop: Metrics.ScaleValue(3),
                      borderRadius: Metrics.ScaleValue(50),
                    }}
                  />
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
