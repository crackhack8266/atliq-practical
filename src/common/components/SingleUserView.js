import { Metrics } from '#/styles';
import {
  FavoriteIcon,
  FemaleGenderIcon,
  MaleGenderIcon,
  NotFavoriteIcon,
} from '#/svgs/index';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useDispatch } from 'react-redux';
import { SingleUserViewStyles } from './styles';

const SingleUserView = ({ userDetails }) => {
  const navigation = useNavigation();

  const dispatch = useDispatch();

  return (
    <View style={SingleUserViewStyles.parentView}>
      <TouchableOpacity
        style={SingleUserViewStyles.userContainer}
        onPress={() =>
          navigation.navigate('UserDetails', { userDetails: userDetails })
        }
        activeOpacity={0.8}
      >
        <View style={SingleUserViewStyles.genderAndUserProfileView}>
          <View style={SingleUserViewStyles.userGenderIconStyle}>
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
              style={SingleUserViewStyles.userImageStyle}
            />
          </View>
        </View>
        <View style={SingleUserViewStyles.userDetailsView}>
          <Text style={SingleUserViewStyles.userNameTextStyle}>
            {`${userDetails.name.first} ${userDetails.name?.last || ''}`}
          </Text>
          <Text style={SingleUserViewStyles.userEmailTextStyle}>
            {userDetails.email}
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          dispatch({ type: 'STORE_FAVORITES', payload: userDetails })
        }
        style={SingleUserViewStyles.favoriteIconView}
        activeOpacity={0.7}
      >
        {!userDetails.isNotFav ? <FavoriteIcon /> : <NotFavoriteIcon />}
      </TouchableOpacity>
    </View>
  );
};

export default SingleUserView;
