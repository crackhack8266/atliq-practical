import React from 'react';
import { View, Text } from 'react-native';
import UserDetailsView from './UserDetailsView';

const UserDetailsContainer = ({ route }) => {
  const { userDetails } = route.params;
  return <UserDetailsView userDetails={userDetails} />;
};

export default UserDetailsContainer;
