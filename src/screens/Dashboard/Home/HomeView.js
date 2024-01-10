import React from 'react';
import { SafeAreaView } from 'react-native';
import { GlobalStyles } from '#/styles';
import Header from '#/components/Header';
import Search from '#/components/Search';
import ListOfUsers from '#/components/ListOfUsers';

const HomeView = ({
  homeDetails,
  fetchNextPage,
  hasNextPage,
  isLoading,
  isFetchingNextPage,
}) => (
  <SafeAreaView style={GlobalStyles.containerWithoutPadding}>
    <Header />
    <Search />
    <ListOfUsers
      homeDetails={homeDetails}
      fetchNextPage={fetchNextPage}
      hasNextPage={hasNextPage}
      isLoading={isLoading}
      isFetchingNextPage={isFetchingNextPage}
    />
  </SafeAreaView>
);

export default HomeView;
