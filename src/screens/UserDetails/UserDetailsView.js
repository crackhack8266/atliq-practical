import { Colors, GlobalStyles, Metrics } from '#/styles';
import {
  BackIcon,
  MaleGenderIcon,
  ProfileDesign,
  ProfileIcon,
} from '#/svgs/index';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';

const UserDetailsView = ({ userDetails }) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={GlobalStyles.containerWithoutPadding}>
      <View
        style={{
          marginHorizontal: Metrics.ScaleValue(18),
          marginTop: Metrics.ScaleValue(12),
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          activeOpacity={0.7}
        >
          <BackIcon />
        </TouchableOpacity>
        <View
          style={{
            marginTop: Metrics.ScaleValue(31),
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <View style={{ width: Metrics.ScaleValue(130) }}>
            <ProfileIcon />
            <View
              style={{
                padding: Metrics.ScaleValue(12),
                backgroundColor: Colors.white,
                position: 'absolute',
                bottom: Metrics.ScaleValue(4),
                left: Metrics.ScaleValue(89),
                borderRadius: Metrics.ScaleValue(25),
                shadowColor: Colors.shadowColor,
                shadowOffset: {
                  width: Metrics.ScaleValue(-2),
                  height: Metrics.ScaleValue(2),
                },
                shadowOpacity: Metrics.ScaleValue(0.3),
                shadowRadius: Metrics.ScaleValue(20),
              }}
            >
              <MaleGenderIcon />
            </View>
          </View>
          <View style={{ marginLeft: Metrics.ScaleValue(20) }}>
            <Text
              style={{
                ...Metrics.mediumEighteen,
                color: '#B5B5B5',
                lineHeight: Metrics.ScaleValue(20),
                letterSpacing: Metrics.ScaleValue(-0.36),
              }}
            >
              Hi, My name is
            </Text>
            <Text
              style={{
                ...Metrics.semiboldTwentyTwo,
                color: '#696464',
                letterSpacing: Metrics.ScaleValue(-0.44),
                flexWrap: 'wrap',
                width: 200,
                marginRight: Metrics.ScaleValue(20),
              }}
            >
              {userDetails.name}
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          alignSelf: 'flex-end',
          position: 'absolute',
          bottom: Metrics.ScaleValue(0),
        }}
      >
        <ProfileDesign />
      </View>
    </SafeAreaView>
  );
};

export default UserDetailsView;
