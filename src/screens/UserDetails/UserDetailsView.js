import { GlobalStyles, Metrics } from '#/styles';
import {
  BackIcon,
  BirthdayIcon,
  FemaleGenderIcon,
  LocationIcon,
  MailIcon,
  MaleGenderIcon,
  MobileIcon,
  ProfileDesign,
} from '#/svgs/index';
import { useNavigation } from '@react-navigation/native';
import moment from 'moment';
import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import UserDetailsStyles from './styles';

const UserDetailsView = ({ userDetails }) => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={GlobalStyles.containerWithoutPadding}>
      <View style={UserDetailsStyles.parentView}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          activeOpacity={0.7}
        >
          <BackIcon />
        </TouchableOpacity>
        <View style={UserDetailsStyles.profileImageAndNameView}>
          <View style={UserDetailsStyles.profileImageWidth}>
            <Image
              source={{ uri: userDetails.picture.large }}
              width={Metrics.ScaleValue(112)}
              height={Metrics.ScaleValue(112)}
              resizeMode="contain"
              style={UserDetailsStyles.profileImageBorder}
            />
            <View style={UserDetailsStyles.genderIconView}>
              {userDetails.gender === 'male' ? (
                <MaleGenderIcon />
              ) : (
                <FemaleGenderIcon />
              )}
            </View>
          </View>
          <View style={UserDetailsStyles.profileNameTitleView}>
            <Text style={UserDetailsStyles.profileNameTitleTextStyle}>
              Hi, My name is
            </Text>
            <Text style={UserDetailsStyles.profileNameValueTextStyle}>
              {`${userDetails.name.first} ${userDetails.name.last || ''}`}
            </Text>
          </View>
        </View>
        <View>
          <View
            style={[
              GlobalStyles.centerRowAlign,
              { marginTop: Metrics.ScaleValue(52) },
            ]}
          >
            <MailIcon />
            <Text style={UserDetailsStyles.userDetailsTextStyle}>
              {userDetails.email}
            </Text>
          </View>
          <View
            style={[
              GlobalStyles.centerRowAlign,
              { marginTop: Metrics.ScaleValue(12) },
            ]}
          >
            <MobileIcon />
            <Text style={UserDetailsStyles.userDetailsTextStyle}>
              {userDetails.cell}
            </Text>
          </View>
          <View
            style={[
              GlobalStyles.centerRowAlign,
              { marginTop: Metrics.ScaleValue(12) },
            ]}
          >
            <BirthdayIcon />
            <Text style={UserDetailsStyles.userDetailsTextStyle}>
              {moment(userDetails.dob.date).format('DD MMM YYYY')}
            </Text>
          </View>
          <View
            style={[
              GlobalStyles.centerRowAlign,
              { marginTop: Metrics.ScaleValue(12) },
            ]}
          >
            <LocationIcon />
            <Text style={UserDetailsStyles.userDetailsTextStyle}>
              {userDetails?.location?.street?.name || 'Not added'}
            </Text>
          </View>
        </View>
      </View>
      <View style={UserDetailsStyles.profileDesignView}>
        <ProfileDesign />
      </View>
    </SafeAreaView>
  );
};

export default UserDetailsView;
