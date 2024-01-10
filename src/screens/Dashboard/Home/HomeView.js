import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { GlobalStyles } from '#/styles';
import Header from './components/Header';
import Search from './components/Search';
import ListOfUsers from './components/ListOfUsers';

const HomeView = ({ homeDetails, fetchNextPage, hasNextPage }) => (
  <SafeAreaView style={GlobalStyles.containerWithoutPadding}>
    <Header />
    <Search />
    <ListOfUsers
      homeDetails={homeDetails}
      fetchNextPage={fetchNextPage}
      hasNextPage={hasNextPage}
    />
  </SafeAreaView>
);

export default HomeView;
