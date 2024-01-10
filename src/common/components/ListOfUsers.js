/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import { Colors, GlobalStyles } from '#/styles';
import SingleUserView from './SingleUserView';
import { ListOfUsersStyles } from './styles';

const ListOfUsers = ({
  homeDetails,
  fetchNextPage,
  hasNextPage = false,
  isLoading = false,
  isFetchingNextPage = false,
}) =>
  isLoading ? (
    <View style={ListOfUsersStyles.loadingView}>
      <ActivityIndicator size="large" color={Colors.activeTabColor} />
    </View>
  ) : (
    <FlatList
      data={homeDetails}
      style={ListOfUsersStyles.flatListStyle}
      ListEmptyComponent={() => (
        <View style={ListOfUsersStyles.emptyComponentView}>
          <Text style={ListOfUsersStyles.noDataFoundTextStyle}>
            There are no favorites people added
          </Text>
        </View>
      )}
      ListFooterComponent={() =>
        hasNextPage && !isFetchingNextPage ? (
          <View style={GlobalStyles.flex}>
            <Text
              style={ListOfUsersStyles.viewMoreTextStyle}
              onPress={() => fetchNextPage()}
            >
              View More
            </Text>
          </View>
        ) : (
          <View style={{ flex: 1, alignItems: 'center' }}>
            <ActivityIndicator size="large" color={Colors.activeTabColor} />
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
