import { Colors, Metrics } from '#/styles';
import { FavoriteIcon, FemaleGenderIcon, MaleGenderIcon } from '#/svgs/index';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

const SingleUserView = ({ userDetails }) => {
  const navigation = useNavigation();
  const favoriteList = useSelector((state) => state.favorite);
  console.log({ favoriteList });
  const dispatch = useDispatch();
  return (
    <View
      style={{
        flexDirection: 'row',
        height: Metrics.ScaleValue(56),
        width: '100%',
        marginBottom: Metrics.ScaleValue(15),
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          width: '85%',
        }}
        onPress={() =>
          navigation.navigate('UserDetails', { userDetails: userDetails })
        }
        activeOpacity={0.8}
      >
        <View
          style={{
            width: Metrics.ScaleValue(62),
            height: Metrics.ScaleValue(56),
          }}
        >
          <View
            style={{
              backgroundColor: Colors.white,
              position: 'absolute',
              zIndex: 1,
              padding: Metrics.ScaleValue(8),
              borderRadius: Metrics.ScaleValue(25),
              top: Metrics.ScaleValue(1),
              shadowColor: Colors.shadowColor,
              shadowOffset: {
                width: Metrics.ScaleValue(-2),
                height: Metrics.ScaleValue(2),
              },
              shadowOpacity: Metrics.ScaleValue(0.2),
              shadowRadius: Metrics.ScaleValue(20),
            }}
          >
            {userDetails.gender === 'male' ? (
              <MaleGenderIcon />
            ) : (
              <FemaleGenderIcon />
            )}
          </View>
          <View>
            <Image
              source={{ uri: userDetails.picture.medium }}
              width={Metrics.ScaleValue(45)}
              height={Metrics.ScaleValue(45)}
              style={{
                position: 'absolute',
                top: Metrics.ScaleValue(11),
                left: Metrics.ScaleValue(18),
                borderRadius: Metrics.ScaleValue(25),
              }}
            />
          </View>
        </View>
        <View style={{ marginLeft: Metrics.ScaleValue(12) }}>
          <Text
            style={{
              ...Metrics.semiboldSixteen,
              color: '#696464',
              lineHeight: Metrics.ScaleValue(20),
              letterSpacing: Metrics.ScaleValue(-0.32),
            }}
          >
            {`${userDetails.name.first} ${userDetails.name?.last || ''}`}
          </Text>
          <Text
            style={{
              ...Metrics.normalTwelve,
              color: '#8B8B8B',
              lineHeight: Metrics.ScaleValue(20),
              letterSpacing: Metrics.ScaleValue(-0.24),
            }}
          >
            {userDetails.email}
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          dispatch({ type: 'STORE_FAVORITES', payload: userDetails })
        }
        style={{ marginRight: Metrics.ScaleValue(15) }}
        activeOpacity={0.7}
      >
        <FavoriteIcon />
      </TouchableOpacity>
    </View>
  );
};

export default SingleUserView;
