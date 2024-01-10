/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { Metrics } from '#/styles';
import SingleUserView from './SingleUserView';

const ListOfUsers = ({ homeDetails, fetchNextPage, hasNextPage }) => (
  <FlatList
    data={homeDetails}
    style={{
      marginTop: Metrics.ScaleValue(20),
      marginHorizontal: Metrics.ScaleValue(18),
      marginBottom: Metrics.ScaleValue(60),
    }}
    ListFooterComponent={() =>
      hasNextPage && (
        <View>
          <Text onPress={() => fetchNextPage()}>View More</Text>
        </View>
      )
    }
    keyExtractor={(item, index) => `${item.id}-${index}`}
    renderItem={({ item: userDetails }) => (
      <SingleUserView userDetails={userDetails} />
    )}
  />
);

export default ListOfUsers;
