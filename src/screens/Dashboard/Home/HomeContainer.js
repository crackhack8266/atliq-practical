import React from 'react';
import useGetRandomPeopleData from '#/hooks/useGetRandomPeopleData';
import HomeView from './HomeView';

const HomeContainer = () => {
  const {
    data: homeDetails,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useGetRandomPeopleData({
    page: 1,
    results: 20,
  });

  return (
    <HomeView
      homeDetails={
        homeDetails?.pages
          ?.map((item) => item?.results)
          .flat()
          .filter(Boolean) || []
      }
      fetchNextPage={fetchNextPage}
      hasNextPage={hasNextPage}
      isLoading={isLoading}
      isFetchingNextPage={isFetchingNextPage}
    />
  );
};

export default HomeContainer;
