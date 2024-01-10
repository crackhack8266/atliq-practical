import React from 'react';
import useGetRandomPeopleData from '#/hooks/useGetRandomPeopleData';
import { useDispatch, useSelector } from 'react-redux';
import HomeView from './HomeView';

const HomeContainer = () => {
  const dispatch = useDispatch();
  const homeData = useSelector((state) => state.favorite.home);
  const { isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useGetRandomPeopleData(
      {
        page: 1,
        results: 20,
      },
      {
        onSuccess: (data) => {
          dispatch({
            type: 'STORE_HOME_DATA',
            payload:
              data?.pages
                ?.map((item) => item?.results)
                .flat()
                .filter(Boolean) || [],
          });
        },
      }
    );

  return (
    <HomeView
      homeDetails={homeData}
      fetchNextPage={fetchNextPage}
      hasNextPage={hasNextPage}
      isLoading={isLoading}
      isFetchingNextPage={isFetchingNextPage}
    />
  );
};

export default HomeContainer;
