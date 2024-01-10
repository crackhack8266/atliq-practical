import React from 'react';
import UserDetailsView from './UserDetailsView';

const UserDetailsContainer = ({ route }) => {
  const { userDetails } = route.params;
  return <UserDetailsView userDetails={userDetails} />;
};

export default UserDetailsContainer;
