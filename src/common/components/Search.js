import { FilterIcon, SearchIcon } from '#/svgs/index';
import React from 'react';
import { View, TextInput } from 'react-native';
import { SearchStyles } from './styles';

const Search = () => (
  <View style={SearchStyles.parentView}>
    <SearchIcon />
    <TextInput
      autoCorrect={false}
      onChangeText={(text) => console.log({ text })}
      style={SearchStyles.textInputStyle}
      placeholder="Search for random user"
      placeholderTextColor="#BDC4CA"
    />
    <View style={SearchStyles.verticalSeparatorView} />
    <View style={SearchStyles.filterIconView}>
      <FilterIcon />
    </View>
  </View>
);

export default Search;
