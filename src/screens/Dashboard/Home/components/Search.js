import { Colors, Metrics } from '#/styles';
import { FilterIcon, SearchIcon } from '#/svgs/index';
import React from 'react';
import { View, TextInput } from 'react-native';

const Search = () => (
  <View
    style={{
      flexDirection: 'row',
      marginHorizontal: Metrics.ScaleValue(18),
      backgroundColor: Colors.white,
      shadowColor: Colors.shadowColor,
      shadowOffset: {
        width: Metrics.ScaleValue(-2),
        height: Metrics.ScaleValue(2),
      },
      shadowOpacity: Metrics.ScaleValue(0.1),
      shadowRadius: Metrics.ScaleValue(10),
      height: Metrics.ScaleValue(52),
      width: '90%',
      borderRadius: Metrics.ScaleValue(54),
      alignItems: 'center',
      paddingLeft: Metrics.ScaleValue(16),
      marginTop: Metrics.ScaleValue(32),
    }}
  >
    <SearchIcon />
    <TextInput
      autoCorrect={false}
      onChangeText={(text) => console.log({ text })}
      style={{
        height: Metrics.ScaleValue(52),
        width: '70%',
        marginLeft: Metrics.ScaleValue(12.28),
      }}
      placeholder="Search for random user"
      placeholderTextColor="#BDC4CA"
    />
    <View
      style={{
        width: Metrics.ScaleValue(2),
        backgroundColor: '#E0E2E3',
        height: Metrics.ScaleValue(52),
      }}
    />
    <View
      style={{
        flex: 1,
        borderTopRightRadius: Metrics.ScaleValue(52),
        borderBottomRightRadius: Metrics.ScaleValue(52),
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <FilterIcon />
    </View>
  </View>
);

export default Search;
