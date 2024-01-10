import Header from '#/components/Header';
import ListOfUsers from '#/components/ListOfUsers';
import Search from '#/components/Search';
import { GlobalStyles } from '#/styles';
import React from 'react';
import { SafeAreaView } from 'react-native';

const FavoriteView = ({ favoritesList }) => (
  <SafeAreaView style={GlobalStyles.containerWithoutPadding}>
    <Header />
    <Search />
    <ListOfUsers homeDetails={favoritesList.favorite} />
  </SafeAreaView>
);
export default FavoriteView;
